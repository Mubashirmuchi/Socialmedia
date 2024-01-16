import express from "express";
const postrouter = express.Router();
import Post from "../models/post.js";
import User from "../models/user.js";
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

postrouter.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        } else {
            res.status(403).json("you can delete only your post");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// like a post

postrouter.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await Post.updateOne({ _id: req.params.id }, { $push: { likes: req.body.userId } });
            res.status(200).json("The post has been liked");
        } else {
            await Post.updateOne({ _id: req.params.id }, { $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been disliked");
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

// get a post

postrouter.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});
// get timeline post

postrouter.get("/timeline/:userId", async (req, res) => {
    const currentuser = await User.findById(req.params.userId);
    const userpost = await Post.find({ userId: currentuser._id });
    const friendspost = await Promise.all(
        currentuser.following.map((friendid) => {
            return Post.find({ userId: friendid });
        })
    );
    res.status(200).json(userpost.concat(...friendspost));
    try {
    } catch (error) {
        res.status(500).json(error);
    }
});

export default postrouter;
