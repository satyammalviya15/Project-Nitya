"use client";

import React, { useEffect, useState } from "react";
import {
  FaCircle,
  FaSun,
  FaMoon,
  FaFileCode,
  FaFolder,
  FaLinkedin,
  FaEnvelope,
  FaPlay,
  FaDownload
} from "react-icons/fa";
import Image from "next/image";
import logo from "../assets/newprofile.jpg";

const aboutText = `const resume = {
  name: "Satyam Malviya",
  role: "Full Stack Developer",
  location: "Barwaha, Madhya Pradesh",
  email: "satyammalviya281@gmail.com",
  linkedin: "https://www.linkedin.com/in/satyammalviya15/",
  education: {
    degree: "B.Tech in Computer Science",
    college: "Rewa Engineering College (RGPV)",
    cgpa: 7.06,
    higherSecondary: "81.8% - Sarswati Shishu Mandir Barwaha (2020)",
    highSchool: "84% - Sarswati Shishu Mandir Barwaha (2018)"
  },
  skills: [
    "React.js", "Next.js", "Node.js", "Express.js",
    "MongoDB", "MySQL", "SQLite", "Convex", "Python",
    "Flask", "Redux", "REST APIs", "Tailwind CSS"
  ],
};`;

const syntaxHighlight = (text: string) => {
  return text
    .replace(/(".*?")/g, `<span class='text-yellow-400'>$1</span>`) // strings
    .replace(
      /\b(const|let|var|return|if|else|for|while|import|from|class|extends|new)\b/g,
      `<span class='text-blue-400'>$1</span>`
    )
    .replace(/\b(\d+(\.\d+)?)\b/g, `<span class='text-purple-400'>$1</span>`);
};

const AboutCompiler: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (index < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + aboutText.charAt(index));
        setIndex(index + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const blink = setInterval(() => setCursorVisible((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className={`px-4 md:px-6 my-12 transition-all duration-500 `}>
      <div
        className={`relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-all duration-500 border ${
          darkMode ? "border-gray-800 bg-[#1e1e1e]" : "border-gray-300 bg-white"
        }`}
      >
        {/* Header Toolbar */}
        <div
          className={`flex items-center justify-between px-4 py-2 ${darkMode ? "bg-[#2d2d2d]" : "bg-gray-200"}`}
        >
          <div className="flex items-center space-x-2">
            <FaCircle className="text-red-500 text-xs" />
            <FaCircle className="text-yellow-400 text-xs" />
            <FaCircle className="text-green-500 text-xs" />
            <span
              className={`ml-4 font-semibold ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            >
              SatyamMalviyaResume.js
            </span>
          </div>

          {/* <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl hover:scale-110 transition-transform"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
            </button>
          </div> */}

          {/* Download Resume Button */}
          <a
            href="https://drive.google.com/file/d/19haEcC_8ckgZwb0nqUJTUnWpEXNkBu_4/view?usp=sharing"
            download
            // className="mt-4 inline-flex items-center px-4 py-2 bg-indigo-500 text-white text-sm font-medium rounded hover:bg-indigo-600 transition-colors"
          >
            <FaDownload className="mr-2" />
          </a>
        </div>

        {/* Main Section */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div
            className={`md:w-1/4 border-r ${darkMode ? "border-gray-800 bg-[#181818]" : "border-gray-200 bg-gray-50"} p-4`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mt-10 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
                <Image
                  src={logo}
                  alt="Satyam Malviya"
                  fill
                  className="object-cover"
                />
              </div>
              <h2
                className={`mt-4 text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
              >
                Satyam Malviya
              </h2>
              <p
                className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Full Stack Developer
              </p>
              <div className="flex items-center gap-3 mt-3 text-indigo-400">
                <a
                  href="mailto:satyammalviya281@gmail.com"
                  className="hover:text-indigo-500"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/satyammalviya15"
                  target="_blank"
                  className="hover:text-indigo-500"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="mt-6 text-xs">
              <p
                className={`font-semibold mb-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                Explorer
              </p>
              <ul
                className={`${darkMode ? "text-gray-400" : "text-gray-600"} space-y-1`}
              >
                <li className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer">
                  <FaFolder /> <span>Portfolio</span>
                </li>
                <li className="flex items-center gap-2 hover:text-indigo-400 cursor-pointer ml-4">
                  <FaFileCode /> <span>AboutCompiler.js</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Code Editor Area */}
          <div className="relative flex-1 p-6 font-mono text-[15px] whitespace-pre-wrap overflow-auto h-[520px] leading-relaxed">
            {/* Line numbers */}

            <div
              className={`pl-10 ${darkMode ? "text-green-300" : "text-gray-800"}`}
              dangerouslySetInnerHTML={{ __html: displayedText }}
            />
            <span
              className={`absolute ${darkMode ? "text-white" : "text-black"} animate-pulse`}
            >
              {cursorVisible && "|"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompiler;
