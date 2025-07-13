"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import PHP from "../../../component/PHP";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <PHP/>
    </>
  );
}
