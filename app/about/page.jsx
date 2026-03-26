'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { CheckCircle2, Award, Users, Utensils } from 'lucide-react'

const AboutPage = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <div className="bg-dark min-h-screen text-white overflow-x-hidden selection:bg-primary/30 selection:text-white">
            <Header />

            {/* --- Hero Section --- */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105">
                    <Image
                        src="/assets/images/interior-luxury.png"
                        alt="Resturant Ambiance"
                        fill
                        className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[3s]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <span className="text-primary font-serif italic text-2xl mb-6 block tracking-widest uppercase">Since 1995</span>
                        <h1 className="text-6xl md:text-8xl font-display text-white mb-8 border-y border-white/10 py-8 inline-block">
                            The Sluch Heritage
                        </h1>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
                            A legendary narrative of culinary excellence, driven by passion and redefined by innovation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- The Philosophy --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-24">
                    <motion.div {...fadeIn} className="lg:w-1/2 relative">
                        <div className="relative aspect-[3/4] rounded-sm overflow-hidden luxury-border">
                            <Image
                                src="/assets/images/about-chef.png"
                                alt="Chef's Philosophy"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-10 -left-10 glass-dark p-8 md:p-12 hidden md:block max-w-xs">
                             <h4 className="text-primary font-display text-2xl italic mb-4">"Taste the Soul"</h4>
                             <p className="text-white/50 text-sm leading-relaxed font-light">
                                Authentic ingredients curated for their unique resonance with the seasons.
                             </p>
                        </div>
                    </motion.div>

                    <motion.div {...fadeIn} className="lg:w-1/2 space-y-8">
                        <SectionTitle
                            subtitle="Our Essence"
                            title="Plating the Extraordinary"
                            align="left"
                            className="mb-0"
                        />
                        <p className="text-white/60 text-lg leading-relaxed font-light first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                            We believe that food is a universal language that speaks directly to the soul. Our journey began three decades ago with a single mission: to create a stage where the finest ingredients can perform their most beautiful symphony.
                        </p>
                        <p className="text-white/60 text-lg leading-relaxed font-light">
                            Today, Sluch is recognized globally for its avant-garde interpretation of classical techniques. We honor the heritage of our predecessors while constantly pushing the boundaries of what is possible in modern gastronomy.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            {[
                                { icon: "🌱", label: "Artisan Sourcing" },
                                { icon: "🏅", label: "Award Winning" },
                                { icon: "👨‍🍳", label: "World-Class Team" },
                                { icon: "✨", label: "Ethical Practice" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- Stats / Excellence --- */}
            <section className="py-24 bg-[#050505]">
                <div className="container mx-auto px-6 border-y border-white/5 py-24">
                     <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { val: "28+", label: "Years of Heritage" },
                            { val: "3", label: "Michelin Stars" },
                            { val: "15k+", label: "Happy Guests" },
                            { val: "45", label: "Signature Dishes" }
                        ].map((stat, i) => (
                            <motion.div key={i} {...fadeIn}>
                                <h3 className="text-5xl md:text-6xl font-display text-primary mb-2">{stat.val}</h3>
                                <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">{stat.label}</p>
                            </motion.div>
                        ))}
                     </div>
                </div>
            </section>

            {/* --- The Experience Video/Image Strip --- */}
            <section className="py-32">
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 overflow-hidden">
                    <div className="aspect-[4/5] relative luxury-border overflow-hidden">
                        <Image src="/assets/images/hero-slider-1.jpg" fill alt="Exp" className="object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="aspect-[4/5] relative luxury-border overflow-hidden md:translate-y-12">
                        <Image src="/assets/images/hero-slider-3.jpg" fill alt="Exp" className="object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="aspect-[4/5] relative luxury-border overflow-hidden">
                        <Image src="/assets/images/interior-bar.png" fill alt="Exp" className="object-cover hover:scale-110 transition-transform duration-700" />
                    </div>
                 </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage

