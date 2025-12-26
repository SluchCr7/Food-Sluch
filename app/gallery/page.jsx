'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const GalleryPage = () => {
    const images = [
        { src: "/assets/images/hero-new-1.png", category: "Interior" },
        { src: "/assets/images/special-dish-new.png", category: "Dish" },
        { src: "/assets/images/about-chef.png", category: "Chef" },
        { src: "/assets/images/chef-sous.png", category: "Chef" },
        { src: "/assets/images/chef-pastry.png", category: "Chef" },
        { src: "/assets/images/interior-bar.png", category: "Interior" },
        { src: "/assets/images/menu-1.jpg", category: "Dish" },
        { src: "/assets/images/menu-5.jpg", category: "Dish" },
        { src: "/assets/images/menu-4.jpg", category: "Dish" },
        { src: "/assets/images/hero-slider-3.jpg", category: "Interior" },
        { src: "/assets/images/event-1.jpg", category: "Events" },
        { src: "/assets/images/event-2.jpg", category: "Events" },
    ]

    const [filter, setFilter] = useState("All")
    const categories = ["All", "Interior", "Dish", "Chef", "Events"]

    const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter)

    return (
        <div className='bg-dark min-h-screen text-white/90'>
            <Header />

            {/* Hero */}
            <section className="relative h-[40vh] flex items-center justify-center bg-accent overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image src="/assets/images/hero-slider-1.jpg" alt="Gallery Hero" fill className="object-cover" />
                <div className="relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-4"
                    >
                        Our Gallery
                    </motion.h1>
                    <p className="text-lg md:text-xl text-primary font-light">
                        A visual journey through our culinary world
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${filter === cat ? 'bg-primary border-primary text-black font-bold' : 'bg-transparent border-white/20 text-white hover:border-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                key={index}
                                className="relative h-64 md:h-80 rounded-lg overflow-hidden group cursor-pointer"
                            >
                                <Image src={img.src} alt="Gallery Item" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-primary tracking-widest uppercase text-sm font-bold border border-primary px-4 py-2 hover:bg-primary hover:text-black transition-colors">View</span>
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

export default GalleryPage
