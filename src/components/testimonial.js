import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import BackLink from "./BackLink"
import data from '../../json/data'

export default function Portfolio() {
    const testimonials = data.testimonials;
    const projects = data.projects
    return (
        <div className="bg-[#F7F7FA] pt-6 pb-12 sm:pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <BackLink />
                <div className="mx-auto max-full pt-10 lg:mx-0">
                    <p className="text-3xl text-center tracking-tight text-[#0C2936] sm:text-4xl">Explore the Testimonials of Our Valued Customers</p>
                </div>
                <div className="mx-auto max-full pt-10 lg:mx-0 text-center">
                    <p className="text-lg font-light text-center tracking-tight text-[#5F6D7E] max-w-4xl mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                </div>

                <div className="mx-auto w-full pt-10 sm:pt-16 lg:mx-0">
                    {testimonials.slice(0, 1).map((testimonial) => (


                        <article key={testimonial.id} className="flex flex-col-reverse lg:flex-row items-start justify-between bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="w-full lg:w-1/2 px-6 md:px-16 py-12">
                                <div className="group relative">
                                    <h3 className="text-lg text-gray-900 group-hover:text-gray-600">
                                        {testimonial.projecttitle}
                                    </h3>
                                </div>
                                <div className="flex py-4">
                                    <p className="text-lg font-bold">{testimonial.title}</p>
                                </div>
                                <div className="flex pb-4">
                                    <p className="font-light"><i>{testimonial.description}</i></p>
                                </div>
                                <div className="flex py-4">
                                    <p>- {testimonial.author.role}</p>
                                </div>
                                <div className="mt-4">
                                    <Link className="flex items-center gap-x-2" href="https://www.google.com">
                                        <p className="text-[#1D6687] font-semibold">Link</p>
                                        <FaArrowRight className="text-sky-700" />
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 py-12">
                                <img className="mx-auto" src={testimonial.projetimage} alt="" />
                            </div>
                        </article>


                    ))}
                </div>

                <div className="mx-auto max-w-xl grid grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {projects.map((project) => (


                        <article key={project.id} className="flex max-w-xl flex-col items-start justify-between bg-white rounded-xl overflow-hidden shadow-xl">
                            <div className="flex items-center px-5 py-6 px-8 bg-white lg:h-80">
                                <img src={project.projectimg} alt="" />
                            </div>
                            <div className="w-full px-8 pb-8 border-t border-gray-100 bg-gray-50">
                                <div className="group relative">
                                    <h3 className="mt-6 text-lg font-semibold text-gray-900 group-hover:text-gray-600 pb-4">
                                        {project.projecttitle}
                                    </h3>
                                    <p className="text-md font-light text-gray-600">{project.projectcategory}</p>
                                </div>
                                <div className="mt-4">
                                    <Link className="flex items-center gap-x-2" href="https://www.google.com">
                                        <p className="text-[#1D6687] font-semibold">Learn More</p>
                                        <FaArrowRight className="text-sky-700" />
                                    </Link>
                                </div>
                            </div>
                        </article>


                    ))}
                </div>
            </div>
        </div >
    )
}
