import React from 'react'
import Intro from './Intro'
import {Select , SelectGroup, SelectValue, SelectTrigger, SelectContent, SelectLabel, SelectItem} from '@/components/ui/select'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion'
import Image from 'next/image'
import Fadein from '@/lib/Variants'
import CheckIcon from '@mui/icons-material/Check';
const Contact = () => {
    const Twoinputs = [
        {
            id: 1,
            name: "Name",
            type: "text",
            placeholder: "Your Name",
        },
        {
            id: 2,
            name: "Phone",
            type: "number",
            placeholder: "Your phone",
        },
    ]
    const social = [
        { id: 1, icon: <FacebookIcon /> },
        { id: 2, icon: <TwitterIcon /> },
        { id: 3, icon: <InstagramIcon /> },
        { id: 4, icon: <YouTubeIcon /> },
    ]
    const Persons = [
        {
            id: 1,
            num : "1 person",
        },
        {
            id: 2,
            num : "2 person",
        },
        {
            id: 3,
            num : "3 person",
        },
        {
            id: 4,
            num : "4 person",
        },
        {
            id: 5,
            num : "5 person",
        },
        {
            id: 6,
            num : "6 person",
        },
        {
            id: 7,
            num: "More than 6 person",
        }
    ]
    const Time = [
        {
            id: 1,
            time : "8:00 - 9:00",
        },
        {
            id: 2,
            time : "9:00 - 10:00",
        },
        {
            id: 3,
            time: "11:00 - 12:00",
        },
        {
            id: 4,
            time: "12:00 - 13:00",
        },
        {
            id: 5,
            time: "13:00 - 14:00",
        },
        {
            id: 6,
            time: "14:00 - 15:00",
        },
        {
            id: 7,
            time: "15:00 - 16:00",
        },
        {
            id: 8,
            time: "16:00 - 17:00",
        },
        {
            id: 9,
            time: "17:00 - 18:00",
        },
        {
            id: 10,
            time: "18:00 - 19:00",
        },
        {
            id: 11,
            time: "19:00 - 20:00",
        },
        {
            id: 12,
            time: "20:00 - 21:00",
        },
        {
            id: 13,
            time: "21:00 - 22:00",
        }
    ]
    const [poppup , setPoppup] = React.useState(false)
    const handleClick = () => {
        // console.log("clicked")
        let input = document.querySelector("input")
        let textarea = document.querySelector("textarea")
        let Select = document.querySelector("Select")
        if (input.value && textarea.value) {
            setPoppup(true)
            input.value = ""
            textarea.value = ""
            setInterval(() => {
                setPoppup(false)
            } , 2000)
        }
        else {
            setPoppup(false)
        }
    }
  return (
    <div className='contact w-full relative min-h-[90vh] py-[5rem] bg-accent-hover'>
        <div className='container mx-auto'>
            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='intro flex flex-col items-center text-center w-full gap-3'>
                <Intro title='Contact Us' text='Get in Touch' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Fugiat quia, nisi nemo ipsam vel consequatur maxime'/>
            </motion.div>
            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='flex flex-col xl:flex-row relative items-center w-full my-[2rem]'>
                <div className ="absolute top-[-20px] left-[10px] z-[999]">
                    <Image src="/assets/images/pin.png" alt="pin" width={500} height={500} className='w-[30px] h-[30px]'/>
                </div>
                <div className='w-full xl:w-[70%] flex flex-col items-center p-5 bg-accent'>
                    <div className='w-full flex flex-col items-center gap-3'>
                        <h1 className='text-xl lg:text-3xl font-bold text-primary uppercase tracking-[2px]'>Book a table</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-full'>
                        
                            {
                                Twoinputs.map((input) => (
                                    <div className='flex flex-col items-start gap-2' key={input.id}>
                                        <label className='text-sm text-primary'>{input.name}</label>
                                        <input className='w-full p-3  border-[1px] border-primary bg-accent-hover' type={input.type} placeholder={input.placeholder} />
                                    </div>
                                ))
                            }
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-full'>
                            <div className='flex flex-col items-start gap-3'>                                  
                                <Select className="flex flex-col items-start gap-3 w-full py-3">
                                    <label className='text-white/60 text-sm'>Services</label>
                                    <SelectTrigger className='w-full'>
                                        <SelectValue placeholder="Select an Service" />
                                        {/* <SelectIcon className="w-4 h-4 ml-2" /> */}
                                        <SelectContent>
                                            <SelectGroup>
                                                {
                                                    Persons.map((person) => (
                                                        <SelectItem key={person.id} value={person.id}>{person.num}</SelectItem>
                                                    ))
                                                }
                                            </SelectGroup>
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <label className='text-white/60 text-sm'>Date</label> 
                                <input type="date" className='w-full p-3  border-[1px] border-primary bg-accent-hover' />
                            </div>
                            <div className='flex flex-col items-start gap-3'>
                                <Select className="flex flex-col items-start gap-3 w-full py-3">
                                    <label className='text-white/60 text-sm'>Time</label>
                                    <SelectTrigger className=''>
                                        <SelectValue placeholder="Select an Service" />
                                        {/* <SelectIcon className="w-4 h-4 ml-2" /> */}
                                        <SelectContent>
                                        <SelectGroup>
                                            {
                                                Time.map((time) => (
                                                    <SelectItem key={time.id} value={time.id}>{time.time}</SelectItem>
                                                ))
                                            }
                                        </SelectGroup>
                                        </SelectContent>
                                    </SelectTrigger>
                                </Select>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-start gap-3'>
                            <label className='text-white/60 text-sm'>Message</label>
                            <textarea className='w-full p-3 h-[180px] border-[1px] border-primary bg-accent-hover' placeholder='Your Message' />
                        </div>
                        <div className='w-full'>
                            <button onClick={handleClick} className='btn w-full p-3 border-[1px] border-primary bg-accent-hover text-primary hover:text-white hover:bg-primary hover:border-primary'>Send</button>
                        </div>
                    </div>
                </div>
                <div className='w-full xl:w-[30%] flex flex-col items-center p-5 py-11 gap-10 bg-[url("/assets/images/footer-form-bg.png")] bg-cover bg-center'>
                    <h1 className='text-xl lg:text-3xl font-bold text-primary uppercase tracking-[2px]'>Contact Us</h1>
                    <div className='w-full flex flex-col items-center gap-1'>
                        <span className='text-sm text-white'>Booking Request</span>
                        <h1 className='text-3xl lg:text-2xl text-center  font-bold text-primary uppercase tracking-[2px]'>+123 456 789</h1>
                    </div>
                    <div className="location flex flex-col items-center gap-1">
                        <span className='text-sm text-white'>Location</span>
                        <h1 className='text-3xl lg:text-2xl text-center  font-bold text-primary uppercase tracking-[2px]'>123, Main Street, New York, USA</h1>
                    </div>
                    <div className='work flex flex-col items-center gap-1'>
                        <span className='text-sm text-white'>Working Hours</span>
                        <h1 className='text-3xl lg:text-2xl font-bold text-primary text-center uppercase tracking-[2px]'>Mon - Fri: 9am - 6pm</h1>
                        <h1 className='text-3xl lg:text-2xl font-bold text-primary text-center uppercase tracking-[2px]'>Sat - Sun: 9am - 5pm</h1>
                    </div>
                    <div className='social flex flex-row items-center gap-5'>
                        {
                            social.map((item) => (
                                <div className='flex flex-row items-center gap-7' key={item.id}>
                                    <span className='text-sm text-primary'>{item.icon}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </motion.div>
        </div>
        <div className={`success bg-white p-4 fixed right-0 lg:right-4 top-10 xl:top-16 w-[100%] lg:w-[20%] z-[1000] flex-col xl:flex-row items-center rounded-xl lg:border-l-[8px] border-b-[8px] lg:border-b-0 border-primary gap-3 ${poppup ? 'flex' : 'hidden'}`}>
            <span className='icon bg-primary text-white p-3 w-[30px] h-[30px] rounded-full flex items-center justify-center'><CheckIcon /></span>
            <div className='flex flex-col items-center xl:items-start'>
                <h1 className='text-lg font-bold text-primary'>Thank You!</h1>
                <p className='text-sm text-black'>Your request has been submitted</p>
            </div>
        </div>
    </div>
  )
}

export default Contact