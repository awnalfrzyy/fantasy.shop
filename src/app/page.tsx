import Header from "@/components/header"
import Section from "@/components/section"
import SectionThree from "@/components/section-three"
import SectionTwo from "@/components/section-two"
import Line from "@/components/ui/line"
import SectionFour from '@/components/section-four';
import { Button } from "@/components/ui/button"
import Footer from "@/components/ui/footer"

export default function Page() {
  return (
    <div className="">
      <Header />
      <Section />
      <div className="p-20 justify-center flex">
        <Line variant="horizontal" length={1200} color="black" thickness={1} />
      </div>
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <div className="flex flex-col">
        {/* Banner */}
        <div className="w-full flex justify-center relative z-20">
          <section className="flex p-10 bg-black flex-col md:flex-row justify-between items-center 
      rounded-t-4xl rounded-b-4xl 
      w-[1240px] max-w-[1240px] h-[180px] gap-6">

            <h1 className="text-white text-3xl font-black md:text-3xl md:w-[420px] text-center md:text-left m-0">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </h1>

            <section className="flex flex-col gap-3">
              <Button variant="default" className="px-10 py-7 rounded-4xl">Lorem, ipsum.</Button>
              <Button variant="default" className="px-10 py-7 rounded-4xl">Lorem, ipsum.</Button>
            </section>
          </section>
        </div>

        {/* Footer */}
        <div className="-mt-16 relative z-10">
          <Footer />
        </div>
      </div>


    </div>
  )
};
