"use client";

import { useSession, signIn } from "next-auth/react";

export default function AccessToken() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (!session) {
    return (""
    );
  }

  return (
    <div>
      <p>Welcome, {session.user?.name}</p>
    </div>
  );
}
