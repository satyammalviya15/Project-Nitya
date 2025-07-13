"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import About from "../../../component/About";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <About/>
    </>
  );
}
