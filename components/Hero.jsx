'use client'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
    const images = [
        '/assets/images/hero-new-1.png',
        '/assets/images/hero-slider-3.jpg',
        '/assets/images/hero-slider-2.jpg'
    ]

    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length)
        }, 8000)
        return () => clearInterval(timer)
    }, [images.length])

    return (
        <section className='relative w-full h-screen overflow-hidden bg-black' id='Home'>
            {/* Background Slider */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 3, ease: [0.4, 0, 0.2, 1] }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={images[currentImage]}
                        alt="Fine Dining Experience"
                        fill
                        className='object-cover opacity-60'
                        priority
                    />
                    {/* Multi-layered Overlays for depth */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>
            </AnimatePresence>

            <div className='relative z-10 w-full h-full flex flex-col'>
                <Header />

                <div className="flex-1 flex flex-col items-center justify-center text-center px-4 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="space-y-6"
                    >
                        <span className="inline-block text-primary font-display italic text-xl md:text-2xl tracking-[0.2em] mb-4 uppercase">
                            Culinary Excellence & Refined Taste
                        </span>

                        <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-display font-medium leading-[1.1] tracking-tight mb-8">
                            A Symphony of <br />
                            <span className="text-primary italic font-serif">Fine Flavors</span>
                        </h1>

                        <p className="text-white/70 text-base md:text-xl max-w-2xl mx-auto mb-12 font-light tracking-wide leading-relaxed">
                            Discover an extraordinary narrative of tradition and modern innovation. 
                            Where every dish is a masterpiece, and every visit is a memory.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-4">
                            <Link href="/menu" className="group relative overflow-hidden px-12 py-5 bg-primary text-black font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-700">
                                <span className="relative z-10">Discover Menu</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                            </Link>
                            
                            <Link href="/reservation" className="group relative overflow-hidden px-12 py-5 border border-white/30 text-white font-bold uppercase tracking-[0.3em] text-[10px] transition-all duration-700 hover:border-white">
                                <span className="relative z-10">Book a Table</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1.5 }}
                    className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-8"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 vertical-text transform rotate-180" style={{ writingMode: 'vertical-rl' }}>
                        Explore More
                    </span>
                    <div className="w-[1px] h-24 bg-gradient-to-b from-primary/60 to-transparent relative overflow-hidden">
                         <motion.div 
                            animate={{ y: [0, 96, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-1/3 bg-white"
                         />
                    </div>
                </motion.div>
            </div>
            
            <style jsx>{`
                .vertical-text {
                    writing-mode: vertical-rl;
                    text-orientation: mixed;
                }
            `}</style>
        </section>
    )
}

export default Hero