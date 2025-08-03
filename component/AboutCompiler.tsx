"use client";

import React, { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

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

const AboutCompiler: React.FC = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index < aboutText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + aboutText.charAt(index));
        setIndex(index + 1);
      }, 10); // typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Cursor blink effect
  useEffect(() => {
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <div className="px-4 md:px-6 my-10">
      <div className="w-full max-w-7xl mx-auto rounded-md shadow-xl border border-gray-700 bg-[#1e1e1e]">
        {/* Title bar like VS Code */}
        <div className="flex items-center px-4 py-2 bg-[#2d2d2d] rounded-t-md">
          <FaCircle className="text-red-500 mr-2 text-xs" />
          <FaCircle className="text-yellow-400 mr-2 text-xs" />
          <FaCircle className="text-green-500 mr-2 text-xs" />
          <span className="text-sm text-gray-300 ml-4">SatyamMalviyaResume.sm</span>
        </div>

        {/* Code editor area */}
        <div className="p-5 font-mono text-[15px] text-green-300 whitespace-pre-wrap overflow-auto h-[450px] leading-relaxed">
          <code>
            {displayedText}
            <span className="text-white">{cursorVisible && "|"}</span>
          </code>
        </div>
      </div>
    </div>
  );
};

export default AboutCompiler;
