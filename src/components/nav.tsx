"use client";

import { Button } from "./ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./ui/navigation-menu";
import Link from "next/link";
import { ShoppingCart, CircleUser, Search, Menu, X } from "lucide-react";
import { Input } from "./ui/input";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const menuItems = [
    {
        title: "Shop",
        hasDropdown: true,
        categories: [
            { name: "Men's Clothing", href: "/shop/mens" },
            { name: "Women's Clothing", href: "/shop/womens" },
            { name: "Accessories", href: "/shop/accessories" },
            { name: "Footwear", href: "/shop/footwear" },
            { name: "Bags", href: "/shop/bags" },
            { name: "Jewelry", href: "/shop/jewelry" },
        ],
    },
    {
        title: "On Sale",
        hasDropdown: false,
        href: "/sale",
    },
    {
        title: "New Arrivals",
        hasDropdown: false,
        href: "/new-arrivals",
    },
    {
        title: "Brands",
        hasDropdown: true,
        categories: [
            { name: "Nike", href: "/brands/nike" },
            { name: "Adidas", href: "/brands/adidas" },
            { name: "Zara", href: "/brands/zara" },
            { name: "H&M", href: "/brands/hm" },
            { name: "Uniqlo", href: "/brands/uniqlo" },
            { name: "View All Brands", href: "/brands" },
        ],
    },
];

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between py-4 px-6 lg:px-20 bg-white shadow-md ">
            <Link href="/" className="text-xl lg:text-2xl font-bold">
                FANTASY.SHOP
            </Link>

            <div className="hidden lg:flex items-center gap-2">
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map((menu) => (
                            <NavigationMenuItem key={menu.title}>
                                {menu.hasDropdown ? (
                                    <>
                                        <NavigationMenuTrigger className="flex items-center gap-1 text-sm font-medium">
                                            {menu.title}
                                            {/* <ChevronDown size={14} /> */}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <div className="w-64 p-4">
                                                <div className="grid gap-2">
                                                    {menu.categories?.map((category) => (
                                                        <NavigationMenuLink key={category.name} asChild>
                                                            <Link
                                                                href={category.href}
                                                                className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-100 transition-colors"
                                                            >
                                                                {category.name}
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    ))}
                                                </div>
                                            </div>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <Link href={menu.href || "#"} className="flex items-center gap-1 px-4 py-2 text-sm font-medium hover:bg-slate-100 rounded-md transition-colors">
                                        {menu.title}
                                    </Link>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:block relative w-64 xl:w-96">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <Input
                    placeholder="Cari produk..."
                    className="pl-10 pr-4 py-2 text-sm rounded-3xl"
                />
            </div>

            <div className="hidden lg:flex items-center gap-1">
                <Button variant="ghost" size="default" asChild>
                    <Link href="/cart" className="flex items-center gap-2">
                        <ShoppingCart size={20} />
                    </Link>
                </Button>
                <Button variant="ghost" size="default" asChild>
                    <Link href="auth/login" className="flex items-center gap-2">
                        <CircleUser size={20} />
                    </Link>
                </Button>
            </div>

            <div className="flex lg:hidden items-center gap-3">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/cart">
                        <ShoppingCart size={20} />
                    </Link>
                </Button>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80 overflow-y-auto">
                        <div className="flex flex-col gap-6 mt-8">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                <Input
                                    placeholder="Cari produk..."
                                    className="pl-10 pr-4 py-2 text-sm rounded-3xl"
                                />
                            </div>

                            {menuItems.map((menu) => (
                                <div key={menu.title}>
                                    {menu.hasDropdown && menu.categories ? (
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 font-semibold text-lg">
                                                {menu.title}
                                            </div>
                                            <div className="pl-7 space-y-1">
                                                {menu.categories.map((category) => (
                                                    <Link
                                                        key={category.name}
                                                        href={category.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block py-2 text-sm text-gray-600 hover:text-black transition-colors"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={menu.href || "#"}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-2 font-semibold text-lg hover:text-gray-600 transition-colors"
                                        >
                                            {menu.title}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Account Link */}
                            <Button variant="outline" asChild className="w-full">
                                <Link href="/account" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                                    <CircleUser size={20} />
                                    Account
                                </Link>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}