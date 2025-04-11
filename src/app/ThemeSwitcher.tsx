"use client";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <FontAwesomeIcon
      icon={theme === "dark" ? faSun : faMoon}
      className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    />
  );
};
