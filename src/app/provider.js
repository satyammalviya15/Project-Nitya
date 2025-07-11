"use client";
import { SessionProvider } from "next-auth/react";

import { useState,useEffect } from "react";

import { ConvexProvider, ConvexReactClient } from "convex/react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { UserDetailContext } from "../../context/UserDetailContext";
export default function Providers({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storage = JSON.parse(localStorage.getItem("userDetail"));
      if (!storage?.email || !storage) {
        //  Redirect to Home Screen
      } else {
        setUserDetail(storage);
      }
    }
  }, []);

  return (
    <ConvexProvider client={convex}>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <SessionProvider>{children}</SessionProvider>;
        </UserDetailContext.Provider>
      </GoogleOAuthProvider>
    </ConvexProvider>
  );
}
