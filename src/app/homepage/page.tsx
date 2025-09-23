import Header from "@/components/header"
import Section from "@/components/section"
import SectionThree from "@/components/section-three"
import SectionTwo from "@/components/section-two"
import Line from "@/components/ui/line"
import SectionFour from "@/components/section-four";

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
        </div>
    )
};
