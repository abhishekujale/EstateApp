const express = require("express");
const { verifyToken } = require("../middleware/verifyToken.js")
const { getUsers, getUser, deleteUser, updateUsers } = require("../controllers/user.controller.js")
const router = express.Router();
// Routes for authentication
router.get("/", getUsers);
router.post("/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUsers);
router.delete("/:id", verifyToken, deleteUser);

module.exports = router;
