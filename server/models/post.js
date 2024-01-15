import mongoose from "mongoose";
import { type } from "os";

const postschema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        img: {
            type: String,
        },
        likes: {
            type: String,
            default: [],
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postschema);

export default Post;
