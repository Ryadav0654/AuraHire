"use client";

import { useState } from "react";
import axios from "axios";

export default function IndexPage() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const uploadFile = async (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    console.log("Uploading file:", file);
    if (!file) {
      console.log("No file selected");
      return;
    }

    setLoading(true);

    const data = new FormData();
    data.append("resume", file);
    console.log("Data:", data);
    console.log("data.get('resume'):", data.get("resume"));
    try {
      console.log("Uploading file:", file.name);
      const response = await axios.post(
        "http://localhost:8080/api/v1/resume/upload",
        data,
      );
      console.log("Response:", response.data);
      // setRes(response.data);
      setUrl(response.data?.resume?.secure_url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold mb-6">Upload Your Resume</h1>

      <form
        className="flex flex-col items-center gap-4 w-full max-w-md bg-gray-300 p-6 rounded-md shadow placeholder:text-black"
        onSubmit={uploadFile}
      >
        <input
          type="file"
          accept=".pdf"
          placeholder="Upload your resume"
          multiple={false}
          onChange={handleSelectFile}
          className="w-full border border-gray-300 rounded-md p-2 bg-white"
        />

        {file && (
          <>
            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Uploading..." : "Upload to Cloudinary"}
            </button>
            <p className="text-sm text-gray-600">{file.name}</p>
          </>
        )}
      </form>
      <iframe src={url} width="100%" height="600px" title="Resume Preview" />
      {/* Uncomment this section when API response is ready */}
      {/* {Object.keys(res).length > 0 && (
        <div className="mt-4 w-full max-w-md bg-white p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Response</h2>
          <code className="text-sm">
            {Object.entries(res).map(([key, value]) => (
              <div key={key} className="mb-1">
                <strong>{key}:</strong> {typeof value === "object" ? "object" : value}
              </div>
            ))}
          </code>
        </div>
      )} */}
    </main>
  );
}
