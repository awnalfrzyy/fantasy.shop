'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/pages');
        }, 2000);
        return () => clearTimeout(timer);
    }, [router]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-screen flex flex-col items-center justify-center"
        >
            <motion.h1 className="text-center mt-4 font-black text-2xl z-10">
                FANTASY.SHOP
            </motion.h1>

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
