'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer = () => {
    const FOOTER_LINKS = [
        {
            title: 'Explore',
            links: [
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Menu', href: '/menu' },
                { name: 'Reservation', href: '/reservation' },
                { name: 'Contact', href: '/contact' }
            ]
        },
        {
            title: 'Contact',
            links: [
                { name: '123 Culinary Avenue, Food City', href: '#' },
                { name: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                { name: 'info@sluchrestaurant.com', href: 'mailto:info@sluchrestaurant.com' },
            ]
        },
        {
            title: 'Social',
            links: [
                { name: 'Instagram', href: '#' },
                { name: 'Facebook', href: '#' },
                { name: 'Twitter', href: '#' },
            ]
        }
    ]

    return (
        <footer className='w-full bg-dark border-t border-white/5 pt-20 pb-10'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-col lg:flex-row justify-between gap-16 mb-20'>
                    {/* Brand */}
                    <div className='lg:w-1/3 space-y-6'>
                        <div className="flex items-center gap-3">
                            <Image src="/assets/images/logo.svg" alt="logo" width={60} height={60} className='w-16' />
                            <span className='text-3xl font-serif text-white'>Sluch</span>
                        </div>
                        <p className='text-white/60 leading-relaxed font-light'>
                            Experience the art of dining where tradition meets innovation. <br />
                            Crafting memories, one plate at a time.
                        </p>
                    </div>

                    {/* Links */}
                    <div className='lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-10'>
                        {FOOTER_LINKS.map((section, idx) => (
                            <div key={idx} className="space-y-6">
                                <h4 className="text-xl font-serif text-primary">{section.title}</h4>
                                <ul className="space-y-4">
                                    {section.links.map((link, linkIdx) => (
                                        <li key={linkIdx}>
                                            <Link
                                                href={link.href}
                                                className="text-white/60 hover:text-white transition-colors duration-300 text-sm tracking-wide"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-white/30 text-xs uppercase tracking-widest">
                        &copy; {new Date().getFullYear()} Sluch Restaurant. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer