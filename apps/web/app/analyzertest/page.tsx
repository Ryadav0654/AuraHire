"use client";
import React from 'react';
import ResumeAnalyzer from '../../components/ResumeAnalyzer';
import "github-markdown-css/github-markdown-light.css";
export default function ATSAnalyzerPage() {
  return (
    <main className="prose porse-slate">
      <ResumeAnalyzer />
    </main>
  );
}