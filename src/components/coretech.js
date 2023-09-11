export default function CoreTech() {
    return (
        <>
            <div className="coretech md:px-6 pt-10 bg-[#053D57]">
                <div className="container mx-auto pb-6">
                    <h1 className="text-white text-center text-2xl pb-8">Our Core Technologies</h1>
                    <div className="flex flex-wrap md:flex-nowrap justify-center w-full px-4 md:px-20 lg:h-40 ">
                        <div className="flex flex-col w-1/3 items-center py-4 justify-end">
                            <img className="bg-white rounded-full p-1 border-4 border-[#053D57]" width="85" src="../../../node-js.svg" alt="" />
                        </div>
                        <div className="flex flex-col w-1/3 items-center py-4">
                            <img className="bg-white rounded-full p-1 border-4 border-[#053D57]" width="85" src="../../../javascript.svg" alt="" />
                        </div>
                        <div className="flex flex-col w-1/3 items-center py-4 justify-end">
                            <img className="bg-white rounded-full p-1 border-4 border-[#053D57]" width="85" src="../../../java.svg" alt="" />
                        </div>
                        <div className="flex flex-col w-1/3 items-center py-4">
                            <img className="bg-white rounded-full p-1 border-4 border-[#053D57]" width="85" src="../../../react.svg" alt="" />
                        </div>
                        <div className="flex flex-col w-1/3 items-center py-4 justify-end">
                            <img className="bg-white rounded-full p-1 border-4 border-[#053D57]" width="85" src="../../../laravel.png" alt="" />
                        </div>
                        <div className="flex flex-col w-1/3 items-center py-4">
                            <img className="bg-white rounded-full p-1 border-4 border-[#053D57]" width="85" src="../../../symfony.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}