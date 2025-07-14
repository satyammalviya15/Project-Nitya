"use client"
import { LogsIcon } from "lucide-react";
import Navbar from "../../component/Navbar"; // adjust path as needed
import AcessToken from "../../component/accessToken";
import LoginBtn from "../../component/login-btn";
import {NewCarousel} from "../../component/NewCarousel";
import { BottomNavbar } from "../../component/BottomNavbar";
import Footer from "../../component/Footer";

export default function Home() {
  return (
    <>
      <Navbar/>
      <BottomNavbar/>
      <NewCarousel/>
      <AcessToken/>
      <Footer/>
    </>
  );
}
