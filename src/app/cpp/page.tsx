"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import Cpp from "../../../component/CPP";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <Cpp/>
    </>
  );
}
