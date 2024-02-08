'use client';

import React, { useState, useEffect, SetStateAction, Dispatch } from 'react'
import Link from 'next/link'
import { SideBarProps } from '@/types/SideBarProps'
import { MenuBarProps } from '@/types/MenuBarProps'

export default function SideBar({ show, setter } : SideBarProps) {

    const [clickedItem, setClickedItem] = useState(0);

    // Define our base class
    // bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40
    const className = "fixed top-96 w-20 h-20 z-10 mb-96 ml-14";
    // Append class based on state of sidebar visiblity
    const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

    // Clickable menu items
    const MenuItem = ({ icon, name, route } : MenuBarProps) => {
        // Highlight menu item based on currently displayed route
        const colorClass = "text-white/50 hover:text-white";

        return (
            <Link
                href={route}
                onClick={() => {
                    setter(!show);
                }}
                className={`flex gap-1 [&>*]:my-auto text-md pl-6 py-3 border-b-[1px] border-b-white/10 ${colorClass}`}
            >
                <div className="text-xl flex [&>*]:mx-auto w-[30px]">
                    {icon}
                </div>
                <div>{name}</div>
            </Link>
        )
    }

    // // Overlay to prevent clicks in background, also serves as our close button
    // const ModalOverlay = () => (

        
    //     <div
    //         className={`flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50`}
    //         onClick={() => {
    //             setter(!show);
    //         }}
    //     />
    // )

    return (
        <>
            <div className={`${className}`}>
                <ul id="navMenu" className="flex flex-col">
                        <li className={` h-1 ${clickedItem === 0 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(0)}></li>
                        <li className={` h-1 ${clickedItem === 1 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(1)}></li>
                        <li className={` h-1 ${clickedItem === 2 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(2)}></li>
                        <li className={` h-1 ${clickedItem === 3 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(3)}></li>
                </ul>
            </div>
            {/* {show ? <ModalOverlay /> : <></>} */}
        </>
    )
}
