'use client';

import React, { useState, Dispatch} from 'react'
import Link from 'next/link'
import { SectionName } from "@/types/SideBarProps";

export interface SideBarProps {
        currentPage: string;
        setCurrentPage: (page: string) => void;
        sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
    }


export default function SideBar(props: SideBarProps) {
    const { currentPage, setCurrentPage, sectionRefs } = props;

    const handleNavigation = (page: string) => {
    setCurrentPage(page);
    sectionRefs[page].current?.scrollIntoView({ behavior: 'smooth' });
  };

    // Append class based on state of sidebar visiblity
    return (
        <>
            <div className="fixed top-96 w-20 h-20 z-10 mb-96 ml-14">
                <ul id="navMenu" className="w-max">
                {Object.keys(sectionRefs).map(page => (
                    <li key={page}>
                        <div className='group flex items-center pb-10' onClick={() => handleNavigation(page)}>
                            <span
                                className={`block overflow-hidden relative h-1 ${currentPage === page ? 'w-14' : 'w-9 bg-white'} mr-4 rounded-sm cursor-pointer transition-all group-hover:w-14`}
                            >{currentPage === page ? <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />: <span className="invisible group-hover:visible absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>}</span>
                            <span className="text-whiteflex items-center ">{page}</span>  
                        </div>
                    </li>
                        
                    ))}
                </ul>
            </div>
        </>
    )
}
