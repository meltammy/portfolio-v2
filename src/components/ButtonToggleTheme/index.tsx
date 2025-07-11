"use client";

import { useEffect, useState } from "react";
import { Icon } from "../Icon";
import styles from "./ButtonToggleTheme.module.scss";

export function ButtonToggleTheme() {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    const html = document.documentElement;

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  }

  useEffect(() => {
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    html.classList.add("dark");
    localStorage.setItem("theme", "dark");

    if (savedTheme && !html.classList.contains(savedTheme)) {
      html.classList.add(savedTheme);
      localStorage.setItem("theme", savedTheme);
    }

    setIsDark(savedTheme == "dark" || prefersDark);
  }, []);

  return (
    <button onClick={toggleTheme} className={styles.container}>
      <Icon icon={isDark ? "Sun" : "Moon"} />
    </button>
  );
}
