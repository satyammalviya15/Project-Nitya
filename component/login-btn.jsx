"use client";

import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        {/* <p>Welcome, {session.user.name}</p>
        <p>{session.user.image}</p>
        <p>{session.user.email}</p> */}
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return <Button onClick={() => signIn()}>Sign in</Button>;
}
