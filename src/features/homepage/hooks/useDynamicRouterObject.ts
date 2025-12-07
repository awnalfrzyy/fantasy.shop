"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

type ParamObject<T extends Record<string, string> = Record<string, string>> = T;

export function useDynamicRoute<T extends Record<string, string> = Record<string, string>>(paramNames: (keyof T)[] = []) {
    const router = useRouter();
    const pathname = usePathname();         
    const searchParams = useSearchParams();

    // Parsing dynamic segments menjadi object
    const params = useMemo(() => {
        if (!pathname || paramNames.length === 0) return {} as ParamObject<T>;
        const segments = pathname.split("/").filter(Boolean);
        const obj: any = {};
        paramNames.forEach((name, index) => {
            obj[name] = segments[index + 1] || ""; // +1 karena biasanya segment pertama adalah folder/page
        });
        return obj as ParamObject<T>;
    }, [pathname, paramNames]);

    const navigate = (path: string, replace = false) => {
        if (replace) router.replace(path);
        else router.push(path);
    };

    const getQueryParam = (key: string) => searchParams.get(key);

    return { pathname, params, searchParams, getQueryParam, navigate };
}
