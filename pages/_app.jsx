"use client"
// pages/_app.js

import '../src/app/globals.css'; // ✅ adjust path if your file is in styles/

import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}