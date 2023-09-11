export default function WhoWeAre() {
    return (
        <>
            <div className="whoweare bg-[#F7F7FA] px-6">
                <div className="container mx-auto pt-6 lg:px-20">
                    <p className="text-3xl font-semibold text-center pt-10 text-[#0C2936]">Showcasing Excellence:<br /> Our Team, Our Expertise, Your Success</p>
                    <p className="text-lg text-center pt-6 text-[#808C9F]">Our solutions are designed to give you an edge and drive your business to the next chapter.</p>
                    <div className="flex flex-wrap md:flex-nowrap justify-center w-full py-10 pb-40 sm:pb-32">
                        <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                            <img width="70" src="../../../satisfy.svg" alt="" />
                            <p className="text-center text-[#505D73] mt-3">Talented<br /> Team</p>
                        </div>
                        <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                            <img width="70" src="../../../experiencia.svg" alt="" />
                            <p className="text-center text-[#505D73] mt-3">Years of<br /> Experience</p>
                        </div>
                        <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                            <img width="70" src="../../../atendimento.svg" alt="" />
                            <p className="text-center text-[#505D73] mt-3">Rapid<br /> Response</p>
                        </div>
                        <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                            <img width="70" src="../../../computer-network.svg" alt="" />
                            <p className="text-center text-[#505D73] mt-3">Automated<br /> Procedures</p>
                        </div>
                        <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                            <img width="70" src="../../../it-services.svg" alt="" />
                            <p className="text-center text-[#505D73] mt-3">Multifaceted<br /> Services</p>
                        </div>
                        <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                            <img width="70" src="../../../success.svg" alt="" />
                            <p className="text-center text-[#505D73] mt-3">Garanteed<br /> Success</p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 lg:px-14 inset-x-0 absolute -translate-y-2/4">
                    <div className="flex flex-col lg:flex-row items-center w-full bg-[#032534] xl:px-20 py-4 lg:py-14 rounded-3xl">
                        <div className="lg:w-7/12 px-8 md:pl-14">
                            <p className="text-white text-center md:text-left text-lg md:text-xl">Discover the Difference: Start a conversation<br /> with our experts! No-obligation!</p>
                        </div>
                        <div className="lg:w-5/12 pt-4 lg:pt-0 px-8 text-center">
                            <a href="#" className="inline-block px-8 py-3 font-semibold text-center text-black transition-colors duration-200 transform bg-[#58D0D1] rounded-full hover:bg-blue-400">Schedule a conversation</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}