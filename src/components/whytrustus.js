export default function Footer({ showCtaSection }) {
    return (
        <>
            <div className="whoweare bg-[#EBF4FF] pt-20 md:pt-20">
                <div className="container mx-auto pt-10 xl:pt-20 xl:pb-10 lg:px-16">
                    <div className="container flex flex-col py-8 xl:py-0 px-6 lg:px-12 mx-auto md:h-128 md:flex-row ">
                        <div className="flex flex-col w-full md:flex-row md:w-7/12">
                            <div className="max-w-xl md:mx-4 md:order-2">
                                <p className="text-xl text-center md:text-left tracking-wide text-[#0C2936] lg:text-2xl">Celebrating Success:<br /> We're Here to Guide and Innovate</p>
                                <p className="my-6 text-[#808C9F] font-light text-center md:text-left md:max-w-md">No-obligation calls, valued connections. Your success equals ours: quality work, genuine results, while aspiring to include you in our network.</p>
                                <div className="hidden md:flex mt-6 text-center md:text-left">
                                    <a href="#" className="inline-block px-4 md:px-8 py-3 font-semibold text-center text-black transition-colors duration-200 transform bg-[#58D0D1] rounded-full hover:bg-blue-400">Contact our specialists</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center w-full md:w-5/12">
                            <p className="text-center uppercase text-left text-[#0C2936]">We rank at the top on multiple platforms</p>
                            <div className="flex justify-center w-full pt-4 pb-4 md:pb-6">
                                <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                                    <img width="70" src="../../../upwork.png" alt="" />
                                </div>
                                <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                                    <img width="70" src="../../../freelancer.png" alt="" />
                                </div>
                                <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                                    <img width="70" src="../../../upwork.png" alt="" />
                                </div>
                            </div>
                            <p className="text-center uppercase text-left text-[#0C2936]">More than 200 happy customers from different industries</p>
                            <div className="flex justify-center w-full pt-4 md:pb-6">
                                <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                                    <img width="70" src="../../../government-office.svg" alt="" />
                                    <p className="text-xs text-center font-semibold text-[#1D6687] mt-3">E-Government</p>
                                </div>
                                <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                                    <img width="70" src="../../../corporate-world.svg" alt="" />
                                    <p className="text-xs text-center font-semibold text-[#1D6687] mt-3">Corporate</p>
                                </div>
                                <div className="flex flex-col w-1/2 sm:w-1/3 items-center py-4">
                                    <img width="70" src="../../../startup.svg" alt="" />
                                    <p className="text-xs text-center font-semibold text-[#1D6687] mt-3">Startups</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:hidden mt-6 text-center md:text-left">
                            <a href="#" className="inline-block px-4 md:px-8 py-3 font-semibold text-center text-black transition-colors duration-200 transform bg-[#58D0D1] rounded-full hover:bg-blue-400">Contact our specialists</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}