"use client"
import Navbar from "../../../component/Navbar"; // adjust path as needed
import { BottomNavbar } from "../../../component/BottomNavbar";
import Python from "../../../component/Python";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <Python/>
    </>
  );
}
