const express = require("express");
const postRouter = require("./routes/post.route");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth.route");
const testRouter = require("./routes/test.route")
const userRouter = require("./routes/user.route")
require('dotenv').config();
const cors = require("cors")
const app = express();


app.use(cors({ origin: 'http://localhost:3001', credentials: true }));
app.use(express.json()); // Middleware for parsing JSON bodies
app.use(cookieParser());
// Routes
// console.log(testRouter);
app.use("/api/post", postRouter);
app.use("/api/test", testRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
