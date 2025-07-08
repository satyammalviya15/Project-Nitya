"use client"
import { LogsIcon } from "lucide-react";
import Navbar from "../../component/Navbar"; // adjust path as needed
import AcessToken from "../../component/accessToken";
import LoginBtn from "../../component/login-btn";

export default function Home() {
  return (
    <>
      <Navbar/>
      <AcessToken/>
    </>
  );
}
