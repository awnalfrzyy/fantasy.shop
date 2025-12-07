"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export function useDynamicRoute() {
    const router = useRouter();
    const pathname = usePathname();         // ambil path saat ini
    const searchParams = useSearchParams(); // ambil query string

    // Dynamic segments dari path
    const params = useMemo(() => {
        if (!pathname) return [];
        return pathname.split("/").filter(Boolean);
    }, [pathname]);

    // Helper untuk navigasi
    const navigate = (path: string, replace = false) => {
        if (replace) router.replace(path);
        else router.push(path);
    };

    // Helper untuk query param
    const getQueryParam = (key: string) => searchParams.get(key);

    return {
        pathname,
        params,
        searchParams,
        getQueryParam,
        navigate,
    };
}
