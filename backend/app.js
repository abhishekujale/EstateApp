const express = require("express");
const postRouter = require("./routes/post.route");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route");
require('dotenv').config();

const app = express();

app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser());
// Routes
app.use("/api/post", postRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
