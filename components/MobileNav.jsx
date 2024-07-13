import React from 'react'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import { CiMenuFries } from "react-icons/ci";
import Link from 'next/link';
import Image from 'next/image';
import {Link as ScrollLink} from 'react-scroll';
const MobileNav = () => {
        const Links = [
        { name: "Home", link: "Home", offset: -100 },
        { name: "About", link: "about", offset: -80 },
        { name: "Menu", link: "menu", offset: 0 },
        { name: "Contact", link: "contact", offset: 80 },
        { name: "Shefs", link: "shefs", offset: 100 },
    ]
    const textInfo = [
        { name: "address", info: "123 Main Street, Anytown, USA" },
        { name: "hours", info: "daily from 9am - 8pm" },
        { name: "email", info: "Sluch@resturant.com" },
        { name: "website", info: "www.SluchRes.com" },
    ]
  return (
    <div>
        <Sheet>
            <SheetTrigger className="text-white rounded-full border-accent border-[1px] ">
                <CiMenuFries />
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-accent border-none flex flex-col items-start pt-[7rem]">
                <div className='logo'>
                    <Image src="/assets/images/logo.svg" alt="logo" width={100} height={100} className='w-full'/>
                </div>
                <nav className='flex flex-col gap-4 items-start justify-center w-full'>
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
                </nav>
                <div className='flex flex-col gap-4 items-center justify-center w-full pt-[4rem]'>
                    <h1 className='text-3xl font-bold'>Visit Us</h1>
                    {textInfo.map((ele, index) => (
                        <span key={index} className='text-sm text-white text-center'>{ele.info}</span>
                    ))}
                </div>
                <div className='Book flex flex-col items-center justify-center w-full pt-[4rem] gap-2'>
                    <span className='text-base text-secondary'>Book A Table</span>
                    <h1 className='text-[1.75rem] text-primary font-bold'>+1 234 567 890</h1>
                </div>
            </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav