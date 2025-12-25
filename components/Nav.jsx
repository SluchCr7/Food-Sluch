'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Nav = () => {
    const pathname = usePathname()
    const Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/menu" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ]
  return (
    <nav className='flex flex-row items-center gap-8'>
        {Links.map((link, index) => (
            <Link
                href={link.link}
                key={index}
                className={`relative font-medium text-sm text-white/80 hover:text-white transition-colors duration-300 ${pathname === link.link ? 'active' : ''}`}
            >
                {link.name}
            </Link>
        ))}
    </nav>
  )
}

export default Nav