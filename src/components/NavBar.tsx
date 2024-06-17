'use client'

import { INavItems } from "@/app/types";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
    navItems: INavItems;
    selectedNav: number;
    setSelectedNav: Dispatch<SetStateAction<number>>
}

//border-white/70 text-black dark:border-gray-500/40 dark:text-white shadow-xl shadow-black/20 backdrop-blur-sm

export default function NavBar({ navItems, selectedNav, setSelectedNav }: NavBarProps){
    return <div className="w-full sticky top-8 z-20 mt-8">
        <div className="w-fit m-auto p-2 border-2 rounded-[18px] relative border-gray-500/40 backdrop-blur-sm shadow-xl shadow-black/20">
            {navItems.map((item, idx) => {
                return <a href={item.jumpTo} onClick={() => setSelectedNav(idx)} key={idx} className={`py-2 px-6 -mr-2 relative z-20 ${selectedNav === idx ? "nav-select-text-color" : ""}`}>{item.name}</a>
            })}
            <div style={{width: navItems[selectedNav].width, left: navItems[selectedNav].leftPosition }} className={`h-full rounded-2xl absolute top-0 z-10 nav-select-slide bg-white/70 text-black dark:bg-gray-500/40 dark:text-white`}></div>
        </div>
    </div>
}