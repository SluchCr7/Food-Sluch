'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'

const categories = ["All", "Starters", "Main Course", "Signature", "Desserts", "Cocktails"]

const menuItems = [
    {
        id: 1,
        category: "Starters",
        img: "/assets/images/menu-burrata.png",
        title: "Heirloom Burrata",
        price: "$24",
        description: "Fresh burrata, estate olive oil, basil pearls, toasted sourdough.",
        new: true
    },
    {
        id: 2,
        category: "Main Course",
        img: "/assets/images/menu-seabass.png",
        title: "Chilean Seabass",
        price: "$48",
        description: "Pan-seared seabass, lemon-butter emulsion, wild asparagus.",
    },
    {
        id: 3,
        category: "Signature",
        img: "/assets/images/hero-new-1.png",
        title: "A5 Wagyu Striploin",
        price: "$95",
        description: "Japanese Wagyu, charcoal grilled, truffle potato purée, red wine jus.",
        new: true
    },
    {
        id: 4,
        category: "Main Course",
        img: "/assets/images/menu-4.jpg",
        title: "Duck Confit",
        price: "$42",
        description: "Slow-cooked duck leg, orange reduction, braised red cabbage.",
    },
    {
        id: 5,
        category: "Starters",
        img: "/assets/images/menu-5.jpg",
        title: "Scallop Carpaccio",
        price: "$28",
        description: "Hokkaido scallops, citrus zest, pink peppercorns, micro-herbs.",
    },
    {
        id: 6,
        category: "Desserts",
        img: "/assets/images/menu-1.jpg",
        title: "Grand Cru Soufflé",
        price: "$18",
        description: "70% Dark chocolate, Madagascan vanilla bean ice cream.",
        new: true
    },
    {
        id: 7,
        category: "Cocktails",
        img: "/assets/images/menu-3.jpg",
        title: "The Sluch Old Fashioned",
        price: "$22",
        description: "12-year Bourbon, maple, walnut bitters, smoked oak.",
    }
]

const MenuPage = () => {
    const [activeCategory, setActiveCategory] = useState("All")

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory)

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30 selection:text-white">
            <Header />

            {/* Page Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/assets/images/interior-luxury.png"
                    alt="Menu Background"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />

                <div className="relative z-20 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-primary font-serif italic text-xl md:text-2xl tracking-[0.3em] mb-4 block uppercase">
                            The Culinary Collection
                        </span>
                        <h1 className="text-6xl md:text-8xl font-display text-white mb-6">
                            Our Menu
                        </h1>
                        <div className="w-24 h-px bg-primary mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* Menu Content */}
            <section className="py-24 container mx-auto px-6">
                {/* Categories Filter - Premium Text Version */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-24 border-b border-white/5 pb-8">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveCategory(cat)}
                            className={`relative text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:text-primary ${activeCategory === cat ? "text-primary" : "text-white/40"
                                }`}
                        >
                            {cat}
                            {activeCategory === cat && (
                                <motion.div
                                    layoutId="category-underline"
                                    className="absolute -bottom-[33px] left-0 right-0 h-[2px] bg-primary z-10"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Items Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-16"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5 }}
                                key={item.id}
                                className="group flex flex-col sm:flex-row gap-8 items-center sm:items-start"
                            >
                                <div className="relative w-48 h-48 shrink-0 overflow-hidden luxury-border">
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {item.new && (
                                        <div className="absolute top-0 right-0 bg-primary text-black text-[8px] font-bold p-2 uppercase tracking-widest">
                                            New
                                        </div>
                                    )}
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex justify-between items-end">
                                        <h3 className="text-2xl font-display text-white group-hover:text-primary transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <div className="flex-1 mx-4 mb-2 border-b border-white/10 border-dotted" />
                                        <span className="text-xl font-serif text-primary">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-white/50 text-sm leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                    <div className="flex gap-4 items-center pt-2">
                                        <div className="w-8 h-[1px] bg-primary/30" />
                                        <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">Signature Item</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Daily Specials / Chef Recommendation */}
            <section className="py-24 bg-dark-100/30">
                <div className="container mx-auto px-6">
                    <div className="glass-dark p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
                        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                        <div className="md:w-1/3">
                            <span className="text-primary font-serif italic text-lg mb-2 block">Chef Recommendation</span>
                            <h2 className="text-4xl font-display text-white mb-6">Tasting Experience</h2>
                            <p className="text-white/60 mb-8 font-light italic">"A seven-course journey through the seasons, curated by Chef Marcus."</p>
                            <Button href="/reservation" variant="primary">Book Tasting</Button>
                        </div>
                        <div className="md:w-2/3 grid grid-cols-2 gap-4">
                            <div className="aspect-video relative overflow-hidden luxury-border">
                                <Image src="/assets/images/hero-slider-2.jpg" alt="Dining" fill className="object-cover opacity-60" />
                            </div>
                            <div className="aspect-video relative overflow-hidden luxury-border">
                                <Image src="/assets/images/hero-slider-3.jpg" alt="Dining" fill className="object-cover opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default MenuPage

