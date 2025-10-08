"use client"
import { LogsIcon } from "lucide-react";
import Navbar from "../../component/Navbar"; // adjust path as needed
import AcessToken from "../../component/accessToken.jsx";
import LoginBtn from "../../component/login-btn";
import {NewCarousel} from "../../component/NewCarousel";
import { BottomNavbar } from "../../component/BottomNavbar";
import Footer from "../../component/Footer";
import GitHubRepos from "../../component/GithubRepos";
import AboutCompiler from "../../component/AboutCompiler";
import WebsiteViewer from "../../component/WebsiteViewer";
import AutoPopup from "../../component/AutoPopup";
import CertificatesSection from "../../component/CertificatesSection";

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <BottomNavbar/> */}
      {/* <AutoPopup/> */}
      <AcessToken/>
      <AboutCompiler/>
      <WebsiteViewer/>
      <GitHubRepos username="satyammalviya15"/>
      <NewCarousel/>
      <CertificatesSection/>
      <Footer/>
    </>
  );
}
