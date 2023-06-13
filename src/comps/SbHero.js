"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import sbHeroSvg from '@/assets/sbHero.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export function SubHero() {

    useEffect(()=> {
        AOS.init();

    }, [])

    return (
        <section className="py-8 bg-black sm:py-16 lg:py-20 xl:py-12 z-10">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-4">
                    

                    <div className="relative" data-aos = "fade-in" data-aos-delay="800" data-aos-duration="2700">
                        <Image src={sbHeroSvg} alt="Sub Hero Svg" />
                    </div>

                    <div data-aos = "fade-in" data-aos-delay="400" data-aos-duration="1000" >
                        <h2 className="text-[3rem] font-normal text-white sm:text-2xl lg:text-3xl xl:text-5xl">
                        Empowering Coders through Expert Assistance.
                        </h2>
                        <p className="mt-8 text-xl font-normal text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                Whether you're a beginner or an experienced coder,
                            </span>{" "}
                            Laper is the perfect solution for anyone who needs help with their coding problems.
                        </p>
                        <p className="mt-8 text-lg font-normal text-gray-400">
                        So why wait? Download Laper today and start getting the answers you need to take your coding skills to the next level.
                        </p>
                        <button className="text-[1rem] text-green-950 mt-8 bg-green-500 rounded-2xl p-2">Download on Play Store </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

