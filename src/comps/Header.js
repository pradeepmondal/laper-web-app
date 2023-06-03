"use client"

import React, { useState } from "react"
import Image from "next/image"
import laperIcon from '@/assets/laperIcon.svg'
import ExpIntModal from '@/comps/ExpIntModal'

export function Header() {
    const [showModal, setShowModal] = useState(false)

    return (
        <header className="bg-black w-max h-max mx-auto">
            <ExpIntModal show = {showModal} />
            <div className="inline-flex py-[2rem]  space-x-[7rem]  items-center justify-center relative">
                <div className="flex text-slate-100 text-[2rem] ">
                    
                    <Image src={laperIcon} alt="Laper Icon" className="w-[4rem] h-[4rem]" /><button className="flex items-center ">Laper</button>
                </div>
            
            <button className="text-slate-100/50 text-[1.5rem] ">Home</button>
            <button className="text-slate-100/50 text-[1.5rem] ">About Us</button>
            <button className="text-slate-100/50 text-[1.5rem] ">How it works?</button>
            <button className="text-slate-100/50 text-[1.5rem] ">Support</button>
            <div className="relative  md:items-center md:justify-center md:inline-flex group">
                        <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                        <button
                            
                            onClick={()=>{setShowModal(!showModal)}}
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


