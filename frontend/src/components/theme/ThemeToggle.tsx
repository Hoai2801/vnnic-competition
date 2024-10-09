import { Switch } from "@headlessui/react";
import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-gray-200"
      } relative inline-flex h-5 w-9 items-center rounded-full shadow-sm transition-colors`}
    >
      <span
        className={`${
          theme === "dark" ? "translate-x-5" : "translate-x-1"
        } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
      />
    </Switch>
  );
};

export default ThemeToggle;
