
import { NavigationMenuDemo } from "@/components/ui/navbar"
import Footer from "@/components/footer"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <NavigationMenuDemo />
            <main className="flex-1">{children}</main>
            <Footer />
        </div>
    )
}
