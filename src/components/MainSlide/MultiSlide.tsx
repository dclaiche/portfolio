// Multislide.server.js
'use client';

import SideBar from "../Nav/SideNav/SideBar";
import useVisibleSection from "@/hooks/useVisibleSection";
import { useState, useRef, useEffect, useCallback, use} from "react";
import { SectionName } from "@/types/SideBarProps";

export default function MultiSlide() {

  const [currentPage, setCurrentPage] = useState('Introduction');
  const sectionRefs = {
    Introduction: useRef<HTMLDivElement>(null),
    About: useRef<HTMLDivElement>(null),
    Website: useRef<HTMLDivElement>(null),
    Contact: useRef<HTMLDivElement>(null),
  };

  useVisibleSection(currentPage, setCurrentPage, sectionRefs);

  return (
    <>
    <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} sectionRefs={sectionRefs} />
      <div className="content min-w-full flex flex-col h-screen overflow-y-scroll transition-all duration-5000">
        <div id="Introduction" ref={sectionRefs.Introduction} className="snap-start min-h-screen w-screen flex bg-black"></div>
        <div id="About" ref={sectionRefs.About} className="min-h-screen w-screen flex bg-red-700"></div>
        <div id="Website" ref={sectionRefs.Website} className="min-h-screen w-screen flex bg-yellow-300"></div>
        <div id="Contact" ref={sectionRefs.Contact} className="min-h-screen w-screen flex bg-blue-300"></div>
      </div>
    </>
  );
}

