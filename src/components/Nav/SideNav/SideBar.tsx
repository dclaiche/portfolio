'use client';

import React, { useState } from 'react'
import Link from 'next/link'


export default function SideBar() {

    const [clickedItem, setClickedItem] = useState(0);

    const className = "fixed top-96 w-20 h-20 z-10 mb-96 ml-14";
    // Append class based on state of sidebar visiblity
    return (
        <>
            <div className={`${className}`}>
                <ul id="navMenu" className="flex flex-col">
                <Link href="#Introduction" passHref legacyBehavior><li className={` h-1 ${clickedItem === 0 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(0)}></li></Link>
                <Link href="#About" passHref legacyBehavior><li className={` h-1 ${clickedItem === 1 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(1)}></li></Link>
                <Link href="#Website" passHref legacyBehavior><li className={` h-1 ${clickedItem === 2 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(2)}></li></Link>
                <Link href="#Contact" passHref legacyBehavior><li className={` h-1 ${clickedItem === 3 ? 'w-3/4' : 'w-2/4'} mb-10 bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(3)}></li></Link>
                </ul>
            </div>
        </>
    )
}
