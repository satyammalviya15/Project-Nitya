"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import NextJS from "../../../component/NextJS";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <NextJS/>
    </>
  );
}
