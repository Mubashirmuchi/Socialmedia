import mongoose from "mongoose";
import { type } from "os";

const postschema = new mongoose.Schema(
    {
        originalname: {
            type: String,
            // required: true,
        },
        image: {
            data: Buffer,
            contentType: String,
        },
        userId: {
            type: String,
            // required: true,
        },
        desc: {
            type: String,
            max: 500,
        },
        url: {
            type: String,
        },
        likes: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postschema);

export default Post;
