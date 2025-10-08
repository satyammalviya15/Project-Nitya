"use client"
import Navbar from "../../component/Navbar"; // adjust path as needed
import AcessToken from "../../component/accessToken.jsx";
import {NewCarousel} from "../../component/NewCarousel";
import { BottomNavbar } from "../../component/BottomNavbar";
import Footer from "../../component/Footer";
import GitHubRepos from "../../component/GithubRepos";
import AboutCompiler from "../../component/AboutCompiler";
import WebsiteViewer from "../../component/WebsiteViewer";
import CertificatesSection from "../../component/CertificatesSection";
import ProgrammerIntroPopup from "../../component/ProgrammerIntro";

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* <BottomNavbar/> */}
      {/* <ProgrammerIntroPopup/> */}
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
