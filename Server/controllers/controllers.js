import { log } from "console";
import db from "../config/config.js";
import sign_up_validator from "../schemas/validators.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postUsers = async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    const hashedPass = await bcrypt.hash(password, 10);

    const id = uuidv4();
    const trial_data = { userName, password, email };
    const { error, value } = sign_up_validator.validate(trial_data);
    if (error) {
      res.json(error.details[0].message);
      return;
    }
    // Check if a user exists
    const query1 = `SELECT * FROM Users WHERE email = ?`;
    db.query(query1, [email], (err, result) => {
      if (err) {
        log(err);
        return;
      }
      if (result.length > 0) {
        res.json({ message: "User already exists" });
        return;
      }

      const data = {
        Id: id,
        userName,
        userPassword: hashedPass,
        email,
      };
      const query = `INSERT INTO Users SET?`;
      db.query(query, data, (err, resp) => {
        if (err) log(err);
        res.json({ message: "User added successfully", response: resp });
        return;
      });
    });
  } catch (error) {
    log(error);
  }
};

export const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM Users WHERE email = '${email}'`;
    db.query(query, (err, user) => {
      if (err) {
        log(err);
        return;
      }
      if (!user[0]) {
        res.json({ message: "Account not found please sign up" });
        return;
      }
      const legitPassword = bcrypt.compare(user[0].userPassword, password);
      if (!legitPassword) {
        res.json({ message: "Incorrect password" });
        return;
      }
      const Payload = user.map((data) => {
        const { userPassword, ...rest } = data;
        return rest;
      });
      const token = jwt.sign(Payload[0], process.env.JWT_SIGNATURE, {
        expiresIn: "3600s",
      });
      res.json({ message: "Login successful", token: token });
      return;
    });
  } catch (error) {
    res.json(error);
  }
};
