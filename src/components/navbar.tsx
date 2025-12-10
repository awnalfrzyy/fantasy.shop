"use client"

import * as React from "react"
import Link from "next/link"
import { Input } from "./ui/input"
import { Search, CircleUserRound, ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export function NavigationMenuDemo() {
    return (
        <header className="w-full border-b bg-white">
            <div className="container mx-auto px-2 lg:px-4">
                <div className="flex items-center justify-between pl-6 pr-6 gap-6 py-4 lg:py-6">
                    {/* Logo */}
                    <div className="flex pr-10">
                        <h1 className="text-2xl lg:text-2xl font-black text-gray-900">
                            FANTASY.SHOP
                        </h1>
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden lg:flex">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="text-base font-medium">
                                        Shop
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                        href="/"
                                                    >
                                                        <div className="mb-2 mt-4 text-lg font-medium">
                                                            FANTASY.SHOP
                                                        </div>
                                                        <p className="text-sm leading-tight text-muted-foreground">
                                                            Temukan produk fantasi terbaik untuk koleksi Anda.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/new-arrivals" title="New Arrivals">
                                                Produk terbaru dan terpopuler bulan ini.
                                            </ListItem>
                                            <ListItem href="/categories" title="Categories">
                                                Jelajahi semua kategori produk kami.
                                            </ListItem>
                                            <ListItem href="/bestsellers" title="Best Sellers">
                                                Produk dengan rating tertinggi dari pelanggan.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>


                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/categori-page" className="text-base font-medium">
                                            On Sale
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/about" className="text-base font-medium">
                                            New Arrivals
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link href="/contact" className="text-base font-medium">
                                            Brand
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Search Bar and Actions */}
                    <div className="flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="relative w-64 lg:w-96">
                            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <Input
                                placeholder="Cari produk..."
                                className="pl-10 pr-4 py-2 text-sm lg:text-base rounded-3xl"
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="lg"
                                className="rounded-full  hover:bg-gray-100"
                            >
                                <ShoppingCart size={24} />
                            </Button>
                            <Button
                                variant="ghost"
                                size="lg"
                                className="rounded-full p-3 hover:bg-gray-100"
                            >
                                <CircleUserRound size={24} />
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button (optional) */}
                    <div className="lg:hidden">
                        <Button variant="ghost" size="sm">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}