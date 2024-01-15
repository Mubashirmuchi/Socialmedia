import express from "express";
const postrouter = express.Router();
import Post from "../models/post.js";

postrouter.get("/", (req, res) => {
    res.send("");
});

// create a post

postrouter.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedpost = await newPost.save();
        res.status(200).json(savedpost);
    } catch (error) {
        res.status(500).json(error);
    }
});
// update a post

postrouter.put("/:id", async (req, res) => {
    try {
        const post = Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});
// delete a post
// like a post
// get a post
// get timeline post

export default postrouter;
