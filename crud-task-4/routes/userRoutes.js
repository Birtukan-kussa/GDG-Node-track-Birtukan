const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require("../controllers/userController");

// Get all users
router.get("/", getAllUsers);

// Get user by ID
router.get("/:id", getUserById);

// Create new user
router.post("/", createUser);

// Update user by ID
router.put("/:id", updateUser);

// Delete user by ID
router.delete("/:id", deleteUser);

module.exports = router;