"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react"; // npm install lucide-react

export default function AutoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Show popup when the page loads
  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    }, 800); // small delay (optional)
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-xl w-[90vw] md:w-[60vw] lg:w-[40vw] p-6 relative text-center">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          <X size={24} />
        </button>

        {/* Popup Content */}
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          👋 Welcome to My Portfolio!
        </h2>
        <p className="text-gray-600">
          Explore my latest projects and creations built with Next.js, React,
          and Tailwind CSS.  
          Stay tuned for more updates!
        </p>

        <button
          onClick={() => setIsOpen(false)}
          className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
