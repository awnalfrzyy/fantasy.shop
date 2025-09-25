import Footer from "./ui/footer"
import { Button } from "./ui/button"



export default function ButtomNav() {
    return (
        <div className="flex flex-col">
            {/* Banner */}
            <div className="w-full flex justify-center relative z-20">
                <section className="flex p-10 bg-black flex-col md:flex-row justify-between items-center 
      rounded-t-4xl rounded-b-4xl 
      w-[1240px] max-w-[1240px] h-[180px] gap-6">

                    <h1 className="text-white text-3xl font-black md:text-3xl md:w-[420px] text-center md:text-left m-0">
                        STAY UPTO DATE ABOUT OUR LATEST OFFERS
                    </h1>
                    <section className="flex flex-col gap-3 w-full max-w-md">
                        {/* Label */}
                        <div className=" bg-black -mb-5.5 ml-4 pl-1 rounded-sm z-20 w-11">
                            <label htmlFor="email" className="text-sm font-medium text-white">
                                Email
                            </label>
                        </div>

                        {/* Input */}
                        <input
                            id="email"
                            type="email"
                            placeholder="Masukkan email..."
                            className="pl-4 py-3 rounded-2xl border text-white/30 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-full"
                        />

                        {/* Button */}
                        <Button variant="default" className="px-10 py-7 rounded-4xl w-full">
                            Lorem, ipsum.
                        </Button>
                    </section>


                </section>
            </div>

            {/* Footer */}
            <div className="-mt-16 relative z-10">
                <Footer />
            </div>
        </div>
    )
};
