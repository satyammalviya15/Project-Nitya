"use client"
import React from "react";
import { SiMysql } from "react-icons/si";

const MySQL = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <SiMysql className="text-[#00758F] text-4xl" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          MySQL
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
        MySQL is a fast, reliable, and widely-used open-source relational database management system. Known for its performance and compatibility, it stores data in structured tables and uses SQL for querying. MySQL is commonly used with PHP, Node.js, and other back-end technologies for web and enterprise applications.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Key Features:
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Relational database with strong ACID compliance</li>
        <li>Structured data storage using tables and relations</li>
        <li>Support for complex SQL queries and joins</li>
        <li>Compatible with many languages (PHP, Node.js, Python)</li>
        <li>Scalable, secure, and widely supported</li>
      </ul>
    </section>
  );
};

export default MySQL;
