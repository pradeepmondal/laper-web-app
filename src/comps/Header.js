"use client"

import React, { useState } from "react"
import Image from "next/image"
import laperIcon from '@/assets/laperIcon.svg'
import ExpIntModal from '@/comps/ExpIntModal'
import Link from "next/link"

export function Header() {
    const [showModal, setShowModal] = useState(false)

    const handleScroll = (e) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <header className="bg-black w-max h-max mx-auto ">
            <ExpIntModal show={showModal} />
            <div className="grid grid-cols-1 sm:inline-flex space-y-2 sm:py-[2rem]  sm:space-x-[7rem]  sm:items-center sm:justify-center sm:relative mb-2">
                <div className="flex text-slate-100 text-[2rem] ">

                    <Image src={laperIcon} alt="Laper Icon" className="w-[4rem] h-[4rem]" /><button className="flex items-center ">Laper</button>
                </div>
                <Link href={`#home`} onClick={handleScroll}>
                    <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer" >Home
                    </button>
                    <div className="w-0 h-[2px] bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                </Link>

                <Link href={`#about`} onClick={handleScroll}>
                    <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer" >About
                    </button>
                    <div className="w-0 h-[2px] bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                </Link>

                <Link href={`#howItWorks`} onClick={handleScroll}>
                    <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer" >How It Works
                    </button>
                    <div className="w-0 h-[2px] bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                </Link>

                <Link href={`#support`} onClick={handleScroll}>
                    <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer" >Support
                    </button>
                    <div className="w-0 h-[2px] bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                </Link>

                <div className="relative  sm:items-center sm:justify-center sm:inline-flex sm:group">
                    <div className="absolute transition-all duration-200 rounded-[2rem] sm:rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 "></div>
                    <button

                        onClick={() => { setShowModal(!showModal) }}
                        title=""
                        className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    >
                        {" "}
                        Express Interest{" "}
                    </button>
                </div>

            </div>










        </header>

    )
}


