import React, { useState } from "react";
import "./Hero.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Hero = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-800">
        <div className="max-w-screen-lg flex items-center justify-between mx-auto p-4">
          <span className="font-bold text-blue-600 text-xl">AI-SUMMARIZER</span>
          <div className="flex items-center">
            <button
              className="bg-blue-500 text-black px-2 py-1 rounded-full text-bold text-base mr-2"
              onClick={() =>
                window.open("https://github.com/kunal158/ai-summarizer", "_blank")
              }
            >
              &nbsp;Github&nbsp;
            </button>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={30}
            />
          </div>
        </div>
      </nav>
      <br />
      <div className="flex flex-col items-center">
        <span className="font-extrabold text-5xl dark:text-white">
          Summarize articles
        </span>
        <span className="font-bold text-3xl dark:text-gray-300">using</span>
        <span className="font-extrabold gradient-text text-5xl">CHAT GPT</span>
        <span className="text-base w-full max-w-xl text-center dark:text-gray-400">
          <br />
          Effortlessly digest complex articles using Summize. Just paste the
          link below and hit the button.
        </span>
      </div>
    </div>
  );
};

export default Hero;
