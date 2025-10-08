"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import Python from "../../../component/Python";
import Footer from "../../../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <BottomNavbar/> */}
      <Python/>
      <Footer/>
    </>
  );
}
