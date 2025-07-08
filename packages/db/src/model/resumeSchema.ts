import { Schema, model } from "mongoose";

const resumeSchema = new Schema(
  {
    resume_file_name: {
      type: String,
      required: true,
    },
    resume_url: {
      type: String,
      required: true,
    },
    resume_version: {
      type: Number,
      required: true,
    },
    resume_public_id: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Resume = model("Resume", resumeSchema);

export default Resume;
