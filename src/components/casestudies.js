import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import data from '../../json/data'

export default function caseItemStudies() {
    const caseItems = data.caseItems;
    return (
        <div className="bg-[#031822] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-full lg:mx-0">
                    <h2 className="text-3xl text-center tracking-tight text-white pb-6 sm:text-4xl">Our Success Stories:<br />
                        Transformations Brought to Life</h2>
                    <p className="mt-2 text-lg font-light text-center leading-8 text-white">
                        Explore how we transform challenges into opportunities, using innovative software solutions. These<br /> stories showcaseItem the tangible impacts we've made, and how we bring our clients' visions to life.                    </p>
                </div>
                <div className="mx-auto max-w-xl grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseItems.slice(0, 3).map((caseItem) => (

                        <article key={caseItem.id} className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl overflow-hidden">
                            <div className="flex">
                                <img src={caseItem.mainimg} alt="" />
                            </div>
                            <div className="relative w-full flex flex-row justify-end px-5 -mt-6">
                                <img src={caseItem.author.imageUrl} alt="" className="h-12 w-12 rounded-full bg-gray-50 shadow-xl" />
                            </div>
                            <div className="px-5 pb-4">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a
                                        href={caseItem.category.href}
                                        className="relative z-10 rounded-md bg-gray-500 px-3 py-1.5 font-medium text-white hover:bg-gray-800"
                                    >
                                        {caseItem.category.title}
                                    </a>
                                    <time dateTime={caseItem.datetime} className="text-gray-500">
                                        {caseItem.date}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-6 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 lg:h-12">
                                        <a href={caseItem.href}>
                                            <span className="absolute inset-0" />
                                            {caseItem.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{caseItem.description}</p>
                                </div>
                                <div className="mt-4">
                                    <Link className="flex items-center gap-x-2" href="https://www.google.com">
                                        <p className="text-[#1D6687] font-semibold">Read More</p>
                                        <FaArrowRight className="text-sky-700" />
                                    </Link>
                                </div>
                            </div>
                        </article >

                    ))
                    }
                </div >
                <div className="mt-14 text-center">
                    <a href="#" className="inline-block px-14 py-3 font-semibold text-center text-white transition-colors duration-200 transform bg-none border-white border-2 rounded-full hover:bg-blue-400">See more articles</a>
                </div>
            </div >
        </div >
    )
}
