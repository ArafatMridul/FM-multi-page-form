import React from "react";
import mobBg from "/images/bg-sidebar-mobile.svg";
import deskBg from "/images/bg-sidebar-desktop.svg";
import Options from "./Options";
const Sidebar = () => {
    return (
        <div className="relative">
            <picture>
                <source media="(min-width: 62.5rem)" srcset={deskBg} />
                <img
                    src={mobBg}
                    alt="sidebar background"
                    width={274}
                    height={568}
                    className="w-full lg:w-auto h-full"
                />
            </picture>
            <Options />
        </div>
    );
};

export default Sidebar;
