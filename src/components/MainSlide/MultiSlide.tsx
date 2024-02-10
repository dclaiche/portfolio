// Multislide.server.js
import IntroductionSlide from "./Slides/Introduction";
import SideBar from "../Nav/SideNav/SideBar";
import Link from "next/link";

export default function MultiSlide() {
  return (
    <>
    <SideBar/>
      <div className="content min-w-full flex flex-col h-screen overflow-y-scroll snap-y snap-mandatory transition-all duration-5000">
        <div id="Introduction" className="snap-start min-h-screen w-screen flex bg-black"></div>
        <div id="About" className="snap-start min-h-screen w-screen flex bg-red-700"></div>
        <div id="Website" className="snap-start min-h-screen w-screen flex bg-yellow-300"></div>
        <div id="Contact" className="snap-start min-h-screen w-screen flex bg-blue-300"></div>
      </div>
    </>
  );
}
