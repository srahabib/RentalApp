import React, { useRef } from 'react';
import OutsideClick from 'react-outside-click-handler';
import Nav from './Sidebar/Nav';
import SettingButton from './Sidebar/SettingButton';
import Logo from './Sidebar/Logo';

const Sidebar = ({mobileNavsidebar}) => {
    const sidebarRef = useRef(null);
    const sidebarOutsideClick = new OutsideClick(sidebarRef);

    //console.log("sidebar Ref", sidebarRef)
    //console.log("sidebar Ref sidebarOutsideClick", sidebarOutsideClick)
    return (
        <aside className={`${mobileNavsidebar ? 'block' : 'hidden'} sm:flex sm:flex-col z-50`} ref={sidebarRef}>
            <Logo />
            <div className="flex-grow flex flex-col justify-between text-white bg-gray-500">
                <Nav sidebarOutsideClick={sidebarOutsideClick} />
                <SettingButton />
            </div>
        </aside>
    );
};

export default Sidebar;