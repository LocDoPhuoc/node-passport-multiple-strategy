const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
// const RegisterController = require("../controllers/RegisterController");
const authMiddleware = require("../configs/authMiddleware");

const userController = new UserController();
// const registerController = new RegisterController();

// Login page
router.get("/", userController.index);

// Login handle
router.post("/login", userController.login);

// Logout handle
router.get('/logout', authMiddleware, userController.logout);

// Dashboard page
router.get('/dashboard', authMiddleware, userController.dashboard);

// // Register page
// router.get("/register", guest, registerController.index);
// // Register handle
// router.post("/register", registerController.register);

module.exports = router;