import { log } from "console";
import db from "../config/config.js";
import sign_up_validator from "../schemas/validators.js";
import { v4 as uuidv4 } from "uuid";

export const postUsers = (req, res) => {
  try {
    const { userName, password, email } = req.body;
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
        userPassword: password,
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
