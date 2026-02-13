'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'

const PrivacyPage = () => {
    return (
        <div className="bg-dark min-h-screen">
            <Header />
            <div className="pt-32 pb-24 container mx-auto px-4 max-w-4xl text-white/80 leading-relaxed font-light">
                <SectionTitle
                    subtitle="Privacy Policy"
                    title="Your Data & Privacy"
                    className="mb-16"
                />

                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-display text-white mb-4">1. Information We Collect</h3>
                        <p>We collect information directly from you when you register on our site, place an order, subscribe to our newsletter, respond to a survey or fill out a form.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-display text-white mb-4">2. Usage of Information</h3>
                        <p>Any of the information we collect from you may be used to personalize your experience, improve our website, improve customer service, process transactions, and send periodic emails.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-display text-white mb-4">3. Protection of Information</h3>
                        <p>We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-display text-white mb-4">4. Cookies</h3>
                        <p>We use cookies to help us remember and process the items in your shopping cart, understand and save your preferences for future visits, and compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-display text-white mb-4">5. Third Party Disclosure</h3>
                        <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPage
