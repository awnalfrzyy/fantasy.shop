import CardRating from "@/features/product/components/card-rating/card-rating";

const dataDummyRating = [
    {
        name: "Alice",
        comment:
            "Produk ini benar-benar melebihi ekspektasi saya. Kualitasnya terasa premium, finishing-nya rapi, dan sangat nyaman digunakan sehari-hari. Saya sudah mencoba beberapa merek sebelumnya, tapi yang ini jelas jauh lebih baik. Highly recommended!",
        rating: 5,
    },
    {
        name: "Bob",
        comment:
            "Secara keseluruhan produk ini cukup memuaskan. Harganya terjangkau dan kualitasnya sesuai dengan apa yang ditawarkan. Mungkin ada beberapa hal kecil yang bisa diperbaiki, tapi tidak mengganggu fungsi utama. Worth the price!",
        rating: 4,
    },
    {
        name: "Charlie",
        comment:
            "Produk ini sebenarnya tidak buruk, tapi juga tidak terlalu istimewa. Kualitasnya standar saja dan masih ada ruang untuk perbaikan. Cocok untuk orang yang tidak terlalu mementingkan fitur tambahan.",
        rating: 3,
    },
    {
        name: "David",
        comment:
            "Saya merasa produk ini kurang sesuai dengan apa yang saya harapkan. Beberapa bagian terasa kurang solid dan tidak sebanding dengan harga yang dibayar. Semoga ke depannya ada peningkatan kualitas.",
        rating: 2,
    },
    {
        name: "Eve",
        comment:
            "Pengalaman saya kurang menyenangkan. Produk datang dengan beberapa cacat dan kualitas keseluruhannya di bawah standar. Customer service juga kurang responsif. Sangat mengecewakan dan tidak akan membeli lagi.",
        rating: 1,
    }, {
        name: "Eve",
        comment:
            "Pengalaman saya kurang menyenangkan. Produk datang dengan beberapa cacat dan kualitas keseluruhannya di bawah standar. Customer service juga kurang resp Pengalaman saya kurang menyenangkan. Produk datang dengan beberapa cacat dan kualitas keseluruhannya di bawah standar. Customer service juga kurang responsif. Sangat mengecewakan dan tidak akan membeli lagi.",
        rating: 1,
    },
    {
        name: "Alice",
        comment:
            "Produk ini benar-benar melebihi ekspektasi saya. Kualitasnya terasa premium, finishing-nya rapi, dan sangat nyaman digunakan sehari-hari. Saya sudah mencoba beberapa merek sebelumnya, tapi yang ini jelas jauh lebih baik. Highly recommended!",
        rating: 5,
    },
    {
        name: "Bob",
        comment:
            "Secara keseluruhan produk ini cukup memuaskan. Harganya terjangkau dan kualitasnya sesuai dengan apa yang ditawarkan. Mungkin ada beberapa hal kecil yang bisa diperbaiki, tapi tidak mengganggu fungsi utama. Worth the price!",
        rating: 4,
    },
    {
        name: "Charlie",
        comment:
            "Produk ini sebenarnya tidak buruk, tapi juga tidak terlalu istimewa. Kualitasnya standar saja dan masih ada ruang untuk perbaikan. Cocok untuk orang yang tidak terlalu mementingkan fitur tambahan.",
        rating: 3,
    },

];


export default function ContainerRating() {
    return (
        // <div className="relative">
        <div className="grid grid-cols-3 items-center gap-2">
            {dataDummyRating.map((item, idx) => (
                <CardRating
                    key={idx}
                    name={item.name}
                    comment={item.comment}
                    rating={item.rating}
                />
            ))}
        </div>

        //     <div className="absolute buttom-0 left-0 w-full h-30 bg-white blur-2xl  pointer-events-none" />
        // </div>

    );
}
