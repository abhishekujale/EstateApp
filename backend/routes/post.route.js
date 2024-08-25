const express = require("express");
const { verifyToken } = require("../middleware/verifyToken.js");
const { getPosts, getPost, addPost, updatePost, deletePost } = require("../controllers/post.controller.js");
const router = express.Router();

// Routes for handling posts
router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);

module.exports = router;
