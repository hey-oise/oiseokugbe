"use client";
import Link from "next/link";
import { useState } from "react";
import {Menu, X, MessagesCircle} from "lucide-react";
export default function TopBar() {
    const navItems = ["home",
     "about",
     "portfolio",
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
        <>
        {isOpened &&
        <div
          className="bg-black/50 backdrop-blur-sm fixed top-20 bottom-0 left-0 right-0 z-0"
            onClick={toggleMenu}
            ></div>
        }

        <div className="bg-black/10 backdrop-blur-md fixed top-0 left-0 right-0 h-20 flex flex-row justify-center items-center
        px-7 border-b border-slate-800">
            <div className="flex flex-row justify-between w-full items-center">
            <Link href="/" className="text-slate-500 text-xl capitalize font-bold h-fit w-fit">oise</Link>
            <div className="hidden md:flex flex-row justify-end gap-7 w-full">
                <div className="flex flex-row gap-3">
                {navItems.map(
                        (item, key) => { return (<Link href={"#"+item} key={key} className="text-slate-600 capitalize active:underline my-auto">{item}</Link>)})}
                        </div>                     <button onClick={() => window.open("https://wa.me/2347042071497⁠", "_blank")} className="bg-slate-950 transition-all duration-300 hover:bg-slate-500 text-slate-500 hover:text-slate-950 capitalize py-2 px-5 border border-slate-800 hover:border-slate-500 rounded-xl flex flex-row gap-1">{`let's talk!`}</button>
            </div>
            <button className="flex md:hidden" onClick={toggleMenu}>{!isOpened ? <Menu className="text-slate-500"/> : <X className="text-slate-500"/>}</button>

            <div className={`bg-slate-900 w-60 h-fit fixed right-1 top-25 border border-slate-800 rounded-2xl md:hidden shadow-xl transition-all duration-300 ease-in-out flex flex-col gap-2 justfy-between py-3 z-10 ${isOpened ?
                "opacity-100 -translate-x-4 visible" :
                "opacity-0  invisible translate-x-4 pointer-events-none"
            }`}>{navItems.map((item, key) => {
                return (
                    <Link className="m-auto text-slate-500 font-bold capitalize text-xl active:underline" key={key} href={"#" + item}onClick={() => setIsOpened(false)}>{item}</Link>
                )
            })}
            <button onClick={() => { toggleMenu
                window.open("https://wa.me/2347042071497⁠", "_blank")
toggleMenu}}
              className="hover:bg-slate-950 transition-all duration-300 bg-slate-500 hover:text-slate-500 text-slate-950 capitalize py-2 px-3 border border-gray-800 hover:border-slate-500 w-50 font-2xl m-auto rounded-2xl"
              >
                {"let's talk!"}
                </button>
                </div>

            </div>
            </div>
        </>
    )
}