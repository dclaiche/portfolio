"use client";

import Link from 'next/link';
import { useState } from 'react'

function MobileNav({open, setOpen}: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28">
                <a className="text-2xl font-bold text-red-500 my-4" href="#" >
                    Home
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                    About Us
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                Services
                </a>
                <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                Gallery
                </a>
                 <a className="text-2xl font-bold my-4 hover:text-red-500" href="#" >
                Contact Us 
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
        <nav className="fixed top-0 bottom-0 left-0 w-full pr-10 pt-10 pl-10 text-white flex justify-between z-1000">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="">Devon Claiche</div>
            <div className="flex relative">
                {/* Update the Link components as follows */}
                <div className="flex mr-24">
                    <Link href="https://www.instagram.com" passHref>Instagram</Link>
                    <Link href="https://github.com" passHref>GitHub</Link>
                    <Link href="https://linkedin.com" passHref>LinkedIn</Link>
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

