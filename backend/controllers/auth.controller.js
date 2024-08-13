const bcrypt = require("bcrypt");
const { user } = require("../db")
const express = require("express")
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
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        const newUser = await user.create({
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



const login = (req, res) => {
    const { username, password } = req.body;

    //If it exists or not
    try {
        user.findOne({ username }).then((user) => {
            if (!user) {
                return res.status(401).json({ message: "Invalid credentials  !" });
            }
            const isValidPassword = bcrypt.compareSync(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({ message: "Invalid Credentials" });
            }
            const age = 1000 * 60 * 60 * 24 * 7;

            const userId = user._id;
            const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: age });


            res.cookie("token", token, {
                httpOnly: true,
                maxAge: age,
            }).status(200).json({
                msg: "Login Succesfully"
            })

        });

    }
    catch (err) {
        res.json({
            msg: "Failed to find Server Error"
        })
        console.log(err);
    }
};

const logout = (req, res) => {

    res.clearCookie("token").status(200).json({
        msg: "Logged out successfully"
    })
};

module.exports = { login, signup, logout };
