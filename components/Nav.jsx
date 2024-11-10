import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {Link as ScrollLink} from 'react-scroll'
const Nav = () => {
    const Links = [
        { name: "Home", link: "Home", offset: -100 },
        { name: "About", link: "about", offset: -80 },
        { name: "Menu", link: "menu", offset: 0 },
        { name: "Contact", link: "contact", offset: 80 },
    ]
  return (
    <div className='flex flex-row items-center gap-7'>
        {Links.map((link, index) => (
            <ScrollLink
                to={link.link}
                key={index}
                className={`cursor-pointer`}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                >
                {link.name}
            </ScrollLink>
        ))}
    </div>
  )
}

export default Nav