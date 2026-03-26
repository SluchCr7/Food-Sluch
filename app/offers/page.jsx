'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'
import { Calendar, Tag, ChevronRight, Mail } from 'lucide-react'

const BlogCard = ({ title, category, date, desc, img, idx }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.15 }}
        viewport={{ once: true }}
        className="luxury-border glass-dark overflow-hidden group cursor-pointer"
    >
        <div className="aspect-[16/10] relative overflow-hidden">
            <Image src={img} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-[2s]" />
            <div className="absolute top-6 left-6 glass-dark px-4 py-2 border border-white/5 backdrop-blur-md">
                 <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-bold">{category}</span>
            </div>
        </div>
        <div className="p-10 relative">
             <div className="flex items-center gap-4 mb-6 text-white/30 text-[10px] uppercase tracking-[0.3em]">
                  <Calendar size={12} className="text-primary/50" /> {date}
             </div>
             <h3 className="text-3xl font-display text-white mb-6 group-hover:text-primary transition-colors duration-500">{title}</h3>
             <p className="text-white/40 font-light text-sm mb-10 leading-relaxed max-w-sm">{desc}</p>
             <div className="flex items-center justify-between">
                  <span className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold group-hover:text-white transition-all">Explore Journey</span>
                  <ChevronRight size={14} className="text-primary group-hover:translate-x-2 transition-transform" />
             </div>
        </div>
    </motion.div>
)

const OffersPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            {/* --- Hero --- */}
            <section className="relative pt-48 pb-32 border-b border-white/5 overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl mx-auto">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} className="max-w-2xl">
                        <span className="text-primary font-serif italic text-xl tracking-[0.4em] uppercase mb-4 block">The Journal</span>
                        <h1 className="text-7xl md:text-9xl font-display text-white mb-8">Exclusive <br /><span className="text-primary italic">Narratives</span></h1>
                        <p className="text-white/50 font-light text-lg italic leading-relaxed">
                            Stay informed on seasonal menu launches, exclusive tasting events, and the philosophy behind our craft.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Offers --- */}
            <section className="py-24 bg-primary/[0.02]">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-8 mb-16 overflow-x-auto no-scrollbar pb-4 border-b border-white/5">
                        {["All Stories", "Tastings", "Inside the Kitchen", "Seasonal Highlights", "Special Offers"].map((f, i) => (
                             <button key={i} className={`text-[10px] uppercase tracking-[0.4em] whitespace-nowrap transition-all ${i === 0 ? 'text-primary' : 'text-white/30 hover:text-white'}`}>
                                 {f}
                                 {i === 0 && <div className="h-px bg-primary mt-4" />}
                             </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Spring Awakening Tasting", category: "Tasting", date: "MAR 20 2024", desc: "A 9-course sensory exploration of the first spring harvests, featuring rare wild asparagus and early truffles.", img: "/assets/images/menu-seabass.png" },
                            { title: "The Art of Wagyu Pairing", category: "Inside the Kitchen", date: "FEB 15 2024", desc: "Chef Marcus shares his secrets for selecting the perfect vintage to complement the richness of A5 Kagoshima Wagyu.", img: "/assets/images/hero_signature_dish_1774544880233.png" },
                            { title: "Sunday Brunch Revival", category: "Special Offers", date: "JAN 28 2024", desc: "Redefining the afternoon meal with free-flowing boutique Champagne and bespoke oyster selections.", img: "/assets/images/interior-bar.png" },
                            { title: "Sensory Design Philosophy", category: "Inside the Kitchen", date: "JAN 10 2024", desc: "An interview with our interior architect on the balance of light and shadow within the Sluch main dining room.", img: "/assets/images/interior-luxury.png" }
                        ].map((post, idx) => (
                            <BlogCard key={idx} {...post} idx={idx} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Newsletter --- */}
            <section className="py-48 relative border-t border-white/5 group">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
                         <Mail size={48} className="text-primary/10 mx-auto mb-12 group-hover:scale-110 transition-transform duration-1000" />
                         <h2 className="text-5xl md:text-7xl font-display text-white mb-8">Join the Inner Circle</h2>
                         <p className="text-white/40 mb-16 font-light max-w-xl mx-auto italic leading-relaxed text-lg">
                             Subscribe to receive personal invitations to our secret tasting events and early access to seasonal reservations.
                         </p>
                         
                         <form className="flex flex-col md:flex-row gap-6 max-w-2xl mx-auto border-b border-white/10 pb-12 group focus-within:border-primary transition-all">
                              <input type="email" placeholder="YOUR EMAIL ADDRESS" className="bg-transparent text-white focus:outline-none flex-grow text-center md:text-left text-xl font-display tracking-[0.2em] placeholder:text-white/10 italic" />
                              <button className="text-primary uppercase tracking-[0.5em] text-[10px] font-bold hover:text-white transition-all">Submit Invitation</button>
                         </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default OffersPage
