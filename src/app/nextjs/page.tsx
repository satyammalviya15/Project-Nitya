"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import NextJS from "../../../component/NextJS";
import Footer from "../../../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <BottomNavbar/> */}
      <NextJS/>
      <Footer/>
    </>
  );
}
