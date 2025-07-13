"use client"
import React from "react";
import { SiNextdotjs } from "react-icons/si"; // Next.js icon from react-icons

const NextJS = () => {
  return (
    <section className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 max-w-2xl mx-auto border border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 mb-4">
        <SiNextdotjs className="text-black dark:text-white text-4xl" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
          Next.js – The React Framework
        </h2>
      </div>

      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-4">
        Next.js is a powerful open-source React framework developed by Vercel. It enables developers to build fast, scalable, and SEO-friendly web applications using server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) — all within a unified structure.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Core Features:
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-4">
        <li>File-based routing with dynamic and nested routes</li>
        <li>Built-in support for SSR, SSG, ISR, and API routes</li>
        <li>Image optimization and automatic static optimization</li>
        <li>Fast refresh, hot reloading, and TypeScript support</li>
        <li>Flexible deployment with seamless Vercel integration</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        Why Use Next.js?
      </h3>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Ideal for production-ready React apps with performance in mind</li>
        <li>Great SEO out-of-the-box using SSR and metadata</li>
        <li>Supports static, dynamic, and hybrid rendering strategies</li>
        <li>Massive community and rich ecosystem (NextAuth, Tailwind, etc.)</li>
        <li>Excellent developer experience and scalability</li>
      </ul>
    </section>
  );
};

export default NextJS;
