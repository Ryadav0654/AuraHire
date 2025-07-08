import React from "react";
import Link from "next/link";
// import { Link, Moon, Sun } from 'lucide-react';
// import { useDarkMode } from '../context/DarkModeContext';

const Header = () => {
  // const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-br from-[#00C1D4] to-[#0A2463] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div> */}
            <span className="text-xl font-extrabold cursor-pointer text-[#0A2463] dark:text-white">
              AuraHire
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
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
            <a
              href="/signup"
              className="px-6 py-2 bg-[#00C1D4] text-white rounded-lg hover:bg-[#00A5B8] transition-colors font-medium"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
