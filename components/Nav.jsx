'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
    const pathname = usePathname()
    const Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "Our Story", link: "/about" }, // Changed "About" to "Our Story" for premium feel
        { name: "Gallery", link: "/gallery" },
        { name: "Contact", link: "/contact" },
    ]
    return (
        <nav className='flex flex-row items-center gap-8'>
            {Links.map((link, index) => (
                <Link
                    href={link.link}
                    key={index}
                    className={`
                        relative font-medium text-xs uppercase tracking-widest text-white/80 hover:text-white transition-colors duration-300
                        after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full
                        ${pathname === link.link ? 'text-white after:w-full' : ''}
                    `}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    )
}

export default Nav