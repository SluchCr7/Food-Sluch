import React, { useState } from 'react'
import Intro from './Intro';
import Image from 'next/image';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { motion } from 'framer-motion';
import Fadein from '@/lib/Variants';
const Testimenation = () => {
    const tweets = [
        {
            id: 1,
            img: "/assets/images/Amir.jpg",
            text : "This is an amazing place. I will come back here again and again. I will come back here again and again. I ate a very delicious food here. "
        },
        {
            id: 2,
            img: "/assets/images/testi-avatar.jpg",
            text : "This is an amazing place. I will come back here again and again. I will come back here again and again. I ate a very delicious food here. "
        },
        {
            id: 3,
            img: "/assets/images/Galal.jpg",
            text : "I will return to this restaurant every week because it offers a wonderful dining experience and I am happy with this interesting experience... The service and chefs are at the highest level. I thank my friend who introduced me to this place."
        },
        {
            id: 4,
            img: "/assets/images/Abdo.jpg",
            text : "I love this restaurant because it is the best dining out experience and the food feels like very healthy home cooked food"
        },
        {
            id: 5,
            img: "/assets/images/Amr.jpg",
            text : "The service is great, even with the relatively high prices, but he applies the saying of the best value for the price, as the food is wonderful and it is prepared according to your desire. Although I was not convinced to eat sushi, but when I ate it, I liked it very much. "
        },
        {
            id: 6, 
            img: "/assets/images/Home.jpg",
            text : "This restaurant is very beautiful and the tables are suitable for the appearance of the restaurant and the entertainment shows are beautiful. As for the food... I give it 8/10, as the food is wonderful and tastes good and you feel as if you are eating healthy food in your home, but the best thing I ate was camel meat and shrimp. "
        }
    ]
    const [tweet, setTweet] = useState(tweets[0])
  const handleprev = () => {
    if (tweet.id === 1) {
      setTweet(tweets[tweets.length - 1])
    } else {
      setTweet(tweets[tweet.id - 2])
    }
  }

  const handleNext = () => {  

    if (tweet.id === tweets.length) {
      setTweet(tweets[0])  
    }
    else {
      setTweet(tweets[tweet.id++])
    }
  }
  return (
    <div className='testimenation relative w-full min-h-[90vh] py-[5rem] bg-accent z-[999]'>
        <div className='container mx-auto'>
            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='intro flex flex-col items-center text-center gap-3'>
                <Intro title='Testimonial' text='What Our Client Say' subtext='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.'/>
            </motion.div>
            <motion.div variants={Fadein("up" , 0.5)} initial="hidden" whileInView={"visible"} viewport={{ once: false, amount: 0.3 }} className='grid grid-cols-1 gap-7 py-[5rem]'>
                <div className='card flex flex-col items-center gap-7'>
                    <p className='paragraph text-center w-[80%] text-secondary/50 text-xl lg:text-4xl'><span className='text-primary text-2xl lg:text-5xl '>&#8220;</span>{tweet.text}<span className='text-primary text-2xl lg:text-5xl'>&#8221;</span></p>
                    <Image src={tweet.img} alt="avatar" width={100} height={100} className='w-[100px] h-[100px] rounded-full'/>
                </div>
            </motion.div>
            <div className='arrows flex flex-row items-center justify-center gap-12'>
                <span className='icon border-[1px] border-primary p-3 bg-transparent text-primary' onClick={handleprev}><FaArrowLeft /></span>
                <span className='icon border-[1px] border-primary p-3 bg-transparent text-primary' onClick={handleNext}><FaArrowRight /></span>
            </div>
        </div>
    </div>
  )
}

export default Testimenation