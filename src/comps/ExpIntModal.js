"use client"

import React, { useState } from "react"

export default function ExpIntModal({show}) {

    if(!show){
        return null
    }
    else{
        return <div className="fixed backdrop-blur-sm z-10 w-screen h-[100vh] ">
            <div className=" fixed drop-shadow-[40 rem] z-20 my-[7rem] ml-[5em] mr-[5em]  w-4/5 h-[70vh] 2xl:max-w-[69%] border-purple-900 border-16 bg-purple-800/[98%]  rounded-2xl shadow-lg shadow-purple-400/60 ">
                <h1 className="flex mt-24 max-w-fit justify-center mx-auto text-slate-100/60 text-[3rem]">Express Interest</h1>

                <div className="flex flex-row mt-[3rem] justify-center space-x-8 ">
                    <div className=" basis-1/2 flex-col text-purple-200 text-2xl max-w-fit   ">
                        <label className="flex  text-[1.2rem] text-purple-100/70    ">Name  </label> <br />
                        <label className=" flex  text-[1.2rem] text-purple-100/70 ">Email  </label><br />
                        <label className="flex  text-[1.2rem] text-purple-100/70  ">How you came to know about us?  </label>
                    </div>

                    <div className="basis-1/2 flex-col text-purple-200  max-w-fit space-y-2">
                
                        <input placeholder="Full name" className="flex text-[1.2rem] bg-purple-100/30 placeholder-purple-100/40 text-purple-100/70 px-[0.5rem] border-2 border-purple-200/10 rounded-md outline-none active:outline-none focus:outline-none focus:border-purple-400 focus:border-2 max-w-xl"></input><br />
                        <input placeholder="Your email id" className="flex text-[1.2rem] bg-purple-100/30 placeholder-purple-100/40 text-purple-100/70 px-[0.5rem] border-2 border-purple-200/10 rounded-md outline-none active:outline-none focus:outline-none focus:border-purple-400 focus:border-2 max-w-xl"></input><br />
                        <input placeholder="Eg: Social Media, Friends, etc." className="flex text-[1.2rem] bg-purple-100/30 placeholder-purple-100/40 text-purple-100/70 px-[0.5rem] border-2 border-purple-200/10 rounded-md outline-none active:outline-none focus:outline-none focus:border-purple-400 focus:border-2 max-w-xl"></input>
                    </div>
                </div>

                <button className="flex max-w-fit mx-auto items-center justify-center px-6 py-1 font-normal text-white/80 bg-purple-950 border border-transparent rounded-[0.5rem] mt-[2.4rem] text-[1.1rem]"
                        >
                            {" "}
                            Submit{" "}
                </button>
            
            
            </div>
            
            </div>
    }

}