"use client";
import React, { useState } from "react";
// import { useDarkMode } from '../context/DarkModeContext';
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  BarChart3,
  Settings,
  Upload,
  Plus,
  User,
  Bell,
  Search,
  ChevronDown,
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Edit,
  Trash2,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import ResumeAnalyzer from "../analyzertest/page";
import { UserButton, UserProfile, useUser } from "@clerk/nextjs";
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
      slug: "/dashboard",
    },
    { id: "analyzer", label: "Resume Analyzer", icon: FileText, slug: "/analyzer" },
    { id: "tracker", label: "Job Tracker", icon: Briefcase, slug: "/tracker" },
    { id: "insights", label: "Insights", icon: BarChart3, slug: "/insights" },
    { id: "settings", label: "Settings", icon: Settings, slug: "/profile" },
  ];

  const jobApplications = [
    {
      id: 1,
      company: "Google",
      position: "Senior Software Engineer",
      status: "Interview",
      appliedDate: "2025-01-10",
      salary: "$180k - $220k",
      location: "Mountain View, CA",
    },
    {
      id: 2,
      company: "Meta",
      position: "Product Manager",
      status: "Applied",
      appliedDate: "2025-01-08",
      salary: "$160k - $200k",
      location: "Menlo Park, CA",
    },
    {
      id: 3,
      company: "Apple",
      position: "UX Designer",
      status: "Offer",
      appliedDate: "2025-01-05",
      salary: "$140k - $170k",
      location: "Cupertino, CA",
    },
    {
      id: 4,
      company: "Netflix",
      position: "Data Scientist",
      status: "Applied",
      appliedDate: "2025-01-12",
      salary: "$150k - $190k",
      location: "Los Gatos, CA",
    },
    {
      id: 5,
      company: "Spotify",
      position: "Frontend Developer",
      status: "Interview",
      appliedDate: "2025-01-09",
      salary: "$130k - $160k",
      location: "New York, NY",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Applied":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Interview":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Offer":
        return "bg-green-100 text-green-800 border-green-200";
      case "Rejected":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Applied":
        return <Clock className="w-3 h-3" />;
      case "Interview":
        return <Eye className="w-3 h-3" />;
      case "Offer":
        return <CheckCircle className="w-3 h-3" />;
      case "Rejected":
        return <AlertCircle className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex relative transition-colors duration-300">
      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 z-50 flex flex-col
        ${mobileMenuOpen ? "fixed inset-y-0 left-0" : "hidden lg:flex"}
        ${sidebarCollapsed ? "lg:w-16" : "lg:w-64"}
        w-64
      `}
      >
        {/* Sidebar Header */}
        <div className="p-3 lg:px-3 lg:py-5 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-3">
              <div className="w-7 h-7 lg:w-8 lg:h-8  bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Link href="/" className="text-white font-bold text-xs lg:text-sm">
                  A
                </Link>
              </div>
              {(!sidebarCollapsed || mobileMenuOpen) && (
                <Link href="/" className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white truncate">
                  AuraHire
                </Link>
              )}
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`flex-1  ${sidebarCollapsed ? "lg:px-2" : "lg:px-4"} py-4 space-y-1 lg:space-y-2 overflow-y-auto`}
        >
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center space-x-2 lg:space-x-3 px-4 lg:px-3 py-2 lg:py-2.5 rounded-lg transition-colors text-md lg:text-base ${activeTab === item.id
                ? "bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-700"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              <item.icon className="w-5 h-5 lg:w-5 lg:h-5 flex-shrink-0" />
              {(!sidebarCollapsed || mobileMenuOpen) && (
                <span className="font-medium truncate">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar Toggle (Desktop) */}
        {!mobileMenuOpen && (
          <div className="hidden lg:block p-3">
            <div
              className={`w-full flex items-center justify-between `}
            >
              {!sidebarCollapsed && (
                <p className="text-lg font-medium text-gray-500 dark:text-gray-300">
                  Collapse
                </p>
              )}
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="w-8 h-8 flex items-center justify-center bg-gray-700 dark:bg-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-lg transition-colors"
              >
                {sidebarCollapsed ? (
                  <ChevronRight className="w-6 h-6" />
                ) : (
                  <ChevronLeft className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-50 dark:border-gray-700 px-3 sm:px-4 lg:px-6 py-3 lg:py-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 lg:space-x-4 min-w-0 flex-1">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 dark:hover:bg-gray-700 hover:bg-gray-500 rounded-lg transition-colors flex-shrink-0"
              >
                <Menu className="w-5 h-5" />
              </button>

              {/* Search - Hidden on mobile, visible on tablet+ */}
              <div className="relative hidden sm:block flex-1 max-w-md">
                <Search className="w-4 h-4 lg:w-5 lg:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies..."
                  className="w-full pl-9 lg:pl-10 pr-4 py-2 lg:py-2 border border-gray-50 dark:border-gray-700 rounded-lg focus:ring-1 dark:focus:ring-gray-600 focus:ring-teal-500 focus:border-transparent text-sm lg:text-base"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-4 flex-shrink-0">
              {/* Mobile Search Button */}
              <button className="sm:hidden p-2 dark:hover:bg-gray-700 hover:bg-gray-500 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="p-2 bg-gray-400 dark:hover:bg-gray-700 hover:bg-gray-500 rounded-lg transition-colors relative">
                <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 lg:w-3 lg:h-3 bg-red-500 rounded-full"></span>
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-2 lg:space-x-3">
                <div className="hidden md:block min-w-0">
                  <div className="text-xs lg:text-sm font-medium text-gray-900 dark:text-white truncate">
                    {user?.fullName}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-300 truncate">
                    {user?.emailAddresses[0]?.emailAddress}
                  </div>
                </div>
                <div className="w-7 h-7 lg:w-9 lg:h-9 bg-gradient-to-br from-teal-500 to-blue-600  rounded-full flex items-center justify-center flex-shrink-0">
                  {/* <User className="w-3 h-3 lg:w-4 lg:h-4 text-white" /> */}
                  <UserButton />
                </div>
                {/* <ChevronDown className="w-3 h-3 lg:w-4 lg:h-4 text-gray-400 hidden sm:block flex-shrink-0" /> */}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-x-hidden overflow-y-scroll scroll-smooth max-h-screen ">
          {activeTab === 'analyzer' && <ResumeAnalyzer />}
          {/* Welcome Section */}
          {
            activeTab === 'dashboard' && (
              <>
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl p-4 lg:p-6 text-white">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">
                    Welcome back, Ravindra! 👋
                  </h1>
                  <p className="text-teal-100 text-sm lg:text-base opacity-90">
                    Ready to optimize your job search with AI-powered insights?
                  </p>
                </div>

                {/* Quick Actions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {/* Job Status Pie Chart */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:px-6 lg:py-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
                        Application Status
                      </h3>
                      <Briefcase className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    </div>

                    {/* Pie Chart Container */}
                    <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
                      {/* SVG Pie Chart */}
                      <div className="relative w-32 h-32 lg:w-36 lg:h-36 flex-shrink-0">
                        <svg
                          className="w-full h-full transform -rotate-90"
                          viewBox="0 0 100 100"
                        >
                          {/* Background circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke={isDarkMode ? "#374151" : "#f3f4f6"}
                            strokeWidth="8"
                          />

                          {/* Applied (40%) - Blue */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="8"
                            strokeDasharray="100.48 251.2"
                            strokeDashoffset="0"
                            className="transition-all duration-500"
                          />

                          {/* Interview (40%) - Yellow */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#eab308"
                            strokeWidth="8"
                            strokeDasharray="100.48 251.2"
                            strokeDashoffset="-100.48"
                            className="transition-all duration-500"
                          />

                          {/* Offer (20%) - Green */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="8"
                            strokeDasharray="50.24 251.2"
                            strokeDashoffset="-200.96"
                            className="transition-all duration-500"
                          />
                        </svg>

                        {/* Center text */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                            {jobApplications.length}
                          </span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            Total
                          </span>
                        </div>
                      </div>

                      {/* Legend */}
                      <div className="flex-1 space-y-2 lg:space-y-3 w-full lg:w-auto">
                        {[
                          {
                            label: "Applied",
                            count: jobApplications.filter(
                              (job) => job.status === "Applied"
                            ).length,
                            color: "bg-blue-500",
                            percentage: Math.round(
                              (jobApplications.filter(
                                (job) => job.status === "Applied"
                              ).length /
                                jobApplications.length) *
                              100
                            ),
                          },
                          {
                            label: "Interview",
                            count: jobApplications.filter(
                              (job) => job.status === "Interview"
                            ).length,
                            color: "bg-yellow-500",
                            percentage: Math.round(
                              (jobApplications.filter(
                                (job) => job.status === "Interview"
                              ).length /
                                jobApplications.length) *
                              100
                            ),
                          },
                          {
                            label: "Offer",
                            count: jobApplications.filter(
                              (job) => job.status === "Offer"
                            ).length,
                            color: "bg-green-500",
                            percentage: Math.round(
                              (jobApplications.filter((job) => job.status === "Offer")
                                .length /
                                jobApplications.length) *
                              100
                            ),
                          },
                          {
                            label: "Others",
                            count: jobApplications.filter(
                              (job) =>
                                !["Applied", "Interview", "Offer"].includes(
                                  job.status
                                )
                            ).length,
                            color: "bg-gray-400",
                            percentage: Math.round(
                              (jobApplications.filter(
                                (job) =>
                                  !["Applied", "Interview", "Offer"].includes(
                                    job.status
                                  )
                              ).length /
                                jobApplications.length) *
                              100
                            ),
                          },
                        ]
                          .filter((item) => item.count > 0)
                          .map((item, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <div className="flex items-center space-x-2 lg:space-x-3 min-w-0 flex-1">
                                <div
                                  className={`w-3 h-3 lg:w-4 lg:h-4 ${item.color} rounded-full flex-shrink-0`}
                                ></div>
                                <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 truncate">
                                  {item.label}
                                </span>
                              </div>
                              <div className="flex items-center space-x-2 flex-shrink-0">
                                <span className="text-sm lg:text-base font-semibold text-gray-900 dark:text-white">
                                  {item.count}
                                </span>
                                <span className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                                  ({item.percentage}%)
                                </span>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Feedback Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:px-6 lg:py-4 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white">
                        AI Feedback
                      </h3>
                      <BarChart3 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: "Grammar Score", value: 85, color: "green" },
                        { label: "Formatting", value: 72, color: "yellow" },
                        { label: "Keywords", value: 92, color: "green" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-600 dark:text-gray-300 min-w-0 flex-1 pr-2">
                            {item.label}
                          </span>
                          <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
                            <div className="w-16 sm:w-20 lg:w-24 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                              <div
                                className={`h-2 rounded-full ${item.color === "green"
                                  ? "bg-green-500"
                                  : "bg-yellow-500"
                                  }`}
                                style={{ width: `${item.value}%` }}
                              ></div>
                            </div>
                            <span
                              className={`text-sm font-medium min-w-[3rem] text-right ${item.color === "green"
                                ? "text-green-600"
                                : "text-yellow-600"
                                }`}
                            >
                              {item.value}%
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Job Tracker Section */}
                {/* <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm"> */}
                {/* <div className="p-4 lg:p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white">Job Applications</h3>
                <button className="flex items-center justify-center space-x-2 px-4 py-2 lg:py-2.5 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors text-sm lg:text-base font-medium">
                  <Plus className="w-4 h-4" />
                  <span>Add Job</span>
                </button>
              </div>
            </div> */}

                {/* Mobile/Tablet Card View */}
                {/* <div className="xl:hidden">
              <div className="max-h-96 overflow-y-auto">
                {jobApplications.map((job) => (
                  <div key={job.id} className="p-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3 min-w-0 flex-1">
                        <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                            {job.company.charAt(0)}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-medium text-gray-900 dark:text-white truncate">{job.company}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 truncate">{job.position}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 lg:hidden">{job.location}</div>
                        </div>
                      </div>
                      <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium border flex-shrink-0 ${getStatusColor(job.status)}`}>
                        {getStatusIcon(job.status)}
                        <span>{job.status}</span>
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                      <div>Applied: {job.appliedDate}</div>
                      <div className="text-right">{job.salary}</div>
                      <div className="hidden lg:block col-span-2">{job.location}</div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-sm">
                        <Eye className="w-4 h-4" />
                        <span className="hidden sm:inline">View</span>
                      </button>
                      <button className="flex-1 flex items-center justify-center space-x-1 px-3 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-sm">
                        <Edit className="w-4 h-4" />
                        <span className="hidden sm:inline">Edit</span>
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

                {/* Desktop Table View */}
                {/* <div className="hidden xl:block">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Company</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Position</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Applied</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Salary</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {jobApplications.map((job) => (
                      <tr key={job.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                                {job.company.charAt(0)}
                              </span>
                            </div>
                            <span className="font-medium text-gray-900 dark:text-white">{job.company}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 dark:text-white max-w-xs truncate">
                          {job.position}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(job.status)}`}>
                            {getStatusIcon(job.status)}
                            <span>{job.status}</span>
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {job.appliedDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {job.salary}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-xs truncate">
                          {job.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center space-x-2">
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors" title="View">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors" title="Edit">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-600 rounded text-red-600 transition-colors" title="Delete">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div> */}
                {/* </div> */}

                {/* Insights Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                  {/* Applications Chart */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-6  border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Applications This Week
                    </h3>
                    <div className="space-y-3">
                      {[
                        { day: "Mon", value: 3, width: "w-3/4" },
                        { day: "Tue", value: 2, width: "w-1/2" },
                        { day: "Wed", value: 4, width: "w-full" },
                        { day: "Thu", value: 1, width: "w-1/4" },
                        { day: "Fri", value: 2, width: "w-2/3" },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-sm text-gray-600 dark:text-gray-300 min-w-[3.5rem] sm:min-w-[4rem]">
                            {item.day}
                          </span>
                          <div className="flex items-center space-x-2 lg:space-x-3 flex-1 ml-2 sm:ml-4">
                            <div className="w-full max-w-24 sm:max-w-32 h-2 bg-gray-200 dark:bg-gray-600 rounded-full">
                              <div
                                className={`${item.width} h-2 bg-teal-500 rounded-full transition-all duration-300`}
                              ></div>
                            </div>
                            <span className="text-sm font-medium min-w-[1rem] text-right text-gray-900 dark:text-white">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-4 lg:p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
                    <h3 className="text-base lg:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Success Metrics
                    </h3>
                    <div className="space-y-3 lg:space-y-4">
                      {[
                        {
                          icon: TrendingUp,
                          label: "Response Rate",
                          sublabel: "Last 30 days",
                          value: "24%",
                          color: "green",
                        },
                        {
                          icon: Eye,
                          label: "Interview Rate",
                          sublabel: "From responses",
                          value: "18%",
                          color: "blue",
                        },
                        {
                          icon: CheckCircle,
                          label: "Offer Rate",
                          sublabel: "From interviews",
                          value: "12%",
                          color: "yellow",
                        },
                      ].map((metric, index) => (
                        <div
                          key={index}
                          className={`flex items-center justify-between p-3 lg:p-4 rounded-lg ${metric.color === "green"
                            ? "bg-green-50 dark:bg-green-900/20"
                            : metric.color === "blue"
                              ? "bg-blue-50 dark:bg-blue-900/20"
                              : "bg-yellow-50 dark:bg-yellow-900/20"
                            }`}
                        >
                          <div className="flex items-center space-x-3 min-w-0 flex-1">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${metric.color === "green"
                                ? "bg-green-100 dark:bg-green-800"
                                : metric.color === "blue"
                                  ? "bg-blue-100 dark:bg-blue-800"
                                  : "bg-yellow-100 dark:bg-yellow-800"
                                }`}
                            >
                              <metric.icon
                                className={`w-4 h-4 ${metric.color === "green"
                                  ? "text-green-600"
                                  : metric.color === "blue"
                                    ? "text-blue-600"
                                    : "text-yellow-600"
                                  }`}
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {metric.label}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {metric.sublabel}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`text-lg lg:text-2xl font-bold flex-shrink-0 ${metric.color === "green"
                              ? "text-green-600"
                              : metric.color === "blue"
                                ? "text-blue-600"
                                : "text-yellow-600"
                              }`}
                          >
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          {activeTab === 'tracker' && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Job Tracker</h3>
              <p className="text-gray-600 dark:text-gray-300">Advanced job tracking features coming soon!</p>
            </div>
          )}

          {activeTab === 'insights' && (
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Detailed analytics and insights coming soon!</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <>
            <div className="text-center py-12">
              <Settings className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Settings</h3>
                <p className="text-gray-600 dark:text-gray-300">Account settings and preferences coming soon!</p>
            </div>
            {/* <div className="flex flex-col items-center w-full">
              <UserProfile />
            </div> */}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
