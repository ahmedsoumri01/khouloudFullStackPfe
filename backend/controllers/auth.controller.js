const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
require("dotenv").config();

// 🔹 Register User
exports.register = async (req, res) => {
  const { firstName, lastName, email, password, phone, role } = req.body;
   try {
    let user = await User.findOne({ email });
    if (user) {
      console.log("User already exists");
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phone,

      role,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).json({ message: "User registered successfully", token ,user});
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// 🔹 Login User
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  console.log({
    email,
    password,
  });

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("Invalid Credentials");
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid Credentials");
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: 1000000,
    });
    console.log({ message: "Login successful", token });

    res.json({ message: "Login successful", token,user });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
// 🔹 createAdminAccount
exports.createAdminAccount = async () => {
  try {
    // Check if admin already exists
    const existingAdmin = await User.findOne({
      email: "admin.admin@example.com",
    });
    if (existingAdmin) {
      console.log("Admin account already exists.");
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash("Admin@1234", 10);

    // Create admin user
    const adminUser = new User({
      name: "Admin",
      email: "admin.admin@example.com",
      password: hashedPassword,
      role: "admin", // Make sure the role field exists in your schema
      phone: "0000000000",
      location: "HQ",
      profileImage: "",
      status: "active",
      isProfileCompleted: true,
      firstTimeLogin: false,
    });

    await adminUser.save();
    console.log("Admin account created successfully.");
  } catch (error) {
    console.error("Error creating admin account:", error);
  }
};
// 🔹 Protected Route Example
exports.protectedRoute = async (req, res) => {
  res.json({ message: "Welcome to the protected route", user: req.user });
};

// 🔹 Get logged-in user data (protected route)
exports.getLoggedUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id); // Retrieve the user using the user ID from JWT
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ data: { user } });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Logout User
exports.logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
