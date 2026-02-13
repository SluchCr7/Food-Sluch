'use client'
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import MenuCard from "@/components/ui/MenuCard";
import { ChefHat, Utensils, GlassWater, Star, ArrowRight } from "lucide-react";

// Setup Swiper for menu if needed, or just a grid for simplicity in V1
// I'll stick to a clean grid for Menu first to ensure stability, Swiper can be added if requested specifically for carousel.

export default function Home() {
  return (
    <div className="bg-dark min-h-screen overflow-x-hidden">
      <Hero />

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Image Collage */}
            <div className="w-full lg:w-1/2 relative min-h-[500px]">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 z-10">
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/images/about-chef.png"
                    alt="Chef preparing food"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 z-20 border-8 border-dark">
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/images/hero-slider-3.jpg"
                    alt="Restaurant Interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Decorative Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-primary/20 -z-10 rounded-sm transform rotate-3" />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <SectionTitle
                subtitle="Our Story"
                title="A Culinary Journey Since 1995"
                align="left"
                className="mb-8"
              />
              <p className="text-white/70 text-lg mb-6 leading-relaxed font-light">
                At Sluch, we believe that dining is more than just eating; it is an experience that engages all the senses. From the warm, ambient lighting to the meticulously plated dishes, every detail is curated to transport you to a world of culinary delight.
              </p>
              <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
                Our philosophy is rooted in tradition but driven by innovation. We source only the finest seasonal ingredients to create dishes that tell a story of flavor, texture, and passion.
              </p>
              <Button href="/about" variant="outline">
                Read Full Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights / Services */}
      <section className="py-24 bg-dark-100/50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChefHat className="w-10 h-10 text-primary" />,
                title: "Master Chefs",
                desc: "Award-winning culinary experts crafting perfection in every dish."
              },
              {
                icon: <Utensils className="w-10 h-10 text-primary" />,
                title: "Fresh Ingredients",
                desc: "Farm-to-table produce ensuring the highest quality and taste."
              },
              {
                icon: <GlassWater className="w-10 h-10 text-primary" />,
                title: "Exquisite Ambience",
                desc: "A dining atmosphere designed for luxury, comfort, and memorable moments."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm p-10 border border-white/5 hover:border-primary/30 transition-all duration-300 group text-center rounded-sm hover:-translate-y-2"
              >
                <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display text-white mb-4">{item.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24 container mx-auto px-4 text-center">
        <SectionTitle
          subtitle="Our Favorites"
          title="Signature Dishes"
          description="A curated selection of our most beloved creations, featuring seasonal ingredients and innovative techniques."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { title: "Tokusen Wagyu", price: "$85", img: "/assets/images/menu-4.jpg", description: "A5 Japanese Wagyu with truffle infused soy reduction." },
            { title: "Truffle Pasta", price: "$42", img: "/assets/images/menu-5.jpg", description: "Hand-made tagliatelle, black truffle shavings, parmesan cream." },
            { title: "Royal Seabass", price: "$38", img: "/assets/images/menu-6.jpg", description: "Pan-seared seabass, citrus buerre blanc, asparagus." }
          ].map((dish, i) => (
            <MenuCard key={i} item={dish} />
          ))}
        </div>

        <Button href="/menu" variant="primary">
          View Full Menu
        </Button>
      </section>

      {/* Testimonials (Simplied for V1, can be upgraded to Swiper) */}
      <section className="py-24 bg-accent/20 border-y border-white/5 relative">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="mb-10 text-primary text-6xl opacity-30 font-serif">“</div>
          <h3 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
            This place is absolutely amazing. The food, the service, the atmosphere - everything was perfect. Highly recommended!
          </h3>
          <div className="flex flex-col items-center">
            <div className="flex gap-1 text-primary mb-4">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-primary" />)}
            </div>
            <span className="text-white font-serif text-lg">Sarah Johnson</span>
            <span className="text-white/40 text-sm">Food Critic</span>
          </div>
        </div>
      </section>

      {/* Private Dining / Events */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/interior-bar.png"
            alt="Private Dining"
            fill
            className="object-cover opacity-40 hover:scale-105 transition-transform duration-[20s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="max-w-xl">
            <SectionTitle
              subtitle="Exclusive Events"
              title="Private Dining & Corporate Events"
              align="left"
              className="mb-8"
            />
            <p className="text-white/80 text-lg mb-8 leading-relaxed font-light">
              Host your next special occasion in our exclusive private dining rooms. From intimate gatherings to grand celebrations, our dedicated team ensures every detail is perfect.
            </p>
            <Button href="/contact" variant="ghost" className="border-white/20 text-white hover:bg-white hover:text-dark">
              Inquire Now
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto bg-white/5 border border-white/10 p-12 rounded-sm backdrop-blur-md">
          <h3 className="text-2xl font-display text-white mb-4">Join Our Newsletter</h3>
          <p className="text-white/60 mb-8">Subscribe to receive updates on new menu items and special events.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-white focus:border-primary focus:outline-none placeholder:text-white/30"
            />
            <Button type="submit" variant="primary" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
