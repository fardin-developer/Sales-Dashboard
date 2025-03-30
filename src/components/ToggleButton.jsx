import { useState } from "react";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`w-10 h-5 flex items-center border border-gray-300 rounded-full p-0.5 transition-all duration-300 ${
        darkMode ? "bg-primary" : "bg-white"
      }`}
    >
      <div
        className={`w-4 h-4 rounded-full shadow-md transform transition-all duration-300 ${
          darkMode ? "bg-white translate-x-5" : "bg-primary translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
