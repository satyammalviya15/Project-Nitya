"use client";

import { useSession, signIn } from "next-auth/react";

export default function AccessToken() {
  const { data: session, status } = useSession();

  // if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    return (
      <div className="text-center mt-10">
        {/* <p className="mb-4">You are not signed in.</p>
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Sign in
        </button> */}
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <p className="text-lg font-semibold">Welcome, {session.user?.name}!</p>
      <p className="mt-2 text-gray-500">
        Thank you for logging in. We will keep you updated with the latest news and updates.
      </p>
    </div>
  );
}
