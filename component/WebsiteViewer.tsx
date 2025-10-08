"use client";

export default function ProjectGrid() {
  const projects = [
    {
      name: "Forever Shopping App",
      url: "https://forever-pi-rouge.vercel.app",
      description: "An e-commerce solution with real-time product updates.",
    },
    {
      name: "CodeLearner LMS",
      url: "https://code-learn-ecru.vercel.app",
      description: "An LMS platform built using React.js and MongoDB.",
    },
    {
      name: "WonderLust Property Selling Platform",
      url: "https://wonder-lust-eosin.vercel.app",
      description: "AI-powered property selling platform.",
    },
    {
      name: "PieTalk SocialMedia Platform",
      url: "https://pie-talk.vercel.app",
      description: "Social community platform for sharing images and more.",
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col items-center overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-6 text-center">My Projects</h1>

      {/* Wrapper */}
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-full lg:w-[48%] max-w-[400px] bg-white border rounded-3xl shadow-xl overflow-hidden flex flex-col items-center m-4 lg:m-0"
          >
            {/* Project Info */}
            <div className="p-4 text-center w-full text-black font-semibold mb-2 cursor-pointer hover:underline" style={{ textDecoration: "none" }}
  onClick={() => window.open(project.url, "_self")}>
              <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>

            {/* Iframe as mobile screen */}
            <div className="w-[300px] sm:w-[340px] md:w-[360px] lg:w-[375px] h-[520px] sm:h-[200px] md:h-[600px] lg:h-[550px] border border-gray-300 rounded-3xl overflow-hidden shadow-inner transition-all duration-300">
              <iframe
                src={project.url}
                title={project.name}
                width="100%"
                height="100%"
                className="border-none"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
