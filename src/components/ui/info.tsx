'use client'

import { X } from "lucide-react";
import { useState } from "react";

export default function Info() {
    const [open, setOpen] = useState(true);

    if (!open) return null; // kalau udah di-close, jangan render

    return (
        <div className="flex flex-row justify-center gap-10 items-center px-4 h-10 w-full bg-black">
            <p className="font-medium text-[12px] text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ad?
            </p>
            <X size={18} color="#ffffff" onClick={() => setOpen(false)} />

        </div>
    );
}
