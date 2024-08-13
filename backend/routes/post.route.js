const express = require("express")

const postRouter = express.Router();


postRouter.get("/test", (req, res) => {
    res.send("reoerero");
})
module.exports = postRouter;
