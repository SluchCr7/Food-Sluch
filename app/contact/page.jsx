'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const ContactPage = () => {
    return (
        <div className="bg-dark min-h-screen text-white/90">
            <Header />

            {/* Hero */}
            <section className="relative h-[40vh] flex items-center justify-center bg-accent overflow-hidden">
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* Gradients */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-4"
                    >
                        Get in Touch
                    </motion.h1>
                    <p className="text-lg md:text-xl text-primary font-light">
                        We'd love to hear from you
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="space-y-12"
                    >
                        <div>
                            <h3 className="text-3xl font-serif text-white mb-6 heading-decoration">Contact Information</h3>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                Have a question about our menu, private events, or just want to say hello? Drop us a message or visit us.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">📍</span>
                                <h4 className="text-xl font-serif text-white mb-2">Location</h4>
                                <p className="text-white/50 text-sm">123 Culinary Avenue<br />Food City, FC 90210</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">📞</span>
                                <h4 className="text-xl font-serif text-white mb-2">Phone</h4>
                                <p className="text-white/50 text-sm">Booking: +1 (555) 123-4567<br />Office: +1 (555) 987-6543</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">✉️</span>
                                <h4 className="text-xl font-serif text-white mb-2">Email</h4>
                                <p className="text-white/50 text-sm">info@sluchrestaurant.com<br />events@sluchrestaurant.com</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">⏰</span>
                                <h4 className="text-xl font-serif text-white mb-2">Hours</h4>
                                <p className="text-white/50 text-sm">Daily: 11:00 AM - 11:00 PM<br />Happy Hour: 4:00 PM - 7:00 PM</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Simple Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="bg-accent/30 p-8 rounded-2xl border border-white/10"
                    >
                        <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors"
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full bg-dark/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                            ></textarea>
                            <button
                                type="button"
                                className="w-full bg-white text-dark font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage
