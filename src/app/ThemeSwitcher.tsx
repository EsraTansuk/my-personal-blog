"use client";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="right-9 pt-7 z-50 absolute">
      {theme === "dark" && (
        <button
          className="text-lGray bg-backColor w-14 h-14 rounded-full pt-1"
          onClick={() => setTheme("light")}
        >
          <FontAwesomeIcon icon={faSun} />
        </button>
      )}

      {theme === "light" && (
        <button
          className="text-backColor bg-lGray w-14 h-14 rounded-full pt-1"
          onClick={() => setTheme("dark")}
        >
          <FontAwesomeIcon icon={faMoon} />
        </button>
      )}
    </div>
  );
};
