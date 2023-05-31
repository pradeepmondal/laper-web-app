"use client"

import React, { useState } from "react"
import Image from "next/image"
import laperIcon from '@/assets/laperIcon.svg'

export function Header() {
    const [expanded, setExpanded] = useState(false)

    return (
        <header className="bg-black w-max h-max">
            <div className="inline-flex py-[2rem] px-[8rem] space-x-[6rem] items-center justify-center relative">
                <div className="flex text-slate-100 text-[2rem] space-x-2">
                    
                    <Image src={laperIcon} alt="Laper Icon" className="w-[4rem] h-[4rem]" /><label className="flex items-center ">Laper</label>
                </div>
            
            <label className="text-slate-100/50 text-[1.5rem] ">Home</label>
            <label className="text-slate-100/50 text-[1.5rem] ">About Us</label>
            <label className="text-slate-100/50 text-[1.5rem] ">How it works?</label>
            <label className="text-slate-100/50 text-[1.5rem] ">Support</label>
            <div className="relative  md:items-center md:justify-center md:inline-flex group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <a
                            href="#"
                            title=""
                            className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                            role="button"
                        >
                            {" "}
                            Express Interest{" "}
                        </a>
            </div>
            
        </div>
        
        


            
        </header>
       
    )
}


