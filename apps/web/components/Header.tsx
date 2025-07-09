
import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar"
// import { Link, Moon, Sun } from 'lucide-react';
// import { useDarkMode } from '../context/DarkModeContext';
// import { useUser } from "@clerk/nextjs";
import { auth, currentUser } from '@clerk/nextjs/server'
const Header = async () => {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();
  // const { isSignedIn, user, isLoaded } = useUser()
  const { userId } = await auth();

  return (
    <header className="sticky top-0 pt-4 bg-white/80 dark:bg-transparent  z-40">
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
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/pricing"
              className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {/* <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button> */}
            {!userId ?
              (<Link
                href="/sign-in"
                className="px-6 py-2 bg-[#00C1D4] text-white rounded-full hover:bg-[#00A5B8] transition-colors font-medium text-base"
              >
                Sign In
              </Link>) : (
                // <div className="flex items-center space-x-2 border border-gray-200 dark:border-slate-700 rounded-full px-4 py-2">
                //   <Avatar className="w-10 h-10 ">
                //     <AvatarImage src={user?.imageUrl} />
                //     <AvatarFallback>{user?.firstName?.charAt(0)}</AvatarFallback>
                //   </Avatar>
                //   <span className="text-gray-700 dark:text-gray-300 hover:text-[#00C1D4] transition-colors">{user?.firstName}</span>
                // </div>
                <Link
                  href="/dashboard"
                  className="px-6 py-2 bg-[#00C1D4] text-white rounded-full hover:bg-[#00A5B8] transition-colors font-medium text-base"
                >
                  Dashboard
                </Link>

              )
            }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
