"use client";
import { useState } from "react";
import {Menu, X} from "lucide-react";
export default function TopBar() {
    const navItems = ["home",
     "about",
     "projects",
     "skills",
     "contact"
    ]
    const [isOpened,setIsOpened] = useState(false);
    const toggleMenu = ()=> {
        if(isOpened) {
            setIsOpened(false);
        } else {
            setIsOpened(true);
        }
    }
    return (
        <div className="bg-black/10 backdrop-blur-md fixed top-0 left-0 right-0 h-20 flex flex-row justify-center items-center
        px-7 border-b border-slate-800">
            <div className="flex flex-row justify-between w-full items-center">
            <p className="text-slate-500 text-xl capitalize font-bold h-fit w-fit">oise</p>
            <div className="hidden md:flex flex-row justify-between w-full">
                <div className="flex flex-row gap-3 mx-auto">
                {navItems.map(
                        (item, key) => { return (<button key={key} className="text-slate-600 capitalize active:underline">{item}</button>)})}
                        </div>                     <button className="bg-slate-950 transition-all duration-300 hover:bg-slate-500 text-slate-500 hover:text-slate-950 capitalize py-3 px-5 border border-slate-800 hover:border-slate-500 rounded-2xl">{"let's talk!"}</button>
            </div>
            <button className="flex md:hidden" onClick={toggleMenu}>{!isOpened ? <Menu className="text-slate-500"/> : <X className="text-slate-500"/>}</button>

            <div className={`bg-slate-900 w-60 h-60 fixed right-1 top-25 border border-slate-800 rounded-2xl flex md:hidden shadow-xl transition-all duration-300 ease-in-out ${isOpened ?
                "opacity-100 -translate-x-4 visible" :
                "opacity-0  invisible translate-x-4 pointer-events-none"
            }`}></div>

            </div>
        </div>
    )
}