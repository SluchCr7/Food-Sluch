'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
import { Calendar, Clock, Users, User, Mail, Phone, MessageSquare } from 'lucide-react'

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
        // Simulate API call
        setTimeout(() => {
            setSubmitted(true)
        }, 1000)
    }

    return (
        <div className="bg-dark min-h-screen text-white/90">
            <Header />

            <section className="relative pt-40 pb-20 container mx-auto px-4 min-h-screen flex items-center">
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/3 pt-10"
                    >
                        <SectionTitle
                            subtitle="Book a Table"
                            title="Reserve Your Spot"
                            align="left"
                            description="Secure your dining experience at Sluch. For parties larger than 8, please contact us directly."
                        />

                        <div className="space-y-8 mt-12">
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary text-xl">📍</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-lg mb-1">Location</h4>
                                    <p className="text-white/50 text-sm">123 Culinary Avenue, Food City, FC 90210</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary text-xl">📞</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-lg mb-1">Phone</h4>
                                    <p className="text-white/50 text-xl font-light hover:text-primary transition-colors cursor-pointer">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 group">
                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-primary/20 transition-colors">
                                    <span className="text-primary text-xl">⏰</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-lg mb-1">Hours</h4>
                                    <p className="text-white/50 text-sm">Mon-Sun: 11:00 AM - 11:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="lg:w-2/3"
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-sm shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                            <AnimatePresence mode="wait">
                                {!submitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                                        placeholder="Full Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                                        placeholder="Phone Number"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                                    <input
                                                        type="date"
                                                        name="date"
                                                        required
                                                        className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark] placeholder:text-white/20"
                                                        value={formData.date}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                                    <select
                                                        name="time"
                                                        required
                                                        className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark] appearance-none"
                                                        value={formData.time}
                                                        onChange={handleChange}
                                                    >
                                                        <option value="" className="text-white/20">Select Time</option>
                                                        <option value="17:00">5:00 PM</option>
                                                        <option value="18:00">6:00 PM</option>
                                                        <option value="19:00">7:00 PM</option>
                                                        <option value="20:00">8:00 PM</option>
                                                        <option value="21:00">9:00 PM</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                                    <select
                                                        name="guests"
                                                        className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors [color-scheme:dark] appearance-none"
                                                        value={formData.guests}
                                                        onChange={handleChange}
                                                    >
                                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                                            <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                                                        ))}
                                                        <option value="more">More than 8</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/20"
                                                        placeholder="Email Address"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-6 w-4 h-4 text-white/40" />
                                                <textarea
                                                    name="request"
                                                    rows="3"
                                                    className="w-full bg-dark/40 border border-white/10 rounded-sm py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none placeholder:text-white/20"
                                                    placeholder="Special Request (Allergies, Occasion...)"
                                                    value={formData.request}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>

                                        <Button
                                            variant="gold"
                                            size="lg"
                                            className="w-full"
                                        >
                                            Confirm Booking
                                        </Button>
                                    </motion.form>
                                ) : (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h3 className="text-3xl font-display text-white mb-4">Reservation Confirmed!</h3>
                                        <p className="text-white/60 mb-8 max-w-md mx-auto leading-relaxed">
                                            Thank you, <span className="text-white">{formData.name}</span>. We look forward to hosting you on <span className="text-white">{formData.date}</span> at <span className="text-white">{formData.time}</span>.
                                            A confirmation email has been sent to you.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setSubmitted(false)}
                                        >
                                            Make Another Reservation
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

function CheckCircle2({ size = 24, className = "" }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
    )
}

export default ReservationPage
