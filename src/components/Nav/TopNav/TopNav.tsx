"use client";

import Link from 'next/link';
import { useState } from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MobileNav({open, setOpen}: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out bg-black filter  `}>
           
            <div className="flex flex-col h-1/2 justify-between items-center mt-28">
                <a className="text-7xl font-bold hover:text-red-500" href="#" >
                    Projects
                </a>
                <a className="text-7xl font-bold hover:text-red-500" href="#" >
                About
                </a>
                <a className="text-7xl font-bold hover:text-red-500" href="#" >
                Blog
                </a>
                 <a className="text-7xl font-bold hover:text-red-500" href="#" >
                Contact Me 
               </a>
            </div>  
        </div>
    )
}

const TopNavBar = () => {


    const [open, setOpen] = useState(false)

    const toggleMenu = (): void => {
        const menuBtn = document.getElementById('menuBtn');
        if (menuBtn instanceof HTMLElement) {
            menuBtn.classList.toggle('clicked');
        }
    };

    return (
        <nav className="fixed top-0 bottom-0 left-0 w-full h-1/4 pr-10 pt-10 pl-10 text-white flex justify-between z-40">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="flex h-1/4 pt-3 z-50">Devon Claiche</div>
            <div className="flex relative">
                {/* Update the Link components as follows */}
                <div className="flex mr-20 pt-3 space-x-10">
                    <Link href="https://www.instagram.com" className='inline-block'><GrInstagram /></Link>
                    <Link href="https://github.com/dclaiche" className='inline-block'><FaGithub /></Link>
                    <Link href="https://www.linkedin.com/in/devonclaiche/" className='inline-block'><FaLinkedin /></Link>
                </div>
                {/* <MobileNav open={open} setOpen={setOpen}/> */}
                <div className="group relative w-11 h-11 cursor-pointer flex-col items-center justify-evenly flex" onClick={() => {
                        setOpen(!open)
                    }}>
                        {/* hamburger button */}
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""}`} />
                        <span className={`h-1 w-full bg-white rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
                {/* <div id="menuBtn" className="relative cursor-pointer " onClick={toggleMenu}>
                    <div id="bar" className="bar bg-white bottom-0 right-0 w-full absolute"></div>
                    <div id="bar" className="bar bg-white top-0 right-0 w-full absolute"></div>
                </div> */}
                {/* Dropdown Menu Logic Here */}
            </div>
        </nav>
    );
};

export default TopNavBar;

