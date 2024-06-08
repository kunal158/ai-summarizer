import React, { useState } from "react";
import Hero from "./components/Hero";
import Demo from "./components/Demo";
import "./App.css";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <Hero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Demo isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
