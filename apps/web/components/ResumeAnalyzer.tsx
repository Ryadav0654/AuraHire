"use client";
import React, { useState, useRef } from 'react';
import { Upload, FileText, Loader2, CheckCircle, AlertCircle, Info, Zap } from 'lucide-react';
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import apiClient from '../lib/apiClient';
const ResumeAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (file: File) => {
    if (file.type === 'application/pdf' || file.type === 'application/msword' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      setUploadedFile(file);
    } else {
      alert('Please upload a PDF or Word document');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]!);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]!);
    }
  };

//   const handleAnalyze = async () => {
//     if (!jobDescription.trim() || !uploadedFile) {
//       alert('Please provide both job description and resume file');
//       return;
//     }

//     setIsAnalyzing(true);
    
//     // Simulate API call with mock analysis
//     setTimeout(() => {
//       const mockAnalysis = `# 📊 ATS Analysis Report

// ## Overall Score: 78/100 ⭐

// # ✅ Strengths
// - **Keyword Match**: 85% - Excellent alignment with job requirements
// - **Format Compatibility**: 95% - ATS-friendly structure detected
// - **Section Organization**: 90% - Clear, logical layout

// # ⚠️ Areas for Improvement

// ### Missing Keywords
// - [ ] "Machine Learning" - Appears 5 times in job description
// - [ ] "Python" - Critical technical requirement
// - [ ] "Data Analysis" - Key responsibility mentioned
// - [x] "Project Management" - Found in experience section
// - [x] "Team Leadership" - Well documented

// ## Formatting Recommendations
// 1. **Contact Information**: Move phone number to header
// 2. **Skills Section**: Use bullet points instead of paragraphs
// 3. **Experience Dates**: Use consistent MM/YYYY format

// ### 🎯 Optimization Suggestions

// ## High Priority
// - Add "Machine Learning" to skills section
// - Include Python projects in experience
// - Quantify achievements with specific metrics

// ## Medium Priority
// - Expand technical skills section
// - Add relevant certifications
// - Include industry-specific terminology

// ## 📈 Predicted Success Rate
// - **ATS Pass Rate**: 82%
// - **Recruiter Review Probability**: 76%
// - **Interview Likelihood**: 68%

// ## 🔧 Quick Fixes
// 1. Replace "Managed team" with "Led cross-functional team of 8 members"
// 2. Add "Increased efficiency by 25%" to project descriptions
// 3. Include "Agile/Scrum methodology" experience

// ---
// *Analysis completed in 2.3 seconds using advanced NLP algorithms*`;

//       setAnalysisResult(mockAnalysis);
//       setIsAnalyzing(false);
//     }, 3000);
//   };

const handleAnalyze = async () => {
    console.log("Analyzing resume...");
    if (!jobDescription) return;
    console.log("Job Description:", true);
    setIsAnalyzing(true);
    setAnalysisResult(null);
    const resumeLink = "https://res.cloudinary.com/detzo1qmm/image/upload/v1751985175/resumes/z8pf3ojcyv4zvi5d8ucp.pdf"
    try {
        const response = await apiClient.post("/api/v1/ats/analyze", {
            jobDescription,
            resume_url: resumeLink
        });
        if(!response){
            console.log("Error while sending ATS response");
            return;
        }
        console.log("Response:", response.data.report);
      
        setAnalysisResult(response.data.report);
    } catch (error) {
        console.error("Error analyzing resume:", error);
    } finally {
        setIsAnalyzing(false);
    }
  };
  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center space-x-2 lg:space-x-3">
          <FileText className="w-8 h-8 text-teal-600" />
          <span>Resume ATS Analyzer</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Get instant AI-powered insights on how well your resume matches job requirements and passes ATS systems
        </p>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 gap-6">
        {/* Job Description */}
        <div className="bg-white  dark:bg-transparent rounded-xl  shadow-sm">
          <label className="block text-xl font-semibold text-gray-900 dark:text-white mb-4">
            📋 Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the complete job description here..."
            className="w-full h-30 p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {jobDescription.length} characters
          </div>
        </div>

        {/* Resume Upload */}
        <div className="bg-white dark:bg-transparent rounded-xl shadow-sm">
          <label className="block text-xl font-semibold text-gray-900 dark:text-white mb-4">
            📄 Resume Upload
          </label>
          
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg p-4 text-center transition-all duration-300 ${
              isDragOver
                ? 'border-teal-500 bg-teal-50 dark:bg-teal-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-teal-400 dark:hover:border-teal-500'
            }`}
          >
            {uploadedFile ? (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto">
                  <FileText className="w-8 h-8 text-teal-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{uploadedFile.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <button
                  onClick={() => setUploadedFile(null)}
                  className="text-sm text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                >
                  Remove file
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    Drop your resume here
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">
                    or click to browse files
                  </p>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                  >
                    Choose File
                  </button>
                </div>
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Supports PDF, DOC, DOCX (Max 10MB)
                </p>
              </div>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileInputChange}
            className="hidden"
          />
        </div>
      </div>

      {/* Analyze Button */}
      <div className="text-center mt-8">
        <button
          onClick={handleAnalyze}
          disabled={!jobDescription.trim() || !uploadedFile || isAnalyzing}
          className="px-4 py-3 cursor-pointer bg-teal-600 text-white rounded-xl hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg  shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none flex items-center space-x-3 mx-auto"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Analyzing...</span>
            </>
          ) : (
            <>
              <Zap className="w-5 h-5" />
              <span>Analyze Resume</span>
            </>
          )}
        </button>
      </div>

      {/* Analysis Results */}
      {analysisResult && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-3 lg:p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[gfm]}>{analysisResult}</ReactMarkdown>
          </div>
        </div>
      )}

      {/* Loading State */}
      {isAnalyzing && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto">
              <Loader2 className="w-8 h-8 text-teal-600 animate-spin" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Analyzing Your Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our AI is comparing your resume against the job requirements...
              </p>
            </div>
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-teal-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;