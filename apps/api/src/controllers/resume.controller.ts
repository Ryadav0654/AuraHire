import { Request, Response } from "express";
import Resume from "@repo/db/resumeModel";
import mongoose from "mongoose";
import { handleUpload } from "../utils/cloudinary";

const resumeUploadController = async (req: Request, res: Response) => {
  try {
    const file = req.file;
    if (!file) {
      res.status(400).json({ message: "Resume is required" });
      return;
    }

    console.log(file);
    const b64: string = Buffer.from(file.buffer).toString("base64");
    let dataURI: string = "data:" + file.mimetype + ";base64," + b64;

    const cldRes = await handleUpload(dataURI);

    if (!cldRes?.secure_url) {
      res.status(400).json({ message: "Resume upload failed" });
      return;
    }

    console.log("cldRes: ", cldRes);
    const resume = await Resume.create({
      resume_url: cldRes.secure_url,
      resume_version: 1,
      resume_file_name: file.originalname,
      resume_public_id: cldRes.public_id,
    });

    if (!resume) {
      res.status(404).json({ message: "Error while creating resume!" });
      return;
    }
    console.log("resume: ", resume);
    res
      .status(201)
      .json({ message: "Resume uploaded successfully", resume: resume });
    return;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const getResume = async (req: Request, res: Response) => {
  try {
    const resumes = await Resume.find();

    if (!resumes) {
      res.status(404).json({ message: "Resume not found" });
      return;
    }

    res.status(200).json({ message: "Resume fetched successfully", resumes });
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const getResumeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Resume ID is required" });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid resume ID" });
      return;
    }

    const resume = await Resume.findById(id);

    if (!resume) {
      res.status(404).json({ message: "Resume not found" });
      return;
    }

    res.status(200).json({ message: "Resume fetched successfully", resume });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};
export { resumeUploadController, getResume, getResumeById };
