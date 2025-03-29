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
        <img src="/assets/logo.svg" alt="" />
        <h1 className="text-xl font-bold text-white">Extensions</h1>
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

