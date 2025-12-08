// import Header from "@/components/homepageParent/header"
// import Section from "@/components/homepageParent/section"
// import SectionThree from "@/components/homepageParent/section-three"
// import SectionTwo from "@/components/homepageParent/section-two"
// import Line from "@/components/ui/line"
// import SectionFour from "@/components/homepageParent/section-four";

// export default function Page() {
//     return (
//         <div className="">
//             <Header />
//             <Section />
//             <div className="p-20 justify-center flex">
//                 <Line variant="horizontal" length={1200} color="" thickness={1} />
//             </div>
//             <SectionTwo />
//             <SectionThree />
//             <SectionFour />
//         </div>
//     )
// };
'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
    // const router = useRouter();

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         router.push('/home');
    //     }, 2000);
    //     return () => clearTimeout(timer);
    // }, [router]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen flex flex-col items-center justify-center"
        >
            {/* TEXT TENGAH */}
            <motion.h1 className="text-center mt-4 font-black text-2xl z-10">
                FANTASY.SHOP
            </motion.h1>

            {/* IMAGE POJOK KANAN BAWAH */}
            <Image
                src="/wolf.png"
                alt="Fantasy Shop Logo"
                width={200}
                height={200}
                className="absolute bottom-4 right-4 opacity-30 pointer-events-none select-none"
            />
        </motion.div>
    );
}
