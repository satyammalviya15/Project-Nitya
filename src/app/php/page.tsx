"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import PHP from "../../../component/PHP";
import Footer from "../../../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <PHP/>
      <Footer/>
    </>
  );
}
