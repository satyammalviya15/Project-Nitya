"use client";

import React, { useEffect, useState } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const GitHubRepos: React.FC<{ username: string }> = ({ username }) => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        const data = await res.json();
        if (Array.isArray(data)) {
          setRepos(data);
        } else {
          setError("Failed to fetch repositories.");
          console.error("GitHub API error:", data);
        }
      } catch (error) {
        setError("Network error occurred.");
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  const filteredRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const displayedRepos = showAll ? filteredRepos : filteredRepos.slice(0, 6);

  if (loading) return <p className="text-center text-sm">Loading repositories...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;
  if (!repos.length) return <p className="text-center">No repositories found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">My GitHub Projects</h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search repositories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedRepos.length > 0 ? (
          displayedRepos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow hover:shadow-md transition-shadow p-4 flex flex-col justify-between h-full"
            >
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline text-base sm:text-lg mb-2"
              >
                📁 {repo.name}
              </a>
              <p className="text-sm text-gray-700 mb-2">
                {repo.description || "No description provided."}
              </p>
              <div className="mt-auto text-xs text-gray-500 space-y-1">
                {repo.language && <p>Language: {repo.language}</p>}
                <p>🕒 Updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No repositories match your search.</p>
        )}
      </div>

      {filteredRepos.length > 3 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less" : "Show All"}
          </button>
        </div>
      )}
    </div>
  );
};

export default GitHubRepos;
