"use client"
import React from "react";
import { SiCplusplus } from "react-icons/si";

const Cpp = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <SiCplusplus className="text-[#00599C] text-4xl" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          C++
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
        C++ is a high-performance, general-purpose programming language that supports both procedural and object-oriented programming. It is widely used in systems programming, game development, embedded systems, and competitive programming. Known for its speed and control over hardware, C++ is the foundation for many modern software tools and engines.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Key Features:
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Supports object-oriented and procedural paradigms</li>
        <li>Close-to-hardware performance and memory management</li>
        <li>STL (Standard Template Library) for reusable code</li>
        <li>Widely used in game engines, OS development, and IoT</li>
        <li>Strong support for multithreading and performance-critical apps</li>
      </ul>
    </section>
  );
};

export default Cpp;
