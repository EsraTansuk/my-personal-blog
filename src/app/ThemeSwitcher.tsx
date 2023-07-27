"use client";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className=" bg-white ml-44 relative">
      the current theme is: {theme}
      <button className=" bg-red-300" onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button className="bg-blue-300" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
    </div>
  );
};
