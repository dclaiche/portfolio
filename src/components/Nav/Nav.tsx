'use client';
import { useState } from 'react';
import MenuBarMobile from './SideNav/MenuBarMobile';
import SideBar from './SideNav/SideBar';
import TopNavBar from './TopNav/TopNav';

export default function Nav() {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    return (
        <div>
            <TopNavBar />
            <MenuBarMobile setter={setShowSidebar} />
            <SideBar show={showSidebar} setter={setShowSidebar} />
        </div>
    );
};