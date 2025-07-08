import { RequestHandler } from "express";
import multer from "multer";
const storage = multer.memoryStorage();
import path from "path";

const upload: RequestHandler = multer({
  // dest: "uploads/",
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB
  },

  fileFilter: (req, file, cb) => {
    const filetypes = /pdf/;
    const mimetype = filetypes.test(file.mimetype); // application/pdf
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Error: Only PDF files are allowed"));
    }
  },
}).single("resume");

export default upload;
