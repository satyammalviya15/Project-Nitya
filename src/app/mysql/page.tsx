"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import MySQL from "../../../component/MySQL";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <MySQL/>
    </>
  );
}
