import Line from "./ui/line";

export default function Footer() {
    return (

        <div className="bg-[#F0F0F0] w-full h-[399px] flex flex-col justify-end p-6">
            {/* konten atas */}
            <div className="flex flex-wrap justify-between gap-6 p-8">
                {/* Brand */}
                <section className="flex flex-col gap-2.5 justify-start">
                    <h1 className="font-black text-2xl text-black">FANTASY.SHOP</h1>
                    <p className="w-[200px]">
                        We have clothes that suits your style and which you’re proud to wear.
                        From women to men.
                    </p>
                </section>

                {/* Company */}
                <section className="flex flex-col gap-2.5 items-start">
                    <h2 className="font-light text-[18px] text-black">COMPANY</h2>
                    <ul className="flex flex-col gap-1">
                        <li>About</li>
                        <li>Features</li>
                        <li>Work</li>
                        <li>Carrer</li>
                    </ul>
                </section>

                {/* Help */}
                <section className="flex flex-col gap-2.5 items-start">
                    <h2 className="font-light text-[18px] text-black">HELP</h2>
                    <ul className="flex flex-col gap-1">
                        <li>About</li>
                        <li>Features</li>
                        <li>Work</li>
                        <li>Carrer</li>
                    </ul>
                </section>

                {/* FAQ */}
                <section className="flex flex-col gap-2.5 items-start">
                    <h2 className="font-light text-[18px] text-black">FAQ</h2>
                    <ul className="flex flex-col gap-1">
                        <li>Customer Support</li>
                        <li>Delivery Details</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </section>

                {/* Resource */}
                <section className="flex flex-col gap-2.5 items-start">
                    <h2 className="font-light text-[18px] text-black">RESOURCE</h2>
                    <ul className="flex flex-col gap-1">
                        <li>About</li>
                        <li>Features</li>
                        <li>Work</li>
                        <li>Carrer</li>
                    </ul>
                </section>
            </div>

            {/* line di bawah */}
            <div className="flex justify-center pb-4">
                <Line variant="horizontal" length={1300} color="black" thickness={3} />
            </div>
        </div>
    );
}
