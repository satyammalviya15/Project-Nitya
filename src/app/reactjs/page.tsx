"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import ReactJS from "../../../component/ReactJS";
import Footer from "../../../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <ReactJS/>
      <Footer/>
    </>
  );
}
