'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Star, Quote, Plus } from 'lucide-react'

const ReviewCard = ({ name, content, rating, date, idx }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: idx * 0.1 }}
        viewport={{ once: true }}
        className="luxury-border glass-dark p-8 md:p-12 relative group"
    >
        <Quote className="absolute top-8 right-8 text-primary/10 w-12 h-12 -z-10 group-hover:scale-110 transition-transform duration-1000" />
        <div className="flex gap-1 mb-6 text-primary">
            {[...Array(rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
        </div>
        <p className="text-white/60 text-lg mb-10 leading-relaxed font-light italic">"{content}"</p>
        <div className="flex items-center gap-6 border-t border-white/5 pt-8">
             <div className="w-12 h-12 bg-white/[0.03] rounded-full border border-white/10 flex items-center justify-center font-display text-white text-sm">
                  {name[0]}
             </div>
             <div>
                 <h5 className="text-white font-display text-lg mb-1">{name}</h5>
                 <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">{date}</span>
             </div>
        </div>
    </motion.div>
)

const ReviewsPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            {/* --- Hero --- */}
            <section className="relative pt-48 pb-32 border-b border-white/5 overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <span className="text-primary font-serif italic text-xl tracking-[0.4em] uppercase mb-4 block">Social Proof</span>
                        <h1 className="text-7xl md:text-9xl font-display text-white mb-8">The Accolades</h1>
                        <p className="text-white/40 font-light text-lg max-w-2xl mx-auto italic leading-relaxed">
                            A reflection of our commitment to sensory perfection, shared by our most discerning guests.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Grid --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {[
                        { name: "Julianna Rossi", content: "The balance of flavours in the Wagyu was extraordinary. Truly a world-class dining experience in our own city.", rating: 5, date: "MAR 2024" },
                        { name: "Marcus Thorne", content: "Ambient perfection. Every detail, from the acoustics to the lighting, was meticulously considered.", rating: 5, date: "FEB 2024" },
                        { name: "Elena Volkov", content: "Not just a meal, but a meticulously choreographed performance. The service was invisible yet attentive.", rating: 5, date: "JAN 2024" },
                        { name: "David Chen", content: "The tasting menu was a journey through the seasons. I've never tasted a seabass this delicate.", rating: 5, date: "DEC 2023" },
                        { name: "Sarah Jenkins", content: "A sanctuary of luxury. We had an intimate anniversary dinner that exceeded every possible expectation.", rating: 5, date: "NOV 2023" },
                        { name: "The Gourmet Guide", content: "Standard-setting culinary artistry that places Sluch in the upper echelons of modern gastronomy.", rating: 5, date: "OCT 2023" }
                    ].map((review, idx) => (
                        <ReviewCard key={idx} {...review} idx={idx} />
                    ))}
                </div>

                <div className="mt-32 text-center p-20 luxury-border glass-dark max-w-4xl mx-auto relative group">
                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     <h3 className="text-3xl font-display text-white mb-6 underline decoration-primary decoration-1 underline-offset-8">Share Your Experience</h3>
                     <p className="text-white/40 mb-12 font-light max-w-md mx-auto relative z-10 italic">Your insights allow us to refine our performance. We would be honored to hear from you.</p>
                     <button className="flex items-center gap-4 mx-auto text-primary uppercase tracking-[0.5em] text-[10px] font-bold hover:text-white transition-all">
                        Write a Review <Plus size={14} className="group-hover:rotate-90 transition-transform" />
                     </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ReviewsPage
