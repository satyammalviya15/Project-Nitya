"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import logo from "../assets/newprofile.jpg";
import Image from "next/image";

export default function ProgrammerIntro() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const introText = "Hi, I am Satyam Malviya, a Full Stack Developer.";

  // Show popup on page load
  useEffect(() => {
    setTimeout(() => setIsOpen(true), 500);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!isOpen) return;
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(introText.slice(0, index + 1));
      index++;
      if (index === introText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 animate-fadeIn">
      <div className="relative bg-white dark:bg-[#1e1e1e] rounded-3xl shadow-2xl w-[90vw] md:w-[60vw] lg:w-[40vw] p-8 flex flex-col items-center text-center
                      transform perspective-1000 transition-transform duration-1000 hover:rotate-y-3 hover:scale-105">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* 3D Icon / Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg mb-4 transform rotate-6">
          <Image
            src={logo}
            alt="Satyam Malviya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Text */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {typedText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Welcome to my portfolio! Explore my latest projects built with React, Next.js, Node.js, and Tailwind CSS.
        </p>
      </div>
    </div>
  );
}
