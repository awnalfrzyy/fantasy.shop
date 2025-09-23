import Image from "next/image"


export default function SectionThree() {
    return (
        <>
            <div className="bg-white h-screen flex justify-center mt-20">
                <div className="bg-[#F0F0F0] h-[766px] w-[1239px] rounded-4xl p-10">
                    <h1 className="text-4xl font-black text-center mb-10">
                        BROWSE BY DRESS STYLE
                    </h1>

                    <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]">
                        {/* A kecil kiri atas */}
                        <div className="bg-red-400 col-span-1 row-span-1 rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-11.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                        </div>

                        {/* B panjang kanan atas */}
                        <div className="bg-blue-400 col-span-2 row-span-1 rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-13.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                        </div>

                        {/* C panjang kiri bawah */}
                        <div className="bg-green-400 col-span-2 row-span-1 rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-12.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                        </div>

                        {/* D kecil kanan bawah */}
                        <div className="bg-yellow-400 col-span-1 row-span-1 rounded-3xl overflow-hidden">
                            <Image src={"/asset/image-14.png"} alt="herpo" className="object-cover w-full h-full "
                                width={600} height={600} />
                        </div>
                    </div>
                </div>



            </div>
            <div className="h-20 w-20">

            </div>
        </>
    )
};
