import Footer from "./footer"
import { Button } from "./ui/button"



export default function ButtomNav() {
    return (
        <div className="flex flex-col justify-center items-center">
            {/* Banner */}
            <div className="px-20">
                <div className=" items-center flex justify-center relative z-20">
                    <section className="flex p-10 bg-black flex-col md:flex-row justify-between items-center 
      rounded-t-4xl rounded-b-4xl 
      w-[1240px] max-w-[1240px] h-[180px] gap-6">

                        <h1 className="text-white text-3xl md:text-3xl md:w-[420px] text-center md:text-left m-0"
                            style={{ fontFamily: "Integral CF, sans-serif", fontWeight: "900" }}>
                            STAY UPDATED ABOUT OUR LATEST OFFERS
                        </h1>
                        <section className="flex flex-col gap-3 w-full max-w-md">
                            <div className=" bg-black -mb-5.5 ml-4 pl-1 rounded-sm z-20 w-11">
                                <label htmlFor="email" className="text-sm font-medium text-white">
                                    Email
                                </label>
                            </div>

                            <input
                                id="email"
                                type="email"
                                placeholder="Masukkan email..."
                                className="pl-4 py-3 rounded-full border text-white/30 border-gray-300 focus:outline-none focus:ring-2 focus:ring-black w-full"
                            />

                            {/* Button */}
                            <Button variant="secondary" size="lg" className="rounded-full">
                                Lorem, ipsum.
                            </Button>
                        </section>


                    </section>
                </div>
            </div>

            {/* Footer */}
            <div className="-mt-16 relative z-10">
                <Footer />
            </div>
        </div>
    )
};
