"use client"

import React, { useState } from "react"

export default function ExpIntModal({show}) {

    if(!show){
        return null
    }
    else{
        return <div className="fixed drop-shadow-lg z-20 my-[7rem] ml-[5rem] mr-[5rem] backdrop-blur-lg  w-4/5 h-[70vh] border-purple-700 border-4 ">
            <h1 className="text-slate-100 text-2xl mx-auto">Modal Loaded Successfully</h1>
            
            </div>
    }

}