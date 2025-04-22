import { Farmer, Product, Testimonial } from "@/types/types"

export const slides = [
    {
        image: '/bg-1.jpg',
        texts: [
            "Connecting Local Farmers...",
            "Accessing Local Markets...",
            "Driving Innovation in Agriculture..."
        ]
    },
    {
        image: '/bg-2.jpg',
        texts: [
            "Grow Beyond Borders...",
            "Export Made Easy...",
            "We Link You Globally..."
        ]
    },
    {
        image: '/bg-3.jpg',
        texts: [
            "Farmer Meets Farmer...",
            "Share Knowledge, Tools & Growth",
            "Build Together, Thrive Together..."
        ]
    },
    {
        image: '/bg-4.jpg',
        texts: [
            "Bringing Technology Home...",
            "Solving Problems Together...",
            "Working Hand in Gloves, Creating a Hunger Free World..."
        ]
    },
]

export const navlinks = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'About',
        path: '/',
    },
    {
        name: 'Market Place',
        path: '/'
    },
    {
        name: 'Meet Our Farmers',
        path: '/'
    },
    {
        name: 'Shipping',
        path: '/'
    }
]

// export const typeLines = [
//     "Empowering Farmers, Connecting Markets
//                         At AGROX, we believe agriculture is more than just cultivation — it's community, innovation, and opportunity. Our platform is designed to bridge the gap between farmers and buyers, both locally and globally, creating seamless access to markets, resources, and partnerships.

//                         We are passionate about helping West African farmers(and beyond) thrive in the modern agricultural ecosystem.Whether you're a smallholder farmer, large-scale producer, or agribusiness enthusiast, AGROX gives you the tools to: <br />

//                         📦 Sell your products directly to local and international buyers

//                         🤝 Connect with other farmers to exchange knowledge and collaborate

//                         🌍 Expand your reach beyond borders with export opportunities

//                         💡 Access digital tools that simplify and enhance the way you grow and sell

// We’re not just building a marketplace — we’re building a movement.A movement to transform agriculture into a tech - powered, inclusive, and sustainable force for good.

//                         Join AGROX.
//         Grow.Connect.Thrive.
// ",
// ]


export const farm = [
    {
        image: '/farmer-1.jpg',
    },
    {
        image: '/farmer-2.jpg',
    },
    {
        image: '/farmer-3.jpg',
    },
    {
        image: '/farmer-4.jpg',
    },
    {
        image: '/farmer-5.jpg',
    },
]

export const products: Product[] = [
    {
        id: 1,
        name: "Rice",
        image: "/Rice.jpg",
        price: " ₦16,000 / 1painter",
        seller: "AGROX"
    },
    {
        id: 2,
        name: "Eggs",
        image: "/Eggs.jpg",
        price: " ₦8000 / 1crate",
        seller: "AGROX"
    },
    {
        id: 3,
        name: "Cocoa",
        image: "/Cocoa.jpg",
        price: " ₦ 2000 / 1painter",
        seller: "AGROX"
    },
    {
        id: 4,
        name: "Coffee",
        image: "/Coffe.jpg",
        price: " ₦ 2000 / 1painter ",
        seller: "AGROX"
    },
    {
        id: 5,
        name: "Maize",
        image: "/Maize.jpg",
        price: " ₦ 10000 / 1bag ",
        seller: "AGROX"
    },
    {
        id: 6,
        name: "Beans",
        image: "/Beans.jpg",
        price: "  ₦ 40000 / 1bag ",
        seller: "AGROX"
    },
    {
        id: 7,
        name: "Irish Potatoes",
        image: "/Irish-potatoes.jpg",
        price: "  ₦ 8000 / 1painter ",
        seller: "AGROX"
    },
    {
        id: 8,
        name: "Potatoes",
        image: "/Sweet-potatoes.jpg",
        price: " ₦ 8000 / 1painter ",
        seller: "AGROX"
    },
]

export const farmers: Farmer[] = [
    {
        id: 1,
        name: "Esther Onyewuchukwu",
        location: "Nigeria",
        products: ["CatFish Rearing ", "Vegatables"],
        image: "/Esther.jpg",
        Bio: ""
    },
    {
        id: 2,
        name: "Jubril Hamza",
        location: "Ghana",
        products: ["Vegetables ", "Livestock"],
        image: "/Jubril.jpg",
        Bio: ""
    },
    {
        id: 3,
        name: "Rapheal Mick",
        location: "Nigeria",
        products: ["Rice Farming ", "Beans ", "Cash crops"],
        image: "/Raph.jpg",
        Bio: ""
    },
    {
        id: 4,
        name: "Victor Chukwu",
        location: "Nigeria",
        products: ["Poultry ", "Coffee"],
        image: "/Victory.jpg",
        Bio: ""
    },
]

export const testimonials: Testimonial[] = [
    {
        name: "Amaka Obi",
        role: "Cassava Farmer, Nigeria",
        quote: "AGROX helped me find reliable buyers and better pricing. It's changed my farming business.",
        image: "/woman.jpg"
    },
    {
        name: "John Mensah",
        role: "Cocoa Exporter, Ghana",
        quote: "Connecting with international buyers has never been easier — AGROX makes it seamless.",
        image: "/man-1.jpg"
    },
    {
        name: "Fatou Diallo",
        role: "Vegetable Farmer, Senegal",
        quote: "I love the support and the simplicity of the platform. AGROX has my trust.",
        image: "/man-2.jpg"
    },
    {
        name: "Micheal Okwu",
        role: "Rice Farmer, Nigeria",
        quote: "I love the support and the simplicity of the platform. AGROX has my trust.",
        image: "/man-3.jpg"
    }
]
