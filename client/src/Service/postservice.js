// // Get user post

// import { service } from "../Utils/service";
// import { API } from "../Config/api";

// postrouter.get("/userpost/:userId", async (req, res) => {
//     const currentuser = await User.findById(req.params.userId);
//     const userpost = await Post.find({ userId: currentuser._id });
//     res.status(200).json(userpost);
//     try {
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // create a post

// postrouter.post("/", upload.single("testimage"), (req, res) => {
//     const { originalname, path } = req.file;
//     const userId = req.body.username;
//     console.log("original path and name", originalname, path, userId);
//     try {
//         cloudinary.uploader.upload(req.file.path, (err, result) => {
//             if (err) {
//                 console.log(err);

//                 return res.status(500).json({ success: false, message: "error" });
//             }
//             const url = result.url;
//             const newPost = new Post({ userId, url, originalname, path });

//             newPost.save().then(() => {});
//             res.status(200).json({ success: true, message: "uploaded", data: result });
//         });
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // update a post

// postrouter.put("/:id", async (req, res) => {
//     try {
//         const post = Post.findById(req.params.id);
//         if (post.userId === req.body.userId) {
//             await post.updateOne({ $set: req.body });
//             res.status(200).json("the post has been updated");
//         } else {
//             res.status(403).json("you can update only your post");
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });
// // delete a post

// postrouter.delete("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.userId === req.body.userId) {
//             await post.deleteOne();
//             res.status(200).json("the post has been deleted");
//         } else {
//             res.status(403).json("you can delete only your post");
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // like a post

// postrouter.put("/:id/like", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         if (!post.likes.includes(req.body.userId)) {
//             await Post.updateOne({ _id: req.params.id }, { $push: { likes: req.body.userId } });
//             res.status(200).json("The post has been liked");
//         } else {
//             await Post.updateOne({ _id: req.params.id }, { $pull: { likes: req.body.userId } });
//             res.status(200).json("The post has been disliked");
//         }
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// // get a post

// postrouter.get("/:id", async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.id);
//         res.status(200).json(post);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });
// // get timeline post

// postrouter.get("/timeline/:userId", async (req, res) => {
//     const currentuser = await User.findById(req.params.userId);
//     const userpost = await Post.find({ userId: currentuser._id });
//     const friendspost = await Promise.all(
//         currentuser.following.map((friendid) => {
//             return Post.find({ userId: friendid });
//         })
//     );
//     res.status(200).json(userpost.concat(...friendspost));
//     try {
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// export default postrouter;

import { service } from "../Utils/service";
import { API } from "../Config/api";

// const PostService = {
//     getUserPost: async (params) => {
//         try {
//             const res = await service.get(API.GETAUSERPOST / params.id);
//             if (res?.data) {
//                 return res;
//             }
//         } catch (error) {
//             return error;
//         }
//     },

const PostService = {
    getUserPost: async (params) => {
        console.log("ppprams", params);
        const delayedPromise = new Promise((resolve) => {
            setTimeout(async () => {
                try {
                    const res = await service.get(`${API.GETAUSERPOST}/${params}`);
                    resolve(res);
                } catch (error) {
                    resolve(error);
                }
            }, 2000);
        });

        return delayedPromise;
    },

    // register: async (params = {}) => {
    //     try {
    //         const res = await service.post(API.SIGNUP, params);
    //         if (res?.data) {
    //             return res.data;
    //         } else {
    //             throw new Error("something went wrong");
    //         }
    //     } catch (error) {
    //         return error;
    //     }
    // },
    // logout: async () => {
    //     try {
    //         const res = await service.post(API.LOGOUT);
    //         if (res?.data) {
    //             return res.data;
    //         } else {
    //             throw new Error("something went wrong");
    //         }
    //     } catch (error) {
    //         return error;
    //     }
    // },

    // getProfile: async () => {
    //     try {
    //         const res = await service.get(API.PROFILE);
    //         if (res?.data) {
    //             return res.data;
    //         } else {
    //             throw new Error("Something went wrong");
    //         }
    //     } catch (error) {
    //         return error;
    //     }
    // },
};

export default PostService;
