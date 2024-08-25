const jwt = require("jsonwebtoken");
require('dotenv').config();
exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {

        if (err) return res.status(403).json({ message: "Invalid token" });

        req.userId = payload.id;

        next();
    })
}
