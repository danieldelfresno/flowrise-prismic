import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6"
import { PiInstagramLogoFill } from "react-icons/pi"
import Link from "next/link"

export default function Footer({ showCtaSection }) {
    return (
        <div className="footer">
            {showCtaSection && (
                <div className="container mx-auto pt-4 md:pt-10 lg:pt-20 px-4  mb-4 md:mb-10 lg:mb-20">
                    <div className="flex flex-col items-center w-full md:flex-row bg-black bg-opacity-80 py-10 rounded-3xl">
                        <div className="mx-8 sm:px-12 xl:px-56 md:order-2">
                            <h1 className="text-2xl text-center tracking-wide text-white lg:text-4xl">Ready to Transform Your Idea into Reality?</h1>
                            <p className="my-10 text-white text-center">Got a project idea? Let's shape it together. Your vision meets our expertise in web, mobile, DevOps, and IT solutions. This isn't just a discussion - it's the start of your project's journey to success.</p>
                            <div className="mt-6 text-center">
                                <a href="#" className="inline-block px-8 py-3 font-semibold text-center text-black transition-colors duration-200 transform bg-[#58D0D1] rounded-full hover:bg-blue-400">Schedule a conversation</a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="footer-bottom bg-black bg-opacity-80">
                <div className="container mx-auto py-6">
                    <nav className="mx-auto flex flex-col sm:flex-row items-center justify-between p-6 lg:px-8" aria-label="Global">
                        <div className="flex w-full justify-center md:justify-start md:w-1/3">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img className="h-20 w-auto" src="../../../RWI-logo-bright.png" alt="" />
                            </a>
                        </div>
                        <div className="flex w-full my-10 md:my-none justify-center md:w-1/3 text-right justify-center flex-wrap gap-8">
                            <Link href='https://www.instagram.com' target="_blank">
                                <PiInstagramLogoFill size={37} color="white" />
                            </Link>
                            <Link href='https://www.facebook.com' target="_blank">
                                <FaSquareFacebook size={35} color="white" />
                            </Link>
                            <Link href='https://www.linkedin.com' target="_blank">
                                <FaLinkedin size={35} color="white" />
                            </Link>
                        </div>
                        <div className="flex w-full md:w-1/3 text-center sm:text-right flex-col lg:gap-x-12">
                            <a href="#" className="text-md text-sm text-white">
                                <p>HOME</p>
                            </a>
                            <a href="#" className="text-md text-sm text-white">
                                OUR CUSTOMERS
                            </a>
                            <a href="#" className="text-md text-sm text-white">
                                CASE STUDIES
                            </a>
                            <a href="#" className="text-md text-sm text-white">
                                CONTACT US
                            </a>
                        </div>
                    </nav>
                    <p className="text-white text-md text-center px-10">@RWINTERACTIVE COPYRIGHT 2023 | ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </div >
    )
}
