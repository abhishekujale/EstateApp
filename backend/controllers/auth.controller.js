const bcrypt = require("bcrypt");
const mongoose = require("mongoose")
const express = require("express")
const { User } = require('../db'); // Ensure you import the correct User model
const zod = require("zod");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const signupBody = zod.object({
    email: zod.string().email(),
    username: zod.string(),
    password: zod.string(),
    avatar: zod.string()
})
const app = express();
app.use(cookieParser());

const signup = async (req, res) => {
    const success = signupBody.safeParse(req.body);
    if (!success.success) {
        return res.status(400).json({
            message: "Incorrect input",
            errors: success.error.errors
        })
    }
    const { email, username, password, avatar } = req.body;

    try {

        const existingUser = await User.findOne({
            email
        });
        if (existingUser) {
            return res.status(400).json({
                msg: "Email is already taken"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const newUser = await User.create({
            email,
            username,
            avatar,
            password: hashedPassword
        });
        const userId = newUser._id;
        const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '10h' });

        res.status(201).json({
            message: "User successfully created",
            token
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const signinbody = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6) // Minimum length of 6 characters
});

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Corrected the model reference to `User` instead of `user`
        const user = await User.findOne({ username: req.body.username });

        if (!user) return res.status(400).json({ message: "Invalid Credentials!" });

        // CHECK IF THE PASSWORD IS CORRECT
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid)
            return res.status(400).json({ message: "Invalid Credentials!" });

        // GENERATE COOKIE TOKEN AND SEND TO THE USER
        const age = 1000 * 60 * 60 * 24 * 7;

        const token = jwt.sign(
            {
                id: User._id, // Ensure you're using `_id` instead of `id` for MongoDB documents
                isAdmin: false,
            },
            process.env.JWT_SECRET,
            { expiresIn: age }
        );

        const { password: userPassword, ...userInfo } = user._doc; // Ensure correct extraction of user information

        res
            .cookie("token", token, {
                httpOnly: true,
                maxAge: age,
            })
            .status(200)
            .json(userInfo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to login!" });
    }
};

const logout = (req, res) => {

    res.clearCookie("token").status(200).json({
        msg: "Logged out successfully"
    })
};

module.exports = { login, signup, logout };
