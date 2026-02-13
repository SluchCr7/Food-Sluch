'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'

const GalleryPage = () => {
    const images = [
        { src: "/assets/images/hero-new-1.png", category: "Interior", size: "large" },
        { src: "/assets/images/special-dish-new.png", category: "Dish", size: "small" },
        { src: "/assets/images/about-chef.png", category: "Chef", size: "tall" },
        { src: "/assets/images/chef-sous.png", category: "Chef", size: "small" },
        { src: "/assets/images/chef-pastry.png", category: "Chef", size: "small" },
        { src: "/assets/images/interior-bar.png", category: "Interior", size: "wide" },
        { src: "/assets/images/menu-1.jpg", category: "Dish", size: "tall" },
        { src: "/assets/images/menu-5.jpg", category: "Dish", size: "small" },
        { src: "/assets/images/menu-4.jpg", category: "Dish", size: "large" },
        { src: "/assets/images/hero-slider-3.jpg", category: "Interior", size: "wide" },
        { src: "/assets/images/event-1.jpg", category: "Events", size: "small" }, // Assuming this exists or using placeholders
        { src: "/assets/images/menu-6.jpg", category: "Dish", size: "small" },
    ]

    const [filter, setFilter] = useState("All")
    const categories = ["All", "Interior", "Dish", "Chef", "Events"]

    const filteredImages = filter === "All" ? images : images.filter(img => img.category === filter)

    return (
        <div className='bg-dark min-h-screen text-white/90'>
            <Header />

            {/* Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image src="/assets/images/hero-slider-1.jpg" alt="Gallery Hero" fill className="object-cover opacity-60" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/30 to-dark" />
                </div>

                <div className="relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionTitle
                            subtitle="Visual Journey"
                            title="Our Gallery"
                            description="Experience the atmosphere, culinary creations, and moments that define Sluch."
                        />
                    </motion.div>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                {/* Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-sm border transition-all duration-300 uppercase tracking-widest text-xs font-bold ${filter === cat
                                ? 'bg-primary border-primary text-black'
                                : 'bg-transparent border-white/10 text-white/60 hover:text-white hover:border-white/40'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry-ish Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
                    <AnimatePresence mode='popLayout'>
                        {filteredImages.map((img, index) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                key={index} // Ideally use a unique ID
                                className={`
                                    relative rounded-sm overflow-hidden group cursor-pointer border border-white/5
                                    ${img.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                                    ${img.size === 'wide' ? 'md:col-span-2' : ''}
                                    ${img.size === 'tall' ? 'md:row-span-2' : ''}
                                `}
                            >
                                <Image
                                    src={img.src}
                                    alt="Gallery Item"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                                    <span className="text-primary tracking-widest uppercase text-xs font-bold mb-2">
                                        {img.category}
                                    </span>
                                    <div className="w-8 h-[1px] bg-white/50 mb-4"></div>
                                    <span className="text-white text-sm border border-white/30 px-6 py-2 hover:bg-white hover:text-black transition-colors">
                                        View Full
                                    </span>
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
