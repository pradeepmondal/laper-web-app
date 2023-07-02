"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";
import { animLeft, animRight } from "@/Animations/motion";

import sbHeroSvg from '@/assets/sbHero.svg'

export function SubHero() {

    useEffect(() => {
        AOS.init();

    }, [])

    return (
        <section id="about" className="py-8 bg-black sm:py-16 sm:pt-[17rem] lg:py-20 xl:py-12 h-[100vh] z-10 bg-[url('/about-edit.svg')] bg-center bg-cover bg-no-repeat">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-4 sm:pt-[10rem]">


                    <motion.div className="relative"
                        variants={animLeft}
                        initial={'hidden'}
                        whileInView={'visible'}
                        transition =  { {delay: 1} }
                        viewport={{once:true}}

                    >
                    <Image src={sbHeroSvg} alt="Sub Hero Svg" />
                </motion.div>

                <div  >
                    <motion.h2 className="text-[3rem] font-normal text-white sm:text-2xl lg:text-3xl xl:text-5xl"
                        variants={animRight}
                        initial={'hidden'}
                        whileInView={'visible'} 
                        transition={{ delay: 0.7 }}
                        viewport={{once:true}}


                    >
                        Empowering Coders through Expert Assistance.
                    </motion.h2>
                    <motion.p className="mt-8 text-xl font-normal text-white"
                        variants={animRight}
                        initial={'hidden'}
                        whileInView={'visible'} 
                        transition={{ delay: 0.9 }}
                        viewport={{once:true}}

                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                            Whether you're a beginner or an experienced coder,
                        </span>{" "}
                        Laper is the perfect solution for anyone who needs help with their coding problems.
                    </motion.p>
                    <motion.p className="mt-8 text-lg font-normal text-gray-400"
                     variants={animRight}
                     initial={'hidden'}
                     whileInView={'visible'} 
                     transition={{ delay: 0.9 }}
                     viewport={{once:true}}
                    
                    >
                        So why wait? Download Laper today and start getting the answers you need to take your coding skills to the next level.
                    </motion.p>
                    <motion.button className="text-[1.2rem] text-white font-semibold mt-8 bg-green-500 rounded-2xl py-4 px-6"
                    variants={animRight}
                    initial={'hidden'}
                    whileInView={'visible'} 
                    transition={{ delay: 1 }}
                    viewport={{once:true}}

                    >Download on Play Store </motion.button>
                </div>
            </div>
        </div>
        </section >
    )
}

