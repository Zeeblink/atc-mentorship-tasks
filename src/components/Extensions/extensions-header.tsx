"use client"

import { Moon, Sun } from "lucide-react"

interface ExtensionsHeaderProps {
    theme: "light" | "dark";  // A string that can only be "light" or "dark"
    toggleTheme: () => void;  // A function that takes no arguments and returns nothing
  }

export default function ExtensionsHeader({ theme, toggleTheme }: ExtensionsHeaderProps) {
  return (
    <div
      className={`bg-[#111827] rounded-2xl p-4 flex items-center justify-between mb-8 shadow-sm`}
    >
      <div className="flex items-center gap-3">
        <div className="text-[#e11d48] w-8 h-8">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" />
            <path d="M3 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
            <path d="M17 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6z" />
            <path d="M6 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2z" />
            <path d="M17 17a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2z" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-[#172554]">Extensions</h1>
      </div>
      <button
        className={`${theme === "light" ? "bg-[#1f2937]" : "bg-[#f1f5f9]"} p-2 rounded-lg cursor-pointer`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "light" ? <Sun className="w-5 h-5 text-gray-100" /> : <Moon className="w-5 h-5 text-[#64748b]" />}
      </button>
    </div>
  )
}

