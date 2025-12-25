'use client'
import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const pathname = usePathname();

    const Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "About", link: "/about" },
        { name: "Reservation", link: "/reservation" }, // Added Reservation here too
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
                            <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100} className='w-32' />
                        </div>
                        <nav className='flex flex-col gap-6 items-start'>
                            {Links.map((link, index) => (
                                <Link
                                    href={link.link}
                                    key={index}
                                    className={`text-2xl font-serif ${pathname === link.link ? 'text-primary pl-4 border-l-2 border-primary' : 'text-white/70 hover:text-white'} transition-all`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    <div className='mb-10 space-y-8'>
                        <div>
                            <h3 className='text-xl font-serif text-white mb-4'>Visit Us</h3>
                            <div className='space-y-2 text-sm text-white/60'>
                                <p>123 Main Street, Anytown, USA</p>
                                <p>Daily: 9am - 8pm</p>
                                <p>Sluch@resturant.com</p>
                            </div>
                        </div>
                        <div className='bg-primary/10 p-4 rounded-xl border border-primary/20 text-center'>
                            <span className='text-sm text-primary uppercase tracking-widest block mb-1'>Book A Table</span>
                            <Link href="/reservation" className='text-2xl font-serif text-primary hover:text-white transition-colors block'>+1 234 567 890</Link>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav