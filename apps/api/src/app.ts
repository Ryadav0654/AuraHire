import express, { Express, NextFunction, Request, Response } from "express";
import "dotenv/config";
// dotenv.config();
import cors from "cors";
import main from "@repo/db/main";
import { v2 as cloudinary } from "cloudinary";
import { clerkMiddleware, requireAuth, getAuth, clerkClient, User } from '@clerk/express'
import resumeRouter from "./routers/resume.route";
import jobRouter from "./routers/job.route";
import feedbackRouter from "./routers/feedback.route";
import atsRouter from "./routers/ats.route";
import hasPermission from "./middleware/hasPermission";


const app: Express = express();

const ORIGIN:string = process.env.ORIGIN_URL || "http://localhost:3000";

app.use(cors({
  origin: ORIGIN,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"]
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware())

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port: string | number = process.env.PORT || 8080;

app.use("/api/v1/resume", requireAuth(), resumeRouter);
app.use("/api/v1/job", requireAuth(), jobRouter);
app.use("/api/v1/feedback", requireAuth(), feedbackRouter);
app.use("/api/v1/ats", requireAuth(), atsRouter);

app.get("/",  requireAuth(), async (req: Request, res: Response) => {
  console.log("req: ", req);  
  const auth = getAuth(req);
  const {userId} = auth;

  if(!userId) {
     res.status(401).send("Unauthorized");
     return;
  }

  const users:User = await clerkClient.users.getUser(userId)
  console.log("users: ", users);

  if(!users) {
     res.status(401).send("Unauthorized");
     return;
  }
  const {emailAddresses, firstName} = users;
  res.json({msg: "Hello from AuraHire.ai backed! Coming soon...", user: {email: emailAddresses[0]?.emailAddress, name: firstName}});
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("url: ", req.path);

  if(err){
    console.log("error occured: ", req.path, err);
    res.status(404).json({message: "error occured", error: err})
    return;
  }

  next()
})

app.listen(port, async () => {
  try {
    await main();
    console.log(`AuraHire.ai server listening on port: ${port}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});
