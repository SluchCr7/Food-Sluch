'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Nav = () => {
    const pathname = usePathname()
    const Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "Ordering", link: "/ordering" },
        { name: "Private Events", link: "/events" },
        { name: "Our Story", link: "/about" },
        { name: "Gallery", link: "/gallery" },
        { name: "Journal", link: "/offers" },
        { name: "Contact", link: "/contact" },
    ]
    return (
        <nav className='flex flex-row items-center gap-10'>
            {Links.map((link, index) => (
                <Link
                    href={link.link}
                    key={index}
                    className={`
                        relative font-medium text-[10px] uppercase tracking-[0.2em] text-white/70 hover:text-primary transition-all duration-500
                        ${pathname === link.link ? 'text-primary' : ''}
                    `}
                >
                    <span className="relative">
                        {link.name}
                        {pathname === link.link && (
                            <motion.div
                                layoutId="nav-underline"
                                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </span>
                </Link>
            ))}
        </nav>
    )
}

export default Nav