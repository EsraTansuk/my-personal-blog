"use client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="right-3 pt-7 z-[999] absolute ">
      {theme === "dark" && (
        <button
          type="button"
          className="text-backColor bg-lGray w-14 h-14 rounded-full pt-1"
          onClick={() => setTheme("light")}
        >
          <FontAwesomeIcon icon={faSun} size="lg" />
        </button>
      )}

      {theme === "light" && (
        <button
          type="button"
          className="text-backColor bg-lGray w-14 h-14 rounded-full pt-1"
          onClick={() => setTheme("dark")}
        >
          <FontAwesomeIcon icon={faMoon} size="lg" />
        </button>
      )}
    </div>
  );
};
