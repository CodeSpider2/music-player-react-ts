import { log } from "console";
import db from "../config/config.js";
import sign_up_validator from "../schemas/validators.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import path from "path";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const musicDirectory = path.join(__dirname, "music");
export const postUsers = async (req, res) => {
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

      const salt = bcrypt.genSaltSync(10);

      const hashedPass = bcrypt.hashSync(password, salt);

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
      const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
          user: "wachiraamos@outlook.com",
          pass: "amo11063",
        },
      });
      const mailOptions = {
        from: "wachiraamos@outlook.com",
        to: data.email,
        subject: "Thanks for Joining STREAM",
        text: `Dear ${data.userName},

We are thrilled to welcome you to our web app community! On behalf of the entire team, I wanted to extend a heartfelt thank you for choosing to join us.

At STREAM, we strive to provide an exceptional user experience and offer valuable features that cater to your needs. We're excited to have you on board and look forward to serving you.`,
      };
      transporter.sendMail(mailOptions);
    });
  } catch (error) {
    log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const query = `SELECT * FROM Users WHERE email = '${email}'`;
    db.query(query, async (err, user) => {
      if (err) {
        log(err);
        return;
      }
      if (!user[0]) {
        res.json({ message: "Account not found please sign up" });
        return;
      }
      const storedPassword = user[0].userPassword;

      const passwordMatch = await bcrypt.compare(password, storedPassword);

      if (!passwordMatch) {
        return res.json({ message: "Incorrect password" });
      }
      const payload = { id: user[0].id, email: user[0].email };

      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "3600s",
      });

      return res.json({ message: "Login successful", token });
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error });
  }
};

export const playMusic = (req, res) => {
  const track = req.params.track;
  const filePath = path.join(__dirname, "music", track + ".mp3");

  if (!fs.existsSync(filePath)) {
    res.status(404).send("Track not found");
    return;
  }
  res.setHeader("Content-Type", "audio/mpeg");
  res.setHeader("Content-Disposition", `attachment; filename="${track}"`);
  // res.json(track);

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
};
export const getMusic = (req, res) => {
  fs.readdir(musicDirectory, (err, files) => {
    if (err) {
      console.error("Error reading music directory:", err);
      return;
    }
    const musicFiles = files.filter((file) => {
      const fileExtension = path.extname(file).toLowerCase();
      return [".mp3", ".aac"].includes(fileExtension);
    });

    res.json(musicFiles);
  });
};
