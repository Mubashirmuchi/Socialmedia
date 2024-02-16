import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const router = express.Router();
router.use(express.json());
router.use(cookieParser());

router.post("/register", async (req, res) => {
    console.log(req.body);
    try {
        console.log("-----qusermname", req.body.username);
        const isUserExist = await User.findOne({ email: req.body.email });

        if (isUserExist?._id) {
            return res.status(400).json({ message: "already exist" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            fullname: req.body.fullname,
            password: hashedPassword,
        });
        await user.save();

        res.status(200).json({ message: "Success" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(200).json("user not found");
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log("isPasswordCorrect", isPasswordCorrect);
        if (!isPasswordCorrect) return res.status(400).json({ message: "incorrect email or password" });

        console.log(user._id, "ispassword correct");

        const token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: "48h" });
        user.password = undefined;
        //res.status(200).cookie("token", token, { httpOnly: true }).json({ success: true, token, user });
        res.status(200)
            .cookie("token", token, { httpOnly: true, sameSite: "none", secure: true })
            .json({ success: true, token, user });

        console.log(res.cookie, "cookieesss");
    } catch (error) {
        res.status(500).json(error);
    }
});

// router.post("/oauth", async (req, res) => {
//     const { email, photo, name } = req.body;
//     try {
//         console.log(email);
//         // const user = await User.findOne({ email:email });
//         const user = {email}
//         if (user) return res.status(404).json("user not found");

//         const token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: "48h" });
//         // user.password = undefined;
//         //res.status(200).cookie("token", token, { httpOnly: true }).json({ success: true, token, user });
//         res.status(200)
//             .cookie("token", token, { httpOnly: true, sameSite: "none", secure: true })
//             .json({ success: true, token, user });

//         console.log(res.cookie, "cookieesss");
//     } catch (error) {
//         console.log("Oauth erroor");
//     }
// });
router.post("/oauth", async (req, res) => {
    const { email, photo, name } = req.body;
    try {
        const user = new User({
            username: name,
            email: email,
            fullname: name,
            profilePicture: photo,
            password: "12345",
        });
        const resp = await user.save();
        console.log("rressp", resp);
        res.status(200).json({ message: "Success", data: resp });
    } catch (error) {
        console.log("Oauth erroor");
    }
});

export default router;
