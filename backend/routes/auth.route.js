const express = require("express");
const { login, signup, logout } = require("../controllers/auth.controller");

const router = express.Router();

// Routes for authentication
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
