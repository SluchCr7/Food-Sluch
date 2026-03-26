'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'
import { Send, Users, Mic, GlassWater, UtensilsCrossed } from 'lucide-react'

const EventsPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            {/* --- Hero --- */}
            <section className="relative h-screen flex items-center pt-24 overflow-hidden">
                <Image
                    src="/assets/images/interior-luxury.png"
                    alt="Events"
                    fill
                    className="object-cover opacity-40 scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/40 to-dark" />
                
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-serif italic text-xl tracking-[0.4em] uppercase mb-4 block">Event Concierge</span>
                        <h1 className="text-6xl md:text-9xl font-display text-white mb-8">
                            Memorable <br /> <span className="text-primary italic">Distinction</span>
                        </h1>
                        <p className="text-white/50 text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 italic">
                            From intimate dinner parties to grand corporate galas, we curate experiences that linger in the memory.
                        </p>
                        <div className="w-24 h-px bg-primary mx-auto" />
                    </motion.div>
                </div>
            </section>

            {/* --- The Tiers --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { 
                            title: "Intimate Dinners", 
                            capacity: "6-14 Guests", 
                            icon: <UtensilsCrossed className="text-primary" />,
                            desc: "Two private dining suites designed for confidentiality and culinary focus.",
                            img: "/assets/images/hero_signature_dish_1774544880233.png"
                        },
                        { 
                            title: "Corporate Galas", 
                            capacity: "20-80 Guests", 
                            icon: <Mic className="text-primary" />,
                            desc: "High-end AV equipment, bespoke menus, and professional event coordination.",
                            img: "/assets/images/interior-bar.png"
                        },
                        { 
                            title: "Grand Receptions", 
                            capacity: "Up to 150 Guests", 
                            icon: <GlassWater className="text-primary" />,
                            desc: "Full venue hire for weddings, launches, and milestone celebrations.",
                            img: "/assets/images/hero-slider-3.jpg"
                        }
                    ].map((tier, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.2 }}
                            viewport={{ once: true }}
                            className="luxury-border glass-dark p-10 flex flex-col items-center text-center group overflow-hidden"
                        >
                            <div className="w-16 h-16 bg-white/[0.03] rounded-full flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                                {tier.icon}
                            </div>
                            <h3 className="text-3xl font-display text-white mb-2">{tier.title}</h3>
                            <span className="text-primary font-serif italic text-sm mb-6">{tier.capacity}</span>
                            <p className="text-white/40 font-light text-sm mb-10 leading-relaxed max-w-[250px]">{tier.desc}</p>
                            <div className="flex-grow w-full relative aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 mb-8 luxury-border shadow-2xl">
                                <Image src={tier.img} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={tier.title} />
                            </div>
                            <a href="#inquiry" className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold border-b border-primary/30 pb-2 hover:text-white hover:border-white transition-all">Select Package</a>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- Inquiry Form --- */}
            <section id="inquiry" className="py-32 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="luxury-border glass-dark p-12 md:p-24 relative">
                        <div className="absolute top-0 left-12 w-1 h-full bg-primary/20 pointer-events-none" />
                        
                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display text-white mb-12">The Inquiry</h2>
                            
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-12">
                                     <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-4">
                                         <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 block">Full Name</label>
                                         <input type="text" className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 italic text-xl font-display" placeholder="e.g. Leonardo Vinci" />
                                     </div>
                                     <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-4">
                                         <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 block">Email Address</label>
                                         <input type="email" className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 italic text-xl font-display" placeholder="leo@masterpiece.com" />
                                     </div>
                                     <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-4">
                                         <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 block">Event Date</label>
                                         <input type="date" className="w-full bg-transparent text-white focus:outline-none [color-scheme:dark] italic text-xl font-display" />
                                     </div>
                                </div>

                                <div className="space-y-12">
                                     <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-4">
                                         <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 block">Guest Count</label>
                                         <select className="w-full bg-transparent text-white focus:outline-none italic text-xl font-display appearance-none">
                                             <option>Intimate (6-14)</option>
                                             <option>Boutique (15-40)</option>
                                             <option>Grand (40-150)</option>
                                         </select>
                                     </div>
                                     <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-4">
                                         <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 block">Requirements</label>
                                         <textarea rows="3" className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 italic text-xl font-display resize-none" placeholder="AV, Live Music, Floral..." />
                                     </div>
                                     
                                     <button className="group w-full py-8 mt-4 bg-primary text-dark font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-white transition-all flex items-center justify-center gap-4">
                                         Send Intent <Send size={14} className="group-hover:translate-x-2 transition-transform" />
                                     </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default EventsPage
