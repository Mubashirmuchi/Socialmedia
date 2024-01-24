import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/users.js";
import authRouter from "./routes/auth.js";
import postrouter from "./routes/post.js";
dotenv.config();

app.use(helmet());
app.use(express.json());
app.use(morgan("common"));
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/post", postrouter);

const PORT = process.env.PORT || 5000;
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server connected on ${PORT}`);
        });
    })

    .catch((error) => {
        console.log(error);
    });
