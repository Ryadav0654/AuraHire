"use client";
import React from 'react'
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from "../context/DarkModeContext";
const DarkMode = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <>
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-400 dark:bg-slate-600  hover:bg-gray-600 dark:hover:bg-slate-700 transition-colors"
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
        </>
    )
}

export default DarkMode