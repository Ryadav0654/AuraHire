// "use client";

// import React, { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import { Loader2 } from "lucide-react"; // for spinner, optional
// import apiClient from "../../lib/apiClient";

// export default function ATSAnalyzerPage() {
//   const [jobDescription, setJobDescription] = useState("");
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [report, setReport] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Dummy analyze function (replace with API call)
//   const analyzeResume = async () => {
//     console.log("Analyzing resume...");
//     if (!jobDescription) return;
//     console.log("Job Description:", true);
//     setLoading(true);
//     setReport(null);
//     const resumeLink = "https://res.cloudinary.com/detzo1qmm/image/upload/v1751985175/resumes/z8pf3ojcyv4zvi5d8ucp.pdf"
//     try {
//         const response = await apiClient.post("/api/v1/ats/analyze", {
//             jobDescription,
//             resume_url: resumeLink
//         });
//         if(!response){
//             console.log("Error while sending ATS response");
//             return;
//         }
//         console.log("Response:", response.data.report);
      
//         setReport(response.data.report);
//     } catch (error) {
//         console.error("Error analyzing resume:", error);
//     } finally {
//         setLoading(false);
//     }
// //     await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate delay

// //     setReport(`# ✅ ATS & Resume Analysis Report

// // ## 📌 Keyword & Phrase Match
// // - Present: leadership, agile
// // - Missing / low frequency: stakeholder engagement

// // ## 🛠️ Skills Gap Analysis
// // - Required but missing: stakeholder engagement
// // - Matching skills: agile, team management

// // ## 📈 Experience Fit
// // - Relevant experience: 3 years as Team Lead
// // - Missing or less relevant: direct mention of risk management

// // ## 🔢 Quantifiable Impact
// // - Found: "Improved efficiency by 20%"
// // - Suggested: team size, budget managed

// // ## 📣 Recommendations
// // - [ ] Add missing keywords
// // - [ ] Include metrics about team size
// // - [ ] Tailor summary to JD`);
    
//   };

//   return (
//     <main className="max-w-3xl mx-auto p-6 space-y-6">
//       <h1 className="text-2xl font-semibold">📄 Resume ATS Analyzer</h1>

//       <div className="bg-gray-900 shadow rounded p-4 space-y-4">
//         <label className="block font-medium">
//           Job Description
//           <textarea
//             value={jobDescription}
//             onChange={(e) => setJobDescription(e.target.value)}
//             placeholder="Paste the job description here..."
//             className="mt-1 w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             rows={5}
//           />
//         </label>

//         <label className="block font-medium">
//           Upload Resume (PDF)
//           <input
//             type="file"
//             accept=".pdf"
//             onChange={(e) => {
//               const file = e.target.files?.[0];
//               if (file) {
//                 setResumeFile(file);
//               }
//             }}
//             className="mt-1"
//           />
//         </label>

//         <button
//           onClick={analyzeResume}
//           disabled={loading || !jobDescription}
//           className="flex items-center justify-center cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading && <Loader2 className="animate-spin mr-2" size={20} />}
//           {loading ? "Analyzing..." : "Analyze"}
//         </button>
//       </div>

//       {report && (
//         <div className="bg-gray-900 shadow rounded p-4 prose max-w-none">
//           <ReactMarkdown>{report}</ReactMarkdown>
//         </div>
//       )}
//     </main>
//   );
// }

import React from 'react';


import ResumeAnalyzer from '../../components/ResumeAnalyzer';

export default function ATSAnalyzerPage() {
  return (
    <main className="">
      <ResumeAnalyzer />
    </main>
  );
}