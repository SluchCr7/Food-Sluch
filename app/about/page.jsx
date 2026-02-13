'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import { CheckCircle2 } from 'lucide-react'

const AboutPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white/90 overflow-x-hidden">
            <Header />

            {/* Parallax Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/hero-new-1.png"
                        alt="About Us"
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <SectionTitle
                            subtitle="Since 1995"
                            title="A Legacy of Flavor"
                            description="From humble beginnings to a culinary landmark, our journey is defined by passion, innovation, and a commitment to excellence."
                        />
                    </motion.div>
                </div>
            </section>

            {/* Story & Philosophy */}
            <section className="py-24 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="absolute inset-0 bg-primary/20 transform rotate-3 rounded-sm z-0 transition-transform group-hover:rotate-6 duration-500"></div>
                        <div className="relative h-[600px] w-full rounded-sm overflow-hidden z-10 shadow-2xl">
                            <Image
                                src="/assets/images/hero-slider-3.jpg"
                                alt="Restaurant Interior"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-12 -right-12 z-20 hidden md:block">
                            <Image src="/assets/images/about-chef.png" alt="Chef Decor" width={200} height={200} className="rounded-full border-4 border-dark shadow-xl" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl lg:text-5xl font-display text-white mb-8 leading-tight">
                            More Than Just <br /> <span className="text-primary italic">Fine Dining</span>
                        </h2>

                        <div className="space-y-6 text-white/70 text-lg font-light leading-relaxed">
                            <p>
                                Sluch was born from a desire to create a sanctuary where time slows down and the senses are awakened. What started as a small family kitchen has evolved into a destination for gastronomes who seek authenticity and innovation in every bite.
                            </p>
                            <p>
                                We believe that food tells a story. Our menu is a narrative of seasons, landscapes, and traditions, reinterpreted with modern techniques. We honor the farmers, fishermen, and artisans who provide us with the finest ingredients, allowing their quality to shine on the plate.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {["Sustainable Sourcing", "World-Class Service", "Creative Mixology", "Authentic Recipes"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary w-5 h-5" />
                                    <span className="text-white/90 font-display">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Chef Spotlight */}
            <section className="py-24 bg-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform translate-x-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 bg-dark/80 backdrop-blur-md p-8 md:p-12 border border-white/5 rounded-sm">
                        <div className="w-full md:w-1/3 relative">
                            <div className="aspect-[3/4] rounded-sm overflow-hidden relative">
                                <Image
                                    src="/assets/images/about-chef.png"
                                    alt="Executive Chef"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <SectionTitle
                                subtitle="The Visionary"
                                title="Alessandro Rossi"
                                align="left"
                                className="mb-6"
                            />
                            <h4 className="text-primary text-xl font-display mb-6 uppercase tracking-widest">Executive Chef</h4>
                            <p className="text-white/70 text-lg leading-relaxed italic mb-8 border-l-4 border-primary pl-6">
                                &quot;To cook is to create a memory. My goal is not just to feed the body, but to touch the soul. Every ingredient has a voice, and it is my job to let it sing.&quot;
                            </p>
                            <div className="flex gap-4">
                                <Image src="/assets/images/signature.png" alt="Signature" width={150} height={60} className="filter invert opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 bg-dark">
                <div className="container mx-auto px-4">
                    <SectionTitle
                        subtitle="Our Family"
                        title="Meet the Culinary Artists"
                        description="The talented individuals who bring passion and expertise to every service."
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Alessandro Rossi", role: "Executive Chef", img: "/assets/images/about-chef.png" },
                            { name: "Maria Gonzalez", role: "Head Pastry Chef", img: "/assets/images/chef-pastry.png" },
                            { name: "Julian Ramirez", role: "Sous Chef", img: "/assets/images/chef-sous.png" },
                            { name: "Sarah Connor", role: "Sommelier", img: "/assets/images/hero-new-1.png" } // Placeholder image
                        ].map((member, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden"
                            >
                                <div className="relative h-[400px] w-full rounded-sm overflow-hidden mb-4">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                                        <div className="flex gap-4 text-white">
                                            {/* Social Icons Placeholder */}
                                            <span className="hover:text-primary transition-colors cursor-pointer">IG</span>
                                            <span className="hover:text-primary transition-colors cursor-pointer">TW</span>
                                            <span className="hover:text-primary transition-colors cursor-pointer">LI</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-display text-white mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{member.role}</p>
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
