import { useState, useEffect } from "react";

const SunIcon = () => (
    <svg
        className="w-6 h-6 text-yellow-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
    >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
    );

    const MoonIcon = () => (
    <svg
        className="w-6 h-6 text-gray-200"
        fill="currentColor"
        viewBox="0 0 24 24"
    >
        <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
    </svg>
    );

    function DarkModeToggle({ mode, toggleMode }) {
    return (
        <button
        aria-label="Toggle Dark Mode"
        onClick={toggleMode}
        className="flex items-center w-16 h-8 rounded-full p-1 bg-gradient-to-r from-yellow-300 to-yellow-600 dark:from-gray-600 dark:to-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-yellow-300 transition"
        >
        <div
            className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
            mode === "dark" ? "translate-x-8" : ""
            } flex items-center justify-center`}
        >
            {mode === "light" ? <SunIcon /> : <MoonIcon />}
        </div>
        </button>
    );
    }

export default DarkModeToggle;
