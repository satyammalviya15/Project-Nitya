"use client";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export default function LoginBtn() {
  const { data: session, status } = useSession();
  const CreateUser = useMutation(api.users.CreateUser);

  useEffect(() => {
    async function saveUserToConvex() {
      if (session?.user) {
        const user = session.user;

        const result = await CreateUser({
          name: user.name ?? "",
          email: user.email ?? "",
          picture: user.image ?? "",
        });

        const userDetail = {
          ...user,
          _id: result?.id ?? result,
        };

        if (typeof window !== "undefined") {
          localStorage.setItem("userDetail", JSON.stringify(userDetail));
        }
      }
    }

    if (session) {
      saveUserToConvex();
    }
  }, [session, CreateUser]);

  if (status === "loading") return <div>Loading...</div>;

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    );
  }

  return (
    <Button
      onClick={() => {
        signIn(); // Opens Google popup
      }}
    >
      Sign in
    </Button>
  );
}
