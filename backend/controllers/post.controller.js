const { Post, PostDetail, SavedPost, Chat, Message } = require("../db")
require('dotenv').config();

exports.getPosts = async (req, res) => {
    try {

        const posts = await Post.find();
        res.status(200).json({
            msG: "posts",
            posts
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error fetching posts"
        })
    }
}
exports.getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }
        res.status(200).json({
            message: "Post retrieved successfully",
            post
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error fetching single post"
        })
    }
}
exports.addPost = async (req, res) => {

    const body = req.body;
    // console.log(body);
    console.log("_-_______________---______");
    // console.log(req.body);
    const tokenUserId = req.body.postData.userId;
    // console.log(tokenUserId);
    // console.log(body.postData);
    try {
        const newPost = await Post.create({
            ...body.postData,
            userId: tokenUserId,
            // PostDetail: body.PostDetail
        });
        res.status(200).json({
            newPost
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error while  adding post"
        })
    }
}
exports.updatePost = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(id, body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }
        res.status(200).json({
            message: "Post updated successfully",
            updatedPost
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error updating post"
        });
    }
}
exports.deletePost = async (req, res) => {
    const id = req.params.id;
    const tokenUserId = req.userId;
    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
            });
        }
        if (tokenUserId.toString() !== post.userId.toString()) {
            return res.status(403).json({
                message: "Not authorized to delete this post"
            });
        }
        await post.deleteOne();
        res.status(200).json({
            message: "Post deleted successfully"
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Error fetching posts"
        })
    }
}
