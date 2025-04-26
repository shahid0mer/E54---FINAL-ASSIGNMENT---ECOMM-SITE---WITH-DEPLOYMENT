const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSignup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Signup data received:", name, email);
  const hashed = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ name, email, password: hashed });
    res.json(user);
  } catch (err) {
    console.error("Signup error:", err);
    res.status(400).json({ error: "User already exists" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ error: "Invalid credentials" });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res
    .cookie("token", token, { httpOnly: true, secure: true, sameSite: "none" })
    .json(user);
};

module.exports = { userSignup, userLogin };
