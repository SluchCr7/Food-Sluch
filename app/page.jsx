'use client'
import React from "react";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen">
      <Hero />

      {/* About Preview Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden">
              <Image
                src="/assets/images/hero-slider-3.jpg"
                alt="Interior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-2/3 h-1/2 bg-dark border border-white/10 p-2 hidden lg:block">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/assets/images/about-chef.png"
                  alt="Chef"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <span className="text-primary font-serif italic text-2xl mb-4 block">Since 1995</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
              Where Every Meal <br /> Tells a Story
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed font-light">
              At Sluch, we believe that dining is more than just eating; it is an experience that engages all the senses. From the warm, ambient lighting to the meticulously plated dishes, every detail is curated to transport you to a world of culinary delight.
            </p>
            <div className="flex gap-8">
              <Link href="/about" className="text-primary hover:text-white transition-colors border-b border-primary pb-1 inline-block uppercase tracking-widest text-sm">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Highlights */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-serif italic text-xl mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl font-serif text-white">The Sluch Experience</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Master Chefs", icon: "👨‍🍳", desc: "Award-winning culinary experts crafting perfection." },
              { title: "Fresh Ingredients", icon: "🌿", desc: "Farm-to-table produce ensuring the highest quality." },
              { title: "Exquisite Ambience", icon: "✨", desc: "A dining atmosphere designed for luxury and comfort." }
            ].map((item, idx) => (
              <div key={idx} className="bg-dark/50 p-10 border border-white/5 hover:border-primary/50 transition-all duration-300 group text-center">
                <span className="text-4xl mb-6 block grayscale group-hover:grayscale-0 transition-all">{item.icon}</span>
                <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Preview */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-primary font-serif italic text-xl mb-2 block">Our Favorites</span>
            <h2 className="text-4xl font-serif text-white">Signature Dishes</h2>
          </div>
          <Link href="/menu" className="hidden md:block px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full">
            View Full Menu
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Tokusen Wagyu", price: "$85", img: "/assets/images/menu-4.jpg" },
            { title: "Truffle Pasta", price: "$42", img: "/assets/images/menu-5.jpg" },
            { title: "Royal Seabass", price: "$38", img: "/assets/images/menu-6.jpg" }
          ].map((dish, i) => (
            <div key={i} className="group relative">
              <div className="relative h-[400px] w-full overflow-hidden rounded-lg mb-4">
                <Image
                  src={dish.img}
                  alt={dish.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-1 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">{dish.title}</h3>
                    <span className="text-primary font-mono transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">{dish.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/menu" className="px-8 py-3 border border-white/20 text-white hover:bg-white hover:text-black transition-all rounded-full inline-block">
            View Full Menu
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}