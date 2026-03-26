'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Accordion from '@/components/ui/Accordion'

const FAQPage = () => {
    const faqData = [
        {
            title: "Dress Code",
            content: "We maintain a sophisticated smart-casual dress code. We kindly ask our guests to refrain from wearing sportswear, beachwear, or flip-flops."
        },
        {
            title: "Reservation Policy",
            content: "We recommend booking at least 2 weeks in advance for weekend dinners. For groups larger than 8, please contact our events team via the contact page."
        },
        {
            title: "Dietary Requirements",
            content: "Our culinary team is highly skilled in accommodating allergies and dietary restrictions. Please inform us at the time of booking so we can prepare accordingly."
        },
        {
            title: "Private Dining",
            content: "Yes, we offer two private dining rooms for intimate gatherings and corporate events. Each room accommodates up to 14 guests."
        },
        {
            title: "Valet Parking",
            content: "Complimentary valet parking is available for all guests during lunch and dinner service hours."
        }
    ]

    return (
        <div className="bg-dark min-h-screen text-white selection:bg-primary/30">
            <Header />

            <section className="pt-48 pb-32 container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center mb-24"
                >
                    <span className="text-primary font-serif italic text-xl tracking-[0.4em] uppercase mb-4 block">Essential Knowledge</span>
                    <h1 className="text-6xl md:text-8xl font-display text-white mb-8">FAQs</h1>
                    <p className="text-white/40 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                        Frequently asked questions regarding our service, policies, and dining experience.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {faqData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="luxury-border glass-dark overflow-hidden"
                        >
                            <Accordion title={item.title}>
                                <div className="p-8 border-t border-white/5 space-y-4">
                                     <p className="text-white/50 font-light leading-relaxed italic">
                                         "{item.content}"
                                     </p>
                                </div>
                            </Accordion>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 text-center p-16 luxury-border glass-dark relative overflow-hidden group">
                     <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                     <h4 className="text-white font-display text-2xl mb-4 relative z-10">Still have questions?</h4>
                     <p className="text-white/40 mb-12 font-light max-w-md mx-auto relative z-10">Our concierge team is available daily from 10 AM to 11 PM to assist with your specific needs.</p>
                     <a href="/contact" className="inline-block px-12 py-4 bg-primary text-dark font-bold uppercase tracking-[0.5em] text-[10px] hover:bg-white transition-colors relative z-10">
                         Inquire Now
                     </a>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default FAQPage
