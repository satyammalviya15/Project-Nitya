"use client"
import React from "react";
import { FaPython } from "react-icons/fa";

const Python = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <FaPython className="text-yellow-500 text-4xl" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Python
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
        Python is a high-level, interpreted programming language known for its readability and ease of use. It supports multiple paradigms including object-oriented, procedural, and functional programming. Popular in data science, AI, web development, and automation, Python is beginner-friendly and backed by a rich ecosystem of libraries and frameworks.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Key Features:
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Easy-to-read syntax with dynamic typing</li>
        <li>Rich libraries for AI, web, data, and automation</li>
        <li>Used in machine learning, backend APIs, scripting</li>
        <li>Cross-platform and open-source with huge community</li>
        <li>Excellent support for rapid prototyping and development</li>
      </ul>
    </section>
  );
};

export default Python;
