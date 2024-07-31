'use client';

import React, { useState } from 'react'
import Link from 'next/link'


export default function SideBar() {

    const [clickedItem, setClickedItem] = useState(0);

    const className = "fixed top-96 w-20 h-20 z-10 mb-96 ml-14";
    const items = [
        { href: "#Introduction", text: "Introduction" },
        { href: "#About", text: "About" },
        { href: "#Website", text: "Website" },
        { href: "#Contact", text: "Contact" }
    ];
    // Append class based on state of sidebar visiblity
    return (
        <>
            <div className={`${className}`}>
                <ul id="navMenu" className="w-max">
                {items.map((item, index) => (
                    <li>
                        <Link className='group flex items-center pb-10' href={item.href} passHref key={index} onClick={() => setClickedItem(index)}>
                            <span
                                className={`block overflow-hidden relative h-1 ${clickedItem === index ? 'w-14' : 'w-9 bg-white'} mr-4 rounded-sm cursor-pointer transition-all group-hover:w-14`}
                            >{clickedItem === index ? <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />: <span className="invisible group-hover:visible absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>}</span>
                            <span className="text-whiteflex items-center ">{item.text}</span>  
                               
                        </Link>
                    </li>
                        
                    ))}
                </ul>
            </div>
        </>
    )
}


// Inside 

// <div className='flex flex-row'><Link href="#Introduction" passHref legacyBehavior><li className={`h-1 ${clickedItem === 0 ? 'w-3/4' : 'w-2/4'} bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(0)}></li></Link>
//                 <span className="flex items-start text-white">Test</span> {/* Text */}
//                 </div><Link href="#About" passHref legacyBehavior><li className={` h-1 ${clickedItem === 1 ? 'w-3/4' : 'w-2/4'} bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(1)}></li></Link>
//                 <Link href="#Website" passHref legacyBehavior><li className={` h-1 ${clickedItem === 2 ? 'w-3/4' : 'w-2/4'} bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(2)}></li></Link>
//                 <Link href="#Contact" passHref legacyBehavior><li className={` h-1 ${clickedItem === 3 ? 'w-3/4' : 'w-2/4'} bg-white rounded-sm cursor-pointer `} onClick={() => setClickedItem(3)}></li></Link>
                
// 'use client';

// import React, { useState } from 'react'
// import Link from 'next/link'


// export default function SideBar() {

//     const [clickedItem, setClickedItem] = useState(0);

//     const className = "fixed top-96 w-40 h-20 z-10 mb-96 ml-14"; // Increased width to accommodate text
//     const items = [
//         { href: "#Introduction", text: "Introduction" },
//         { href: "#About", text: "About" },
//         { href: "#Website", text: "Website" },
//         { href: "#Contact", text: "Contact" }
//     ];

//     return (
//         <>
//             <div className={`${className}`}>
//                 <ul id="navMenu" className="flex flex-col space-y-4">
//                     {items.map((item, index) => (
//                         <Link href={item.href} passHref legacyBehavior key={index}>
//                             <li
//                                 className={`flex items-center h-8 ${clickedItem === index ? 'w-3/4' : 'w-2/4'} mb-2 bg-white rounded-sm cursor-pointer transition-all`}
//                                 onClick={() => setClickedItem(index)}
//                             >
//                                 <div className={`h-4 w-4 rounded-full bg-black ${clickedItem === index ? 'mr-4' : 'mr-2'}`}></div> {/* Rounded icon */}
//                                 <span className="text-black">{item.text}</span> {/* Text */}
//                             </li>
//                         </Link>
//                     ))}
//                 </ul>
//             </div>
//         </>
//     )
// }
