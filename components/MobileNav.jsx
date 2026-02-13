'use client'
import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from './ui/Button'; // Import Button

const MobileNav = () => {
    const pathname = usePathname();

    const Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "About", link: "/about" },
        { name: "Gallery", link: "/gallery" },
        { name: "Reservation", link: "/reservation" },
        { name: "Contact", link: "/contact" },
    ]

    return (
        <div>
            <Sheet>
                <SheetTrigger className="text-white rounded-full p-2 border border-white/20 hover:bg-white/10 transition-colors">
                    <CiMenuFries size={24} />
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-dark border-r border-white/10 text-white pt-12 flex flex-col justify-between">
                    <div>
                        <div className='logo mb-10'>
                            <Image src="/assets/images/logo.svg" alt="logo" width={80} height={80} className='w-24' />
                        </div>
                        <nav className='flex flex-col gap-6 items-start'>
                            {Links.map((link, index) => (
                                <Link
                                    href={link.link}
                                    key={index}
                                    className={`text-2xl font-display ${pathname === link.link ? 'text-primary pl-4 border-l-2 border-primary' : 'text-white/70 hover:text-white'} transition-all`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className='mb-10 space-y-8'>
                        <div>
                            <h3 className='text-xl font-display text-white mb-4'>Visit Us</h3>
                            <div className='space-y-2 text-sm text-white/60 font-light'>
                                <p>123 Culinary Avenue</p>
                                <p>Food City, FC 90210</p>
                                <p>Daily: 11am - 11pm</p>
                                <a href="mailto:info@sluchrestaurant.com" className="hover:text-primary transition-colors">info@sluchrestaurant.com</a>
                            </div>
                        </div>
                        <div className='bg-white/5 p-6 rounded-sm border border-white/10 text-center space-y-4'>
                            <span className='text-xs text-primary uppercase tracking-widest block font-bold'>Reservations</span>
                            <a href="tel:+15551234567" className='text-2xl font-display text-white hover:text-primary transition-colors block'>+1 (555) 123-4567</a>
                            <Button href="/reservation" variant="gold" size="default" className="w-full">
                                Book A Table
                            </Button>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav