'use client'

import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Info() {
    const [open, setOpen] = useState(true);

    if (!open) return null;

    return (
        <div className="flex flex-row justify-between gap-10 items-center px-5 h-10 w-full bg-black ">
            <div className="flex-grow flex justify-center">
                <p className="font-medium text-sm text-white text-center">
                    this is just a demo website, {""}
                    <Link href="/more-info" className="text-blue-500">see more</Link>
                </p>
            </div>
            <X size={18} color="#ffffff" onClick={() => setOpen(false)} />
        </div>
    );
}
