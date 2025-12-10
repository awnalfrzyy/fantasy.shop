
import Info from "@/components/info"
import Nav from "@/components/nav"
import ButtomNav from "@/components/buttomNav"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Info />
            <Nav />
            <main className="flex-1 ">{children}</main>
            <ButtomNav />
        </div>
    )
}
