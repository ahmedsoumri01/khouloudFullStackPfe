const express = require("express");
const { authMiddleware } = require("../middlewares/auth.middleware");
const {
  createAdmin,
  getAllUsers,
  changeUserAccountStatus,
  getUserById,
  deleteUserById,
  updateUser,
} = require("../controllers/user.controller");
const { getAllWorkers } = require("../controllers/worker.controller");

const router = express.Router();

// Route: Create admin account

router.post("/create-admin", authMiddleware, createAdmin);

// Route: Get all workers

router.get("/get-workers", authMiddleware, getAllWorkers);

// Route: Get all users

router.get("/get-users", authMiddleware, getAllUsers);

// Route: Change user account status

router.put("/change-user-status", authMiddleware, changeUserAccountStatus);

// Route: Get user by ID

router.get("/get-user/:id", authMiddleware, getUserById);

// Route: Delete user by ID

router.delete("/delete-user/:id", authMiddleware, deleteUserById);

// Route: Update user by ID

router.put("/update-user/:id", authMiddleware, updateUser);

module.exports = router;
