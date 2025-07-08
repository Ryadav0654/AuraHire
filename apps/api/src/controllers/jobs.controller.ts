import { Request, Response } from "express";
import Job from "@repo/db/jobModel";
import mongoose from "mongoose";

const createJobs = async (req: Request, res: Response) => {
  try {
    const { title, description, company, location, salary } = req.body;
    console.log(req.body);

    if (!title || !description || !company || !location || !salary) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const job = await Job.create({
      title,
      description,
      company,
      location,
      salary,
    });

    if (!job) {
      res.status(404).json({ message: "Error while created Job" });
      return;
    }
    res.status(201).json({ message: "Job created successfully", job });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const getJobs = async (req: Request, res: Response) => {
  try {
    const jobs = await Job.find();

    if (!jobs) {
      res.status(404).json({ message: "No jobs found" });
      return;
    }

    res.status(200).json({ message: "Jobs fetched successfully", jobs });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

const getJobById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "Job ID is required" });
      return;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid job ID" });
      return;
    }

    const job = await Job.findById(id);

    if (!job) {
      res.status(404).json({ message: "Job not found" });
      return;
    }

    res.status(200).json({ message: "Job fetched successfully", job });
    return;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    return;
  }
};

export { createJobs, getJobs, getJobById };
