"use client"
import React from "react";
import { SiNextdotjs, SiGithub, SiLinkedin, SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { PiFileTextBold } from "react-icons/pi";
import Link from "next/link";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">About This Website</h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        This website is a modern developer portfolio built with <strong>Next.js</strong> and styled using <strong>Tailwind CSS</strong> with components from <strong>ShadCN UI</strong>. It features secure authentication via <strong>NextAuth</strong>, data management using <strong>Convex</strong>, and is deployed on <strong>Vercel</strong> for speed and scalability.
      </p>

      <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">🔧 Technologies Used</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 dark:text-gray-300 mb-6">
        <li className="flex items-center gap-2"><SiNextdotjs /> Next.js</li>
        <li className="flex items-center gap-2"><FaReact /> React</li>
        <li className="flex items-center gap-2"><MdOutlineSecurity /> NextAuth</li>
        <li className="flex items-center gap-2"><SiVercel /> Vercel Hosting</li>
        <li className="flex items-center gap-2">🧠 Convex Backend</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">🌐 Website Sections</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1 mb-6">
        <li><Link href="/" className="text-blue-600 hover:underline">Home</Link> – Overview & introduction</li>
        <li><Link href="https://github.com/your-github" target="_blank" className="text-blue-600 hover:underline">GitHub</Link> – Source code & projects</li>
        <li><Link href="https://linkedin.com/in/your-profile" target="_blank" className="text-blue-600 hover:underline">LinkedIn</Link> – Professional background</li>
        <li><Link href="/resume.pdf" target="_blank" className="text-blue-600 hover:underline">Resume</Link> – Downloadable resume PDF</li>
        <li><Link href="/technologies" className="text-blue-600 hover:underline">Technologies</Link> – Tech stack breakdown</li>
      </ul>

      <h2 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">📦 Components Included</h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Responsive Navigation Bar with dropdowns</li>
        <li>Authentication (Google OAuth via NextAuth)</li>
        <li>Dynamic Tech Stack Cards</li>
        <li>Projects Showcase Section</li>
        <li>Dark Mode Support</li>
      </ul>
    </section>
  );
};

export default About;
