"use client"
import React from "react";
import { FaPhp } from "react-icons/fa"; // Using react-icons for PHP logo

const PHP = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <FaPhp className="text-[#8892be] text-4xl" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          PHP (Hypertext Preprocessor)
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
        PHP is a powerful server-side scripting language used to develop dynamic and interactive websites. Known for its simplicity and flexibility, PHP integrates seamlessly with HTML and various databases, especially MySQL. It powers popular platforms like WordPress, Facebook (legacy), and Laravel-based web applications.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Why Use PHP?
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Open-source and easy to learn for beginners.</li>
        <li>Runs on almost all major operating systems and servers.</li>
        <li>Supports a wide range of databases (MySQL, PostgreSQL, SQLite, etc.).</li>
        <li>Large ecosystem with frameworks like Laravel, CodeIgniter, Symfony.</li>
        <li>Massive community support and documentation available.</li>
      </ul>
    </section>
  );
};

export default PHP;
