
import React from "react";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import DarkMode from "./DarkMode";
const Header = async () => {
  
  // const { isSignedIn, user, isLoaded } = useUser()
  const { userId } = await auth();

  return (
    <header className="sticky top-0 pt-4 bg-transparent dark:bg-transparent  z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 backdrop-blur-md lg:px-8 border border-t-0 shadow-md shadow-gray-400 border-gray-400 rounded-full">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-[#00C1D4] to-[#0A2463] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div> */}
            <span className="text-xl font-extrabold cursor-pointer text-[#0A2463] dark:text-white">
              AuraHire
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8  font-semibold">
            <Link
              href="#features"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              Reviews
            </Link>
            {/* <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              Dashboard
            </Link> */}
            <Link
              href="/pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <DarkMode />
              <Link
                href={userId ? "/dashboard" : "/sign-in"}
                className="px-6 py-2 bg-[#00C1D4] text-white rounded-full hover:bg-[#00A5B8] transition-colors font-medium text-base"
              >
                {userId ? "Dashboard" : "Sign In"}
              </Link>       
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
