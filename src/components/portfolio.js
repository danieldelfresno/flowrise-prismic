import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import data from '../../json/data'

export default function Portfolio() {
    const testimonials = data.testimonials

    return (
        <div className="bg-[#EBF4FF] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-full lg:mx-0">
                    <p className="text-3xl text-center tracking-tight text-[#0C2936] sm:text-4xl">Explore the Testimonials of Our Valued Customers</p>
                </div>
                <div className="mx-auto max-w-xl grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {testimonials.map((testimonial) => (

                        <article key={testimonial.id} className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="px-5 py-6 px-8 bg-[#F7F7FA] lg:h-80">
                                <div className="flex py-4">
                                    <p className="text-lg font-bold">{testimonial.title}</p>
                                </div>
                                <div className="flex pb-4">
                                    <p className="font-light"><i>"{testimonial.description}"</i></p>
                                </div>
                                <div className="flex py-4">
                                    <p>- {testimonial.author.role}</p>
                                </div>
                            </div>
                            <div className="px-8 pb-8">
                                <div className="group relative">
                                    <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-gray-600 pb-4">
                                        {testimonial.projecttitle}
                                    </h3>
                                    <p className="text-md font-light text-gray-600">{testimonial.projectcategory}</p>
                                </div>
                                <div className="mt-4">
                                    <Link className="flex items-center gap-x-2" href="https://www.google.com">
                                        <p className="text-[#1D6687] font-semibold">Read More</p>
                                        <FaArrowRight className="text-sky-700" />
                                    </Link>
                                </div>
                            </div>
                        </article>


                    ))}
                </div>
                <div className="mt-14 text-center">
                    <a href="#" className="inline-block px-14 py-3 font-semibold text-center text-[#1D6687] transition-colors duration-200 transform bg-none border-[#1D6687] border-2 rounded-full hover:bg-blue-400">See more articles</a>
                </div>
            </div>
        </div >
    )
}
