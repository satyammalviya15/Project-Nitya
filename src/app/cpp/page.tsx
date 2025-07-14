"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import Cpp from "../../../component/CPP";
import Footer from "../../../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <Cpp/>
      <Footer/>
    </>
  );
}
