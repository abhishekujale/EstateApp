require('dotenv').config();

const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL).then((data) => {
    console.log("Connected to database")
})

const userSchema = new mongoose.Schema({

    email: { type: String, required: true, unique: true, trim: true, lowercase: true, minLength: 3, maxLength: 30 },
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true, trim: true },
    avatar: { type: String, required: false, trim: true, maxLength: 10 },
    createdAt: { type: Date, default: Date.now }
})

const user = mongoose.model("user", userSchema);

module.exports = {
    user
}