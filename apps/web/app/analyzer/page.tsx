"use client";

import { useRef, useState } from "react";
import apiClient from "../../lib/apiClient";

export default function ResumeUploadDark() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [url, setUrl] = useState<string>("https://res.cloudinary.com/detzo1qmm/image/upload/v1751985175/resumes/z8pf3ojcyv4zvi5d8ucp.pdf");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const uploadFile = async () => {
    console.log("Uploading file:", uploadedFile);
    if (!uploadedFile) {
      console.log("No file selected");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("resume", uploadedFile);
    console.log("Data:", data);
    console.log("data.get('resume'):", data.get("resume"));
    try {
      console.log("Uploading file:", uploadFile.name);
      const response = await apiClient.post("/api/v1/resume/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response:", response.data);
      // setRes(response.data);
      setUrl(response.data?.resume?.secure_url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatBytes = (bytes: number) => {
    const sizes = ["Bytes", "KB", "MB", "GB"];
    if (bytes === 0) return "0 Bytes";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center">Upload Your Resume</h1>

        <div
          className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-xl p-8 text-center cursor-pointer hover:bg-gray-700 transition"
          onClick={handleClick}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <input
            type="file"
            accept=".pdf,.docx,.txt"
            ref={inputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <p className="text-gray-300">
            Drag & drop your resume here or{" "}
            <span className="text-blue-400 underline">click to upload</span>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: PDF, DOCX, TXT
          </p>
        </div>
        {
          uploadedFile && (
            <button className="bg-[#4CAF50] w-full hover:bg-[#3e8e41] text-white font-bold py-2 px-4 rounded-md cursor-pointer" onClick={uploadFile} disabled={loading}>
              {loading ? "Uploading..." : "Upload"}</button>
          )
        }
        {uploadedFile && (
          <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg shadow border border-gray-700">
            <div className="w-12 h-12 bg-gray-700 flex items-center justify-center rounded-md">
              <img
                src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
                alt="file icon"
                className="w-7 h-7"
              />
            </div>
            <div className="flex-1">
              <p className="font-medium text-white">{uploadedFile.name}</p>
              <p className="text-sm text-gray-400">
                {formatBytes(uploadedFile.size)}
              </p>
            </div>
          </div>
        )}
        {
          url && (
            <iframe src={url} className="w-full md:h-screen h-96"  title="Resume Preview" />
          )
        }
      </div>
    </main>
  );
}
