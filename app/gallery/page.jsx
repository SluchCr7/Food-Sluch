'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'

const GalleryPage = () => {
    const images = [
        { src: "/assets/images/hero-new-1.png", category: "Interior", size: "large", title: "The Grand Library" },
        { src: "/assets/images/menu-burrata.png", category: "Dish", size: "small", title: "Signature Burrata" },
        { src: "/assets/images/about-chef.png", category: "Chef", size: "tall", title: "Chef at Work" },
        { src: "/assets/images/menu-seabass.png", category: "Dish", size: "small", title: "Chilean Seabass" },
        { src: "/assets/images/hero-slider-2.jpg", category: "Interior", size: "small", title: "Ambient Dining" },
        { src: "/assets/images/interior-bar.png", category: "Interior", size: "wide", title: "The Onyx Bar" },
        { src: "/assets/images/hero_signature_dish_1774544880233.png", category: "Dish", size: "tall", title: "A5 Wagyu" },
        { src: "/assets/images/menu-4.jpg", category: "Dish", size: "small", title: "Seasonal Platter" },
        { src: "/assets/images/interior-luxury.png", category: "Interior", size: "large", title: "Luxury Seating" }
    ]

    const [filter, setFilter] = useState("All")
    const categories = ["All", "Interior", "Dish", "Chef"]

    const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter)

    return (
        <div className='bg-dark min-h-screen text-white selection:bg-primary/30'>
            <Header />

            {/* Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <Image src="/assets/images/hero-slider-3.jpg" alt="Gallery" fill className="object-cover opacity-40 scale-110" priority />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
                
                <div className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                        className="space-y-4"
                    >
                        <span className="text-primary font-serif italic text-xl tracking-[0.4em] uppercase block">Visual Narratives</span>
                        <h1 className="text-6xl md:text-9xl font-display text-white">The Gallery</h1>
                        <div className="w-24 h-px bg-primary mx-auto mt-8" />
                    </motion.div>
                </div>
            </section>

            <section className="py-32 container mx-auto px-6">
                {/* Filter - Minimalist Text */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-24 border-b border-white/5 pb-8">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(cat)}
                            className={`relative text-[10px] uppercase tracking-[0.4em] transition-all duration-500 hover:text-primary ${
                                filter === cat ? "text-primary" : "text-white/40"
                            }`}
                        >
                            {cat}
                            {filter === cat && (
                                <motion.div layoutId="gal-underline" className="absolute -bottom-[33px] left-0 right-0 h-[2px] bg-primary z-10" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[350px]">
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.6 }}
                                key={img.src}
                                className={`
                                    relative overflow-hidden group luxury-border
                                    ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${img.size === 'wide' ? 'md:col-span-2' : ''}
                                    ${img.size === 'tall' ? 'md:row-span-2' : ''}
                                `}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                         <span className="text-[10px] uppercase tracking-[0.3em] text-primary mb-2 block">{img.category}</span>
                                         <h3 className="text-2xl font-display text-white">{img.title}</h3>
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                     <span className="text-white text-xs">+</span>
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

