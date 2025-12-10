
import { NavigationMenuDemo } from "@/components/navbar"
import Info from "@/components/info"
import Footer from "@/components/footer"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Info />
            <NavigationMenuDemo />
            <main className="flex-1 ">{children}</main>
            <Footer />
        </div>
    )
}
