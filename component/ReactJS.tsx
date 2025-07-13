"use client"
import React from "react";
import { FaReact } from "react-icons/fa";

const ReactJS = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <FaReact className="text-blue-500 text-4xl animate-spin-slow" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          ReactJS
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
        ReactJS is a powerful JavaScript library for building user interfaces, developed by Meta. It uses a component-based architecture and a virtual DOM for high-performance rendering. With features like hooks, JSX, and state management, React is the foundation for modern frontend development, supporting SPAs, PWAs, and scalable apps.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Key Features:
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Component-based reusable structure</li>
        <li>Virtual DOM for efficient updates</li>
        <li>Hooks for functional logic and lifecycle</li>
        <li>Large ecosystem with libraries and tools</li>
        <li>Strong community and documentation</li>
      </ul>
    </section>
  );
};

export default ReactJS;
