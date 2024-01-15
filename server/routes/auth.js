import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is auth router");
});

router.post("/register", async (req, res) => {
    try {
        const isUserExist = await User.findOne({ email: req.body.email });

        if (isUserExist?._id) {
            return res.status(400).json({ message: "already exist" });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        await user.save();

        res.status(200).json("success");
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post("/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json("user not found");
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        console.log("isPasswordCorrect", isPasswordCorrect);
        if (!isPasswordCorrect) return res.status(400).json("incorrect email or password");

        console.log(user._id, "ispassword cotrreeer");

        const token = jwt.sign({ id: user._id }, process.env.SECRETKEY, { expiresIn: "48h" });

        res.cookie("token", token, { httpOnly: true });
        res.status(200).json("Login Sucessfull!!");
    } catch (error) {
        res.status(500).json(error);
    }
});

export default router;
