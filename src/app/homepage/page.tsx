"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      {/* Ganti logo sesuai asset lo */}
      <h1 className="text-6xl text-white text-ce">FANTASY</h1>
    </div>
  );
}
