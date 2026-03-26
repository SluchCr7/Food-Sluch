'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/ui/Button'
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react'

const ContactPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            {/* --- Hero --- */}
            <section className="relative h-[60vh] flex items-center pt-24 overflow-hidden">
                <Image
                    src="/assets/images/interior-luxury.png"
                    alt="Contact"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/60 to-dark" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-primary font-serif italic text-xl tracking-[0.4em] uppercase mb-4 block">Concierge Service</span>
                        <h1 className="text-6xl md:text-9xl font-display text-white mb-6">
                            Contact <br /> <span className="text-primary italic">Sluch</span>
                        </h1>
                        <div className="w-32 h-px bg-primary" />
                    </motion.div>
                </div>
            </section>

            {/* --- Info & Form --- */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    
                    {/* Info */}
                    <div className="lg:col-span-5 space-y-16">
                        <div className="space-y-8">
                             <div className="flex gap-8 items-start group">
                                <MapPin className="text-primary w-6 h-6 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Location</h4>
                                    <p className="text-xl font-display text-white">123 Culinary Boulevard, Metropolis</p>
                                </div>
                             </div>
                             <div className="flex gap-8 items-start group">
                                <Phone className="text-primary w-6 h-6 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Reservations</h4>
                                    <p className="text-xl font-display text-white">+1 (555) 123-4567</p>
                                </div>
                             </div>
                             <div className="flex gap-8 items-start group">
                                <Mail className="text-primary w-6 h-6 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Inquiries</h4>
                                    <p className="text-xl font-display text-white">concierge@sluch.com</p>
                                </div>
                             </div>
                             <div className="flex gap-8 items-start group">
                                <Clock className="text-primary w-6 h-6 mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                                <div>
                                    <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/30 mb-2">Service Hours</h4>
                                    <p className="text-xl font-display text-white">Daily: 12:00 PM — 11:00 PM</p>
                                </div>
                             </div>
                        </div>

                        <div className="p-10 luxury-border glass-dark">
                             <h5 className="text-primary font-serif italic text-lg mb-4">Valet Services</h5>
                             <p className="text-white/40 font-light leading-relaxed">
                                Complimentary valet parking is available at the main entrance for all our guests. Experience seamless arrival and departure.
                             </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/[0.02] border border-white/10 p-12 md:p-16 relative"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            <h3 className="text-4xl font-display text-white mb-12">Send an Inquiry</h3>
                            
                            <form className="space-y-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Your Name</label>
                                        <input type="text" className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 font-light" placeholder="e.g. John Doe" />
                                    </div>
                                    <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                        <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Email Address</label>
                                        <input type="email" className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 font-light" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Subject</label>
                                    <select className="w-full bg-transparent text-white focus:outline-none appearance-none font-light">
                                        <option>General Inquiry</option>
                                        <option>Private Event</option>
                                        <option>Press & Media</option>
                                        <option>Careers</option>
                                    </select>
                                </div>
                                <div className="border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Message</label>
                                    <textarea rows="4" className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 font-light resize-none" placeholder="How can we assist you?" />
                                </div>
                                
                                <button className="group flex items-center gap-4 text-primary uppercase tracking-[0.5em] text-[10px] font-bold hover:text-white transition-colors duration-500">
                                    Submit Message <Send className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Map */}
                <div className="mt-32 aspect-video w-full luxury-border grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-1000 overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531615!3d-37.81627973792326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e5610!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1651234567890!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage

