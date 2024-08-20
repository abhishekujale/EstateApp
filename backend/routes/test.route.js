const express = require("express");
const jwt = require("jsonwebtoken");
const { shouldBeAdmin, shouldBeLoggedIn } = require("../controllers/test.controller.js");
const router = express.Router();

// Middleware to check if the user is logged in
const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) return res.status(403).json({ message: "Invalid token" });

        req.userId = payload.id;
        next();
    });
};

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

module.exports = router;
