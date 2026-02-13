'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionTitle from '@/components/ui/SectionTitle'
import Accordion from '@/components/ui/Accordion'

const FAQPage = () => {
    const faqData = [
        {
            title: "Do I need to make a reservation?",
            content: "While we do accept walk-ins, we highly recommend making a reservation, especially for dinner service and weekends, to ensure we can accommodate you."
        },
        {
            title: "Is there a dress code?",
            content: "We encourage a smart casual dress code. We want you to feel comfortable, but we ask that you avoid beachwear and activewear in the main dining room."
        },
        {
            title: "Do you offer vegetarian/vegan options?",
            content: "Yes, we have a dedicated selection of vegetarian and vegan dishes on our menu. Please inform your server of any dietary requirements."
        },
        {
            title: "Is the restaurant wheelchair accessible?",
            content: "Absolutely. Our entire restaurant, including restrooms, is fully wheelchair accessible. Please let us know if you require any specific seating arrangements."
        },
        {
            title: "Do you offer private dining?",
            content: "Yes, we have two private dining rooms suitable for groups of 10-30 guests. For larger events, please contact our events team."
        },
        {
            title: "Is parking available?",
            content: "Valet parking is available at the entrance. There is also street parking and a nearby public garage."
        }
    ]

    return (
        <div className="bg-dark min-h-screen">
            <Header />
            <div className="pt-32 pb-24 container mx-auto px-4">
                <SectionTitle
                    subtitle="Common Questions"
                    title="Frequently Asked Questions"
                    className="mb-16"
                />
                <Accordion items={faqData} />
            </div>
            <Footer />
        </div>
    )
}

export default FAQPage
