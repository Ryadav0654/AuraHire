import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-colors duration-300">
      <div className="w-full max-w-md  bg-white dark:bg-slate-900 rounded-lg shadow-md">
        <SignIn />
      </div>
    </div>
  );
};

export default page;
