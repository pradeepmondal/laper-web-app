"use client"

import React, { useState } from "react"

export default function ExpIntModal({show}) {

    if(!show){
        return null
    }
    else{
        return <div className="fixed backdrop-blur-sm z-10 w-screen h-[100vh] ">
            <div className="flex flex-row fixed drop-shadow-[40 rem] z-20 my-[7rem] ml-[5rem] mr-[5rem]  w-4/5 h-[70vh] border-purple-900 border-16 bg-purple-800/[98%]  rounded-2xl shadow-lg shadow-purple-400/60 ">
            <div className=" basis-1/2 flex-col text-purple-200 text-2xl mx-auto space-x-[1rem] mt-[4rem] max-w-fit">
                <label className="text-[1.2rem] text-purple-100/70 ">Name  </label> <br />
                <label className="text-[1.2rem] text-purple-100/70">Name  </label>

            </div>

            <div className="basis-1/2 flex-col text-purple-200 text-2xl mx-auto space-x-[1rem] mt-[4rem]">
                
                <input placeholder="Full name" className="text-[1.2rem] bg-purple-100/30 placeholder-purple-100/40 text-purple-100/70 px-[0.5rem] border-2 border-purple-200/10 rounded-md outline-none active:outline-none focus:outline-none focus:border-purple-400 focus:border-2 max-w-xl"></input><br />
                <input placeholder="Full name" className="text-[1.2rem] bg-purple-100/30 placeholder-purple-100/40 text-purple-100/70 px-[0.5rem] border-2 border-purple-200/10 rounded-md outline-none active:outline-none focus:outline-none focus:border-purple-400 focus:border-2 max-w-xl"></input>
            </div>
            
            </div>
            
            </div>
    }

}