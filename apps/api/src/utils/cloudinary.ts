import { v2 as cloudinary } from "cloudinary";

const handleUpload = async (file: string) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "resumes",
  });
  return res;
};

export { handleUpload };
