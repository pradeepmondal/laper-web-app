"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import laperIcon from '@/assets/laperIcon.svg'
import { Fade as Hamburger } from 'hamburger-react'
import ExpIntModal from '@/comps/ExpIntModal'
import Link from "next/link"
import { motion } from "framer-motion"
import { animLeft, animClose } from "@/Animations/motion"

export function Header() {
    const [showModal, setShowModal] = useState(false)
    const [isOpen, setOpen] = useState(false)

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
    const getScreenSize = () => {
        if (window.innerWidth > 768) {
            setOpen(true)
        }else{
            setOpen(false)
        }
    }


    useEffect(() => {
        getScreenSize()
        window.addEventListener("resize", getScreenSize)
    }, [window.innerWidth])





    return (
        
        <header className="container px-2  mx-auto  fixed z-10 inset-0 md:px-14 ">
            {showModal && <ExpIntModal setShowModal={setShowModal} />}


            <div className="flex py-8 md:py-16 items-center justify-between h-14 backdrop-blur ">
                {/* DIV FOR LAPER  */}
                <div className="flex text-white items-center justify-center">
                    <Image src={laperIcon} alt="Laper Icon" className="w-[2.5rem] h-[2.5rem]" />
                    <button className="flex items-center font-semibold uppercase text-[2rem] mb-2">Laper</button>
                </div>

                {/* DIV FOR Hamburger */}
                <div className=" md:hidden">
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={28} />
                </div>


                {/* Div for Navlinks */}

                {(<motion.div className="fixed mt-14 top-0 left-0 h-screen flex items-center justify-center flex-col w-screen space-y-4 pb-28 z-10 backdrop-blur 
                
                md:static md:backdrop-blur-0 md:flex-row md:text-white md:h-auto md:w-auto md:mt-0 md:space-y-0 md:pb-0 md:space-x-4 

                xl:space-x-8

                "

                    variants={isOpen ? animLeft : animClose}
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={'transition'}

                >


                    <Link href={`#home`} onClick={handleScroll}>
                        <motion.div
                            variants={animLeft}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{ delay: 0.1 }}
                        >
                            <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer text-lg" >Home
                            </button>
                            <div className="w-0 h-0.5 rounded-full bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                        </motion.div>
                    </Link>

                    <Link href={`#about`} onClick={handleScroll}>
                        <motion.div
                            variants={animLeft}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{ delay: 0.2 }}
                        >
                            <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer text-lg" >About
                            </button>
                            <div className="w-0 h-0.5 rounded-full bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                        </motion.div>
                    </Link>

                    <Link href={`#howItWorks`} onClick={handleScroll}>
                        <motion.div
                            variants={animLeft}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{ delay: 0.3 }}
                        >
                            <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer text-lg" >How It Works
                            </button>
                            <div className="w-0 h-0.5 rounded-full bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                        </motion.div>
                    </Link>

                    <Link href={`#support`} onClick={handleScroll}>
                        <motion.div
                            variants={animLeft}
                            initial={'hidden'}
                            whileInView={'visible'}
                            transition={{ delay: 0.4 }}
                        >
                            <button className="text-slate-100/50 text-[1.5rem] hover:text-white duration-200 peer text-lg" >Support
                            </button>
                            <div className="w-0 h-0.5 rounded-full bg-purple-500 mx-auto peer-hover:w-2/3 duration-200"></div>
                        </motion.div>
                    </Link>

                    <motion.div className="relative  sm:items-center sm:justify-center sm:inline-flex sm:group"
                        variants={animLeft}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="absolute transition-all duration-200 rounded-[2rem] sm:rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 "></div>
                        <div 
                            onClick={() => setShowModal(!showModal)}

                            title=""
                            className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition-all duration-200 cursor-pointer"
                        >
                            {" "}
                            Express Interest{" "}
                        </div>

                    </motion.div>
                </motion.div>)}


            </div>

        </header >

    )
}


