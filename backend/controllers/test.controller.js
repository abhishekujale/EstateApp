const jwt = require("jsonwebtoken");

exports.shouldBeLoggedIn = async (req, res) => {
    ///There is a middleware in the test.route.js
    res.status(200).json({ message: "You are Authenticated" });
};

exports.shouldBeAdmin = async (req, res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated!" });

    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
        if (err) return res.status(403).json({ message: "Token is not Valid!" });
        if (!payload.isAdmin) {
            return res.status(403).json({ message: "Not authorized!" });
        }
    });

    res.status(200).json({ message: "You are Authenticated" });
};
