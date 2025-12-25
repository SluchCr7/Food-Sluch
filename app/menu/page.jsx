'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const categories = ["All", "Starters", "Main Course", "Drinks", "Desserts"]

const menuItems = [
    {
        id: 1,
        category: "Starters",
        img: "/assets/images/menu-1.jpg",
        title: "Greek Salad",
        price: "$12.50",
        description: "Crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with dried oregano.",
        new: true
    },
    {
        id: 2,
        category: "Main Course",
        img: "/assets/images/menu-5.jpg",
        title: "Lasagna",
        price: "$18.99",
        description: "Layers of pasta, rich meat sauce, and creamy béchamel, baked to perfection.",
    },
    {
        id: 3,
        category: "Starters",
        img: "/assets/images/menu-3.jpg",
        title: "Butternut Pumpkin",
        price: "$14.99",
        description: "Roasted butternut pumpkin soup with a hint of nutmeg and cream.",
    },
    {
        id: 4,
        category: "Main Course",
        img: "/assets/images/menu-4.jpg",
        title: "Tokusen Wagyu",
        price: "$85.99",
        description: "Premium Japanese Wagyu beef, grilled to your preference, served with truffle mash.",
        new: true
    },
    {
        id: 5,
        category: "Starters",
        img: "/assets/images/menu-5.jpg",
        title: "Olivas Rellenas",
        price: "$9.99",
        description: "Green olives stuffed with anchovies and marinated in herbs.",
    },
    {
        id: 6,
        category: "Main Course",
        img: "/assets/images/menu-6.jpg",
        title: "Oph Fish",
        price: "$40.99",
        description: "Pan-seared catch of the day with lemon butter sauce and steamed vegetables.",
    },
    {
        id: 7,
        category: "Desserts",
        img: "/assets/images/menu-1.jpg",
        title: "Chocolate Lava Cake",
        price: "$12.99",
        description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream.",
    },
    {
        id: 8,
        category: "Drinks",
        img: "/assets/images/menu-3.jpg",
        title: "Signature Cocktail",
        price: "$16.00",
        description: "Our secret blend of premium spirits and fresh tropical juices.",
        new: true
    }
]

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory)

    return (
        <div className="bg-dark min-h-screen text-white/90">
            <Header />

            {/* Page Hero */}
            <section className="relative h-[40vh] flex items-center justify-center bg-accent overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src="/assets/images/menu-4.jpg"
                    alt="Menu Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-primary mb-4"
                    >
                        Our Menu
                    </motion.h1>
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto px-4 font-light">
                        Discover a culinary journey of exquisite flavors and premium ingredients.
                    </p>
                </div>
            </section>

            {/* Menu Content */}
            <section className="py-20 container mx-auto px-4">
                {/* Categories */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${activeCategory === cat
                                    ? "bg-primary border-primary text-black font-semibold"
                                    : "bg-transparent border-white/20 text-white/70 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Items Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12"
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="group relative bg-white/5 border border-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors flex flex-col sm:flex-row gap-6"
                            >
                                <div className="relative w-full sm:w-40 h-40 shrink-0 overflow-hidden rounded-xl">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    {item.new && (
                                        <span className="absolute top-2 left-2 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                                            New
                                        </span>
                                    )}
                                </div>

                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-2xl font-serif text-white group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <span className="text-xl font-bold text-primary font-mono">
                                            {item.price}
                                        </span>
                                    </div>
                                    <div className="w-12 h-[1px] bg-white/20 mb-4 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500" />
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            <Footer />
        </div>
    )
}

export default MenuPage
