import express from "express";
import bcrypt from "bcrypt";
import User from "../models/user.js";
const userRouter = express.Router();

// update user
userRouter.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.params.isAdmin) {
        if (req.body.password) {
            try {
                req.body.password = await bcrypt.hash(req.body.password, 8);
            } catch (error) {
                return res.status(500).json(error);
            }
        }

        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body });
            res.status(200).json("account has been updated");
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("you can only update your account");
    }
});

// delete user
userRouter.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.params.isAdmin) {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("account has been deleted successfully");
        } catch (error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json("you can delete only  your account");
    }
});
// get a user
userRouter.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, updatedAt, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        return res.status(500).json(error);
    }
});
// follow a user

// userRouter.put("/:id/follow", async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await User.findById(req.params.id);
//             const currentUser = await User.findById(req.body.userId);
//             if (!user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $push: { followers: req.body.userId } });
//                 await currentUser.updateOne({ $push: { following: req.body.userId } });
//                 res.status(200).json("you follew");
//             } else {
//                 res.status(403).json("you  follow this user");
//             }
//         } catch (error) {
//             res.status(500).json(error);
//         }
//     } else {
//         res.status(403).json("you cant follow your self");
//     }
// });

userRouter.put("/:id/follow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            console.log(user.username);
            console.log(currentUser.username);
            if (!user.followers.includes(req.body.userId)) {
                await currentUser.updateOne({ $push: { followers: req.params.id } });
                await user.updateOne({ $push: { following: req.body.userId } });

                res.status(200).json({ message: "User followed successfully" });
            } else {
                res.status(403).json({ error: "You already follow this user" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(403).json({ error: "You can't follow yourself" });
    }
});

// unfollow a user

userRouter.put("/:id/unfollow", async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { following: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you already unfollow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
});

export default userRouter;
