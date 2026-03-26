'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react'

const ReservationPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        request: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTimeout(() => setSubmitted(true), 1500)
    }

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            <section className="relative min-h-screen flex items-center pt-32 pb-20">
                {/* Background Decor */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/images/interior-luxury.png"
                        alt="Reservation background"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="lg:w-1/2 space-y-12"
                        >
                            <div className="space-y-6">
                                <span className="text-primary font-serif italic text-xl tracking-widest uppercase block">Exclusivity Awaits</span>
                                <h1 className="text-6xl md:text-8xl font-display text-white leading-[1.1]">
                                    Reserve Your <span className="text-primary italic">Experience</span>
                                </h1>
                                <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl">
                                    Join us for an unforgettable evening of culinary artistry. For groups larger than 8, please contact our concierge directly.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12 border-t border-white/10">
                                <div>
                                    <h4 className="text-white font-display text-lg mb-4 uppercase tracking-widest">General Booking</h4>
                                    <p className="text-white/40 font-light">+1 (555) 123-4567</p>
                                    <p className="text-white/40 font-light">reservations@sluch.com</p>
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-lg mb-4 uppercase tracking-widest">Private Events</h4>
                                    <p className="text-white/40 font-light">+1 (555) 987-6543</p>
                                    <p className="text-white/40 font-light">events@sluch.com</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="lg:w-1/2 w-full"
                        >
                            <div className="glass-dark p-8 md:p-12 luxury-border relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                                
                                <AnimatePresence mode="wait">
                                    {!submitted ? (
                                        <motion.form
                                            key="reserve-form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-8"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="group border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Full Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        placeholder="e.g. Marcus Aurelius"
                                                        className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 font-light"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="group border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Email Address</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        placeholder="m.aurelius@empire.com"
                                                        className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 font-light"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div className="group border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Date</label>
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        required
                                                        className="w-full bg-transparent text-white focus:outline-none [color-scheme:dark] font-light"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="group border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Time</label>
                                                    <select
                                                        name="time"
                                                        required
                                                        className="w-full bg-transparent text-white focus:outline-none appearance-none font-light"
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="">Select Time</option>
                                                        <option value="18:00">06:00 PM</option>
                                                        <option value="19:00">07:00 PM</option>
                                                        <option value="20:00">08:00 PM</option>
                                                        <option value="21:00">09:00 PM</option>
                                                    </select>
                                                </div>
                                                <div className="group border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                                    <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Guests</label>
                                                    <select
                                                        name="guests"
                                                        className="w-full bg-transparent text-white focus:outline-none appearance-none font-light"
                                                        value={formData.guests}
                                                        onChange={handleChange}
                                                    >
                                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} Guests</option>)}
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="group border-b border-white/10 focus-within:border-primary transition-colors pb-2">
                                                <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-2 block">Special Request</label>
                                                <textarea
                                                    name="request"
                                                    rows="2"
                                                    placeholder="Allergies, birthday, anniversary..."
                                                    className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/10 font-light resize-none"
                                                    value={formData.request}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full py-6 mt-4 bg-primary text-dark font-bold uppercase tracking-[0.4em] text-[10px] transition-all duration-500 hover:tracking-[0.6em] hover:bg-white"
                                            >
                                                Secure My Table
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success-message"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-20"
                                        >
                                            <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
                                                <CheckCircle2 size={48} strokeWidth={1} />
                                            </div>
                                            <h3 className="text-4xl font-display text-white mb-6">Reservation Received</h3>
                                            <p className="text-white/50 mb-12 max-w-sm mx-auto font-light leading-relaxed">
                                                Thank you, <span className="text-white">{formData.name}</span>. Our concierge will contact you shortly to confirm your booking for <span className="text-white">{formData.date}</span>.
                                            </p>
                                            <Button variant="outline" onClick={() => setSubmitted(false)}>Make Another</Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ReservationPage

