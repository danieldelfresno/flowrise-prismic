import React from 'react'
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import Link from 'next/link';


export default function Hero({ showHeroReduced }) {
    return (
        <>
            {showHeroReduced && (
                <div className="hero">
                    <div className="container flex flex-col py-8 xl:py-0 px-6 mx-auto md:h-128 md:flex-row md:items-center md:space-x-6">
                        <div className="w-full px-4 py-20 xl:py-32">
                            <p className="text-2xl text-center tracking-wide text-white lg:text-4xl">Our Success Stories:<br /> Transformations Brought to Life</p>
                        </div>
                    </div>
                </div>
            )}
            {!showHeroReduced && (
                <div className="hero">
                    <div className="container flex flex-col py-8 xl:py-0 px-6 mx-auto md:h-128 md:flex-row md:items-center md:space-x-6">
                        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
                            <div className="max-w-lg md:mx-4 md:order-2">
                                <h1 className="text-4xl text-center md:text-left tracking-wide text-white lg:text-5xl">Need a digital<br /> game-changer? <br /> Call us!</h1>
                                <p className="my-10 text-white">We combine technology with strategic insight to transform your operations. Count on us for Tailored Software, Web/Mobile apps, and effective IT Consulting Services. Bringing clarity, simplicity and results-driven solutions.</p>
                                <div className="mt-6 text-center md:text-left">
                                    <a href="#" className="inline-block px-8 py-3 font-semibold text-center text-black transition-colors duration-200 transform bg-[#58D0D1] rounded-full hover:bg-blue-400">Schedule a conversation</a>
                                </div>
                            </div>
                        </div>
                        <div className="items-center hidden md:flex justify-center w-full md:w-1/2">
                            <img className="object-cover w-full h-full max-w-2xl rounded-md -mr-12" src="../../../Hero_img_right.png" alt="Digital" />
                        </div>
                    </div>
                    <div className="container mx-auto pb-8">
                        <div className="flex justify-center flex-wrap gap-8">
                            <Link href='https://www.instagram.com' target="_blank">
                                <PiInstagramLogoFill size={38} color="white" />
                            </Link>
                            <Link href='https://www.facebook.com' target="_blank">
                                <FaSquareFacebook size={35} color="white" />
                            </Link>
                            <Link href='https://www.linkedin.com' target="_blank">
                                <FaLinkedin size={35} color="white" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
