'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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

            <div className="container mx-auto px-4 py-32 flex flex-col lg:flex-row gap-16">

                {/* Info Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:w-1/3"
                >
                    <span className="text-primary font-serif italic text-2xl mb-2 block">Book a Table</span>
                    <h1 className="text-5xl font-serif text-white mb-8">Make a Reservation</h1>
                    <p className="text-white/60 mb-8 leading-relaxed">
                        Secure your spot at Sluch Restaurant. Whether it is a romantic dinner, a business lunch, or a family celebration, we are ready to serve you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <span className="text-primary text-xl">📍</span>
                            <div>
                                <h4 className="text-white font-serif text-lg">Location</h4>
                                <p className="text-white/50">123 Culinary Avenue, Food City, FC 90210</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-primary text-xl">📞</span>
                            <div>
                                <h4 className="text-white font-serif text-lg">Phone</h4>
                                <p className="text-white/50 text-xl font-light hover:text-primary transition-colors cursor-pointer">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-primary text-xl">⏰</span>
                            <div>
                                <h4 className="text-white font-serif text-lg">Hours</h4>
                                <p className="text-white/50">Mon-Sun: 11:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:w-2/3 bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl"
                >
                    {!submitted ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/40">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/40">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="+1 (555) 000-0000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/40">Date</label>
                                    <input
                                        type="date"
                                        name="date"
                                        required
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/40">Time</label>
                                    <select
                                        name="time"
                                        required
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                                        value={formData.time}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Time</option>
                                        <option value="17:00">5:00 PM</option>
                                        <option value="18:00">6:00 PM</option>
                                        <option value="19:00">7:00 PM</option>
                                        <option value="20:00">8:00 PM</option>
                                        <option value="21:00">9:00 PM</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/40">Guests</label>
                                    <select
                                        name="guests"
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors [color-scheme:dark]"
                                        value={formData.guests}
                                        onChange={handleChange}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                                            <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                                        ))}
                                        <option value="more">More than 8</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-wider text-white/40">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-wider text-white/40">Special Request</label>
                                <textarea
                                    name="request"
                                    rows="3"
                                    className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Allergies, special occasion, seat preference..."
                                    value={formData.request}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-primary/50"
                            >
                                Confirm Booking
                            </button>
                        </form>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20"
                        >
                            <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                                ✓
                            </div>
                            <h3 className="text-3xl font-serif text-white mb-4">Reservation Received!</h3>
                            <p className="text-white/60 mb-8">
                                Thank you, {formData.name}. We have received your request for {formData.guests} people on {formData.date} at {formData.time}.<br />
                                You will receive a confirmation email shortly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="text-primary hover:text-white underline underline-offset-4"
                            >
                                Make another reservation
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>

            <Footer />
        </div>
    )
}

export default ReservationPage
