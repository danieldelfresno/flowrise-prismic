import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
//useSWR allows the use of SWR inside function components
import data from '../../json/data'

export default function caseItemStudies() {
    const featureditems = data.featureditems;
    const caseItems = data.caseItems;

    return (
        <div className="bg-[#F7F7FA] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto w-full pb-14">
                    {featureditems.map((featureditem) => (
                        <article key={featureditem.id} className="flex max-w-xl lg:max-w-full mx-auto flex-col lg:flex-row items-start justify-between bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="flex lg:w-7/12 xl:w-1/2">
                                <img src={featureditem.mainimg} alt="" />
                            </div>
                            <div className="flex lg:w-5/12 xl:w-1/2 flex-col pt-8 px-4 lg:px-8 pb-8">
                                <div className="lg:hidden relative w-full flex flex-row justify-end px-5 -mt-14">
                                    <img src={featureditem.author.imageUrl} alt="" className="h-12 w-12 rounded-full bg-gray-50 shadow-xl" />
                                </div>
                                <div className="flex items-center gap-x-4 text-xs">
                                    <a
                                        href={featureditem.category.href}
                                        className="relative z-10 rounded-md bg-gray-500 px-3 py-1.5 font-medium text-white hover:bg-gray-800"
                                    >
                                        {featureditem.category.title}
                                    </a>
                                    <time dateTime={featureditem.datetime} className="text-gray-500">
                                        {featureditem.date}
                                    </time>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-8 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={featureditem.href}>
                                            <span className="absolute inset-0" />
                                            {featureditem.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{featureditem.description}</p>
                                </div>
                                <div className="hidden relative w-full lg:flex flex-row justify-start items-center gap-x-4 pt-10 pb-2">
                                    <img src={featureditem.author.imageUrl} alt="" className="h-12 w-12 rounded-full bg-gray-50 shadow-xl" />
                                    <div className="flex flex-col">
                                        <p className="text-xs">{featureditem.author.name}</p>
                                        <p className="text-xs">{featureditem.author.role}</p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <Link className="flex items-center gap-x-2" href={`./casestudies/${featureditem.slug}`}>
                                        <p className="text-[#1D6687] font-semibold">Read More</p>
                                        <FaArrowRight className="text-sky-700" />
                                    </Link>
                                </div>
                            </div>
                        </article >
                    ))}
                </div >
                <div className="mx-auto max-w-xl grid grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseItems.map((caseItem) => (
                        <article key={caseItem.id} className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="flex flex-col">
                                <img src={caseItem.mainimg} alt="" />
                                <div className="relative w-full flex flex-row justify-end px-5 -mt-6">
                                    <img src={caseItem.author.imageUrl} alt="" className="h-12 w-12 rounded-full bg-gray-50 shadow-xl" />
                                </div>
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
                                <div className="group relative h-44">
                                    <h3 className="mt-10 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                        <a href={`./casestudies/${caseItem.slug}`}>
                                            <span className="line-clamp-2 absolute inset-0" />
                                            {caseItem.title}
                                        </a>
                                    </h3>
                                    <p className="mt-2 line-clamp-4 text-sm leading-6 text-gray-600">{caseItem.description}</p>
                                    <div className="mt-4">
                                        <Link className="flex items-center gap-x-2" href={`./casestudies/${caseItem.slug}`}>
                                            <p className="text-[#1D6687] font-semibold">Read More</p>
                                            <FaArrowRight className="text-sky-700" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </article >
                    ))
                    }
                </div >
            </div >
        </div >
    )
}
