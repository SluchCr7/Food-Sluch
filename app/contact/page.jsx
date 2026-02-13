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
                        We had love to hear from you
                    </p>
                </div>
            </section>

            <section className="py-20 container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mb-24">

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
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">📍</span>
                                <h4 className="text-xl font-serif text-white mb-2">Location</h4>
                                <p className="text-white/50 text-sm">123 Culinary Avenue<br />Food City, FC 90210</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">📞</span>
                                <h4 className="text-xl font-serif text-white mb-2">Phone</h4>
                                <p className="text-white/50 text-sm">Booking: +1 (555) 123-4567<br />Office: +1 (555) 987-6543</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-primary/50 transition-colors group">
                                <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform duration-300">✉️</span>
                                <h4 className="text-xl font-serif text-white mb-2">Email</h4>
                                <p className="text-white/50 text-sm">info@sluchrestaurant.com<br />events@sluchrestaurant.com</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-sm border border-white/5 hover:border-primary/50 transition-colors group">
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
                        className="bg-accent/30 p-8 rounded-sm border border-white/10"
                    >
                        <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-dark/50 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-dark/50 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-white/30"
                            />
                            <textarea
                                rows="4"
                                placeholder="Your Message"
                                className="w-full bg-dark/50 border border-white/10 rounded-sm p-4 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-white/30"
                            ></textarea>
                            <Button
                                type="button"
                                variant="primary"
                                className="w-full"
                            >
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[400px] border border-white/10 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979146!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    ></iframe>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default ContactPage
