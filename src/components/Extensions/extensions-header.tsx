"use client"

import { Moon, Sun } from "lucide-react"

interface ExtensionsHeaderProps {
    theme: "light" | "dark";  // A string that can only be "light" or "dark"
    toggleTheme: () => void;  // A function that takes no arguments and returns nothing
  }

export default function ExtensionsHeader({ theme, toggleTheme }: ExtensionsHeaderProps) {
  return (
    <div
      className={`${theme === 'dark' ? 'bg-neutral-800' : 'bg-white'} rounded-2xl p-3 flex items-center justify-between mb-14 shadow-sm`}
    >
      <div className="flex items-center gap-3">
        <img src={`${theme === 'light' ? '/assets/logo-light.svg' : '/assets/logo.svg'}`} alt="logo" />
        {/* <h1 className="text-xl font-bold text-white">Extensions</h1> */}
      </div>
      <button
        className={`${theme === "dark" ? "bg-neutral-700" : "bg-neutral-100"} p-2 rounded-lg cursor-pointer`}
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun className="w-5 h-5 text-gray-100" /> : <Moon className="w-5 h-5 text-[#64748b]" />}
      </button>
    </div>
  )
}

