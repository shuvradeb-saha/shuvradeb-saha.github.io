import React, { useState, useEffect } from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "light") {
      setIsDarkMode(false);
      applyLightTheme();
    } else if (storedTheme === "dark" || prefersDark) {
      setIsDarkMode(true);
      applyDarkTheme();
    } else {
      // Default to dark theme if no preference
      setIsDarkMode(true);
      applyDarkTheme();
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      applyLightTheme();
    } else {
      applyDarkTheme();
    }
    setIsDarkMode(!isDarkMode);
  };

  const applyDarkTheme = () => {
    document.documentElement.style.setProperty("--bg-body", "var(--bg-dark)");
    document.documentElement.style.setProperty("--bg-card", "var(--card-dark)");
    document.documentElement.style.setProperty("--text-primary", "var(--text-dark)");
    document.documentElement.style.setProperty("--text-muted", "var(--text-muted-dark)");
    document.documentElement.style.setProperty("--border-color", "var(--border-dark)");
    document.documentElement.classList.remove("light-theme");
    document.documentElement.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  };

  const applyLightTheme = () => {
    document.documentElement.style.setProperty("--bg-body", "var(--bg-light)");
    document.documentElement.style.setProperty("--bg-card", "var(--card-light)");
    document.documentElement.style.setProperty("--text-primary", "var(--text-light)");
    document.documentElement.style.setProperty("--text-muted", "var(--text-muted-light)");
    document.documentElement.style.setProperty("--border-color", "var(--border-light)");
    document.documentElement.classList.remove("dark-theme");
    document.documentElement.classList.add("light-theme");
    localStorage.setItem("theme", "light");
  };

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
      <FAIcon icon={isDarkMode ? faSun : faMoon} />
    </button>
  );
}
