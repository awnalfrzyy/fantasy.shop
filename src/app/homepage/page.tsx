import Header from "@/components/homepageParent/header"
import Section from "@/components/homepageParent/section"
import SectionThree from "@/components/homepageParent/section-three"
import SectionTwo from "@/components/homepageParent/section-two"
import Line from "@/components/ui/line"
import SectionFour from "@/components/homepageParent/section-four";

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
