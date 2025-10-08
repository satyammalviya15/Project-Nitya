"use client";

import React from "react";

const certificates = [
  {
    title: "Programming, Data Structures and Algorithms using Python",
    issuer: "NPTEL IIT Madras",
    date: "Mar 2024",
    url: "https://drive.google.com/file/d/13Mndhg5_g0bSwcL-z3SAfOWutdoZjoHB/preview",
  },
  {
    title: "MERN Stack Developer Intern",
    issuer: "Codec Technologies Pvt. Ltd.",
    date: "Sep 2025",
    url: "https://drive.google.com/file/d/1wsjZi9IAxLdjU-2gjHHzokJP5IuXwl8R/preview",
  },
  {
    title: "Infosys ReactJS Bootcamp",
    issuer: "Infosys SpringBoot",
    date: "Sep 2024",
    url: "https://drive.google.com/file/d/1sLm8oPXPNwRJJVhR7U55zZhqgiXIRGpM/preview",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS ION",
    date: "Mar 2024",
    url: "https://drive.google.com/file/d/17wCw5oBM1xjyqRrakskcB5BXVj_QWf95/preview",
  }
];

const CertificatesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-[#1e1e1e] w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          My Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
            >
              {/* PDF Preview */}
              <div className="w-full h-48 border-b border-gray-200 dark:border-gray-700">
                <iframe
                  src={`${cert.url}#zoom=100&view=FitH&page=1`}
                  width="100%"
                  height="100%"
                  className="border-none"
                  title={cert.title}
                ></iframe>
              </div>

              {/* Certificate Info */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500">
                    Date: {cert.date}
                  </p>
                </div>

                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors text-sm text-center"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
