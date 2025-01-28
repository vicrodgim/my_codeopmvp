const pool = require("../config/db");
var jwt = require("jsonwebtoken");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const supersecret = process.env.SUPER_SECRET;

const register = async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    return res.status(400).send({ message: "All fields are required" });
  }
  if (password.length < 8) {
    return res
      .status(400)
      .send({ message: "Password must be at least 8 characters long" });
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).send({ message: "Invalid email format" });
  }

  try {
    const hash = await bcrypt.hash(password, saltRounds);

    await pool.query(
      `INSERT INTO users (username, password, email) VALUES (?,?,?)`,
      [username, hash, email]
    );

    res.send({ message: "Register successful" });
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res
        .status(400)
        .send({ message: "Username or email already exists" });
    }
    res.status(500).send({ message: "An error occurred during registration" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({ message: "All fields are required" });
  }

  try {
    const [results] = await pool.query(
      `SELECT * FROM users WHERE username = ?`,
      [username]
    );

    const user = results[0];

    if (user) {
      const user_id = user.id;
      const correctPassword = await bcrypt.compare(password, user.password);
      if (!correctPassword) throw new Error("Incorrect password");
      let token = jwt.sign({ user_id }, supersecret);
      res.send({ message: "Login successful, here is your token", token });
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (err) {
    res
      .status(500)
      .send({ message: "An internal error occurred during login" });
  }
};

const getProfile = async (req, res) => {
  try {
    const [results] = await pool.query(
      `SELECT username FROM users WHERE id=?`,
      [req.user_id]
    );
    if (results.length === 0) {
      return res.status(404).send({ message: "Profile not found" });
    }
    res.send(results[0]);
  } catch (err) {
    res
      .status(500)
      .send({ message: "An internal error occurred while fetching profile" });
  }
};

module.exports = {
  register,
  login,
  getProfile,
};
