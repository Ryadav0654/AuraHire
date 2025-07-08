import { v2 as cloudinary } from "cloudinary";
// import streamifier from "streamifier";

const handleUpload = async (file: string) => {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "resumes",
  });
  return res;
};
// const handleUpload = (file: Express.Multer.File): Promise<any> => {
//     return new Promise((resolve, reject) => {
//       const stream = cloudinary.uploader.upload_stream(
//         {
//           resource_type: "raw",  // required for PDFs
//           folder: "resumes",
//           public_id: file.originalname.split(".")[0], // optional: strip .pdf
//         },
//         (error, result) => {
//           if (error) return reject(error);
//           resolve(result);
//         }
//       );

//       streamifier.createReadStream(file.buffer).pipe(stream);
//     });
//   };
export { handleUpload };
