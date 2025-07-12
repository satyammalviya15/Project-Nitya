"use client";

import { useSession, signIn } from "next-auth/react";

export default function AccessToken() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    return (
      <div>
        <p>You are not signed in.</p>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
      <img src={session.user?.image|| ""} alt="User Image" className="h-12 w-12 rounded-full" />
      <p>{session.user?.email}</p>
    </div>
  );
}
