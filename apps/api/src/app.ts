import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import resumeRouter from "./routers/resume.route";
import jobRouter from "./routers/job.route";
import main from "@repo/db/main";
import mongoose from "mongoose";

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port: string | number = process.env.PORT || 8080;
const DB_URL = process.env.MONGO_URI || "";

app.use("/api/v1/resume", resumeRouter);
app.use("/api/v1/job", jobRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from AuraHire.ai backed! Coming soon...");
});

app.listen(port, async () => {
  try {
    await main();
    // await mongoose.connect(DB_URL);
    // console.log("Database connected!");
    console.log(`AuraHire.ai server listening on port: ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
