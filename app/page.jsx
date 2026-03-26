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
import { ChefHat, Utensils, GlassWater, Star, ArrowRight, Instagram, Phone, Clock } from "lucide-react";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="bg-dark min-h-screen overflow-x-hidden selection:bg-primary/30 selection:text-white">
      <Hero />

      {/* --- Section 1: The Sluch Story --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none opacity-40" />
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            {/* Image Collage */}
            <div className="w-full lg:w-1/2 relative">
              <motion.div 
                {...fadeIn}
                className="relative aspect-[4/5] w-full max-w-md mx-auto"
              >
                <div className="absolute -top-10 -left-10 w-full h-full border border-primary/20 -z-10 translate-x-4 translate-y-4" />
                <div className="relative w-full h-full overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/images/about-chef.png"
                    alt="Master Chef Plating"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                  />
                </div>
                {/* Secondary Floating Image */}
                <div className="absolute -bottom-16 -right-16 w-2/3 aspect-square border-8 border-dark shadow-2xl overflow-hidden hidden md:block">
                   <Image
                      src="/assets/images/interior-luxury.png"
                      alt="Restaurant Interior"
                      fill
                      className="object-cover"
                    />
                </div>
              </motion.div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <motion.div {...fadeIn}>
                <SectionTitle
                  subtitle="EST. 1995"
                  title="A Legacy of Culinary Artistry"
                  align="left"
                  className="mb-8"
                />
                <p className="text-white/60 text-lg mb-8 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  At Sluch, we believe that dining is more than just nourishment; it is a meticulously choreographed performance that engages all the senses. From the warm, ambient glow of our hand-crafted lighting to the complex textures of our dishes, every detail is intentional.
                </p>
                <p className="text-white/60 text-lg mb-12 leading-relaxed font-light italic">
                  "Cooking is like painting or writing a song. Just as there are only so many notes or colors, there are only so many flavors - it's how you combine them that sets you apart."
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                  <Button href="/about" variant="primary">
                    Our Story
                  </Button>
                  <div className="flex flex-col">
                    <span className="text-primary font-serif italic text-lg decoration-primary">Chef Marcus Vane</span>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Executive Chef</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Signature Collections --- */}
      <section className="py-32 bg-[#080808] relative">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="The Collection"
            title="Savour the Extraordinary"
            description="Our signature menu is a curated journey through seasonal flavors, showcasing the finest local produce and global techniques."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20">
            {[
              { 
                title: "Tokusen Wagyu", 
                price: "$85", 
                img: "/assets/images/hero-new-1.png", 
                description: "A5 Japanese Wagyu, truffle-infused soy, charcoal-grilled leeks." 
              },
              { 
                title: "Imperial Seabass", 
                price: "$42", 
                img: "/assets/images/menu-6.jpg", 
                description: "Pan-seared seabass, citrus emulsion, wild asparagus, gold leaf." 
              },
              { 
                title: "Black Truffle Risotto", 
                price: "$38", 
                img: "/assets/images/menu-4.jpg", 
                description: "Acquerello rice, Périgord truffle, 36-month aged Parmesan." 
              }
            ].map((dish, i) => (
              <MenuCard key={i} item={dish} />
            ))}
          </div>

          <div className="text-center mt-20">
            <Button href="/menu" variant="outline" className="border-primary/30 text-primary hover:bg-primary hover:text-dark">
              Explore Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Experience (Atmosphere) --- */}
      <section className="relative py-48 overflow-hidden group">
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 3 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/assets/images/interior-luxury.png"
            alt="Interior Atmosphere"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div {...fadeIn}>
              <span className="text-primary font-serif italic text-2xl mb-6 block uppercase tracking-widest">The Environment</span>
              <h2 className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight">
                An Ambiance <br /> of <span className="text-primary italic font-serif">Quiet Luxury</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 leading-relaxed font-light max-w-xl">
                Designed for intimacy and sophistication, our space offers a sanctuary from the city. From private alcoves to our vibrant cocktail lounge, every corner is a destination.
              </p>
              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                   <h4 className="text-primary font-display text-2xl mb-2 italic">120+</h4>
                   <p className="text-white/40 text-[10px] uppercase tracking-widest">Exclusive Labels</p>
                </div>
                <div>
                   <h4 className="text-primary font-display text-2xl mb-2 italic">Private</h4>
                   <p className="text-white/40 text-[10px] uppercase tracking-widest">Dining Suites</p>
                </div>
              </div>
              <Button href="/contact" variant="outline" className="text-white border-white/20">
                Book an Event
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Section 4: Testimonials Slider --- */}
      <section className="py-32 relative border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
            <motion.div {...fadeIn} className="max-w-4xl mx-auto">
                <Star className="w-8 h-8 text-primary/40 mx-auto mb-10" />
                <h3 className="text-3xl md:text-5xl font-display text-white mb-12 italic leading-relaxed">
                    "The balance of flavours in the Wagyu was extraordinary. Truly a world-class dining experience in our own city."
                </h3>
                <div className="inline-flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border border-primary/30 p-1">
                        <div className="w-full h-full rounded-full bg-white/10" />
                    </div>
                    <div className="text-left">
                        <h5 className="text-white font-serif text-lg tracking-wide">Julianna Rossi</h5>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">Gourmet Guide 2024</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </section>

      {/* --- Section 5: Reservations Call to Action --- */}
      <section className="py-32 relative container mx-auto px-6">
        <div className="glass-dark p-16 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
            
            <motion.div {...fadeIn} className="relative z-10 space-y-8">
                <SectionTitle
                    subtitle="Join Us"
                    title="Reserve Your Experience"
                    className="mb-0"
                />
                <p className="text-white/50 max-w-xl mx-auto mb-12 font-light">
                    Due to high demand, we recommend booking at least 48 hours in advance for weekend dinners.
                </p>
                <div className="flex flex-col sm:flex-row gap-8 justify-center">
                    <Button href="/reservation" variant="primary" size="lg">
                        Book Now
                    </Button>
                    <Button href="tel:+1555123456" variant="ghost" className="items-center gap-2">
                        <Phone className="w-4 h-4" />
                        +1 (555) 123-456
                    </Button>
                </div>
            </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

