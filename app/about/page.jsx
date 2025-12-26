'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const AboutPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white/90">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] flex items-center justify-center bg-accent overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <Image
                    src="/assets/images/hero-new-1.png"
                    alt="About Us"
                    fill
                    className="object-cover"
                />
                <div className="relative z-20 text-center px-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-primary font-serif italic text-2xl mb-2 block"
                    >
                        Since 1995
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        Our Story
                    </motion.h1>
                </div>
            </section>

            {/* Our Story Content */}
            <section className="py-24 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/assets/images/hero-slider-3.jpg"
                                alt="Restaurant Interior"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-dark border border-primary/30 rounded-full flex items-center justify-center p-4 shadow-2xl z-10 hidden md:flex">
                            <div className="text-center">
                                <span className="block text-4xl font-serif text-primary">25+</span>
                                <span className="text-sm text-white/60 uppercase tracking-widest">Years of<br />Excelence</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">
                            A Tradition of <br /> <span className="text-white">Culinary Excellence</span>
                        </h2>
                        <p className="text-lg text-white/70 mb-6 leading-relaxed">
                            Founded in the heart of the city, Sluch Restaurant began with a simple mission: to serve authentic flavors with a modern twist. Over the decades, we have evolved into a sanctuary for food lovers, where every dish tells a story of heritage and passion.
                        </p>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed">
                            Our chefs travel the world to source the finest ingredients, ensuring that every plate we serve is a masterpiece of taste and texture. We believe that dining is not just about eating—it is an experience to be cherished.
                        </p>

                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div>
                                <h4 className="text-xl font-serif text-white mb-2">Master Chefs</h4>
                                <p className="text-sm text-white/50">Award-winning talent leading our kitchen with creativity and precision.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-serif text-white mb-2">Fresh Ingredients</h4>
                                <p className="text-sm text-white/50">Locally sourced, organic produce and premium meats delivered daily.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chef Section */}
            <section className="py-24 bg-white/5">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-primary font-serif italic text-2xl mb-2 block">The Mastermind</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-white mb-16">Meet Our Executive Chef</h2>

                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-dark/50 p-8 rounded-2xl border border-white/5">
                        <div className="w-full md:w-1/3 relative h-[300px] rounded-xl overflow-hidden">
                            <Image
                                src="/assets/images/about-chef.png"
                                alt="Chef"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-full md:w-2/3 text-left">
                            <h3 className="text-3xl font-serif text-white mb-2">Alessandro Rossi</h3>
                            <p className="text-primary mb-6">Execuitve Chef</p>
                            <p className="text-white/70 mb-6 italic">
                                Cooking is an art, but baking is a science. At Sluch, we combine both to create magic on your plate. My philosophy is simple: respect the ingredients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-serif italic text-2xl mb-2 block">The Team</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white">Culinary Artists</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Alessandro Rossi", role: "Executive Chef", img: "/assets/images/about-chef.png" },
                            { name: "Maria Gonzalez", role: "Head Pastry Chef", img: "/assets/images/chef-pastry.png" },
                            { name: "Julian Ramirez", role: "Sous Chef", img: "/assets/images/chef-sous.png" }
                        ].map((chef, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="group relative"
                            >
                                <div className="relative h-[500px] w-full overflow-hidden rounded-lg mb-6">
                                    <Image
                                        src={chef.img}
                                        alt={chef.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-center gap-4 text-primary">
                                            <span className="cursor-pointer hover:text-white">Twitter</span>
                                            <span className="cursor-pointer hover:text-white">Instagram</span>
                                            <span className="cursor-pointer hover:text-white">LinkedIn</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-serif text-white mb-1">{chef.name}</h3>
                                    <p className="text-primary font-light uppercase tracking-widest text-sm">{chef.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default AboutPage
