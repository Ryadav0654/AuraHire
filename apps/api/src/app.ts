import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import main from "@repo/db/main";
import { v2 as cloudinary } from "cloudinary";
import resumeRouter from "./routers/resume.route";
import jobRouter from "./routers/job.route";
import feedbackRouter from "./routers/feedback.route";

// import mongoose from "mongoose";

const app: Express = express();

const ORIGIN:string = process.env.ORIGIN_URL || "http://localhost:3000";

app.use(cors({
  origin: ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port: string | number = process.env.PORT || 8080;

app.use("/api/v1/resume", resumeRouter);
app.use("/api/v1/job", jobRouter);
app.use("/api/v1/feedback", feedbackRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from AuraHire.ai backed! Coming soon...");
});

app.listen(port, async () => {
  try {
    await main();
    console.log(`AuraHire.ai server listening on port: ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
