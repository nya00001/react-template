import React from 'react'
import { HERO_CONTENT } from '../constants'
import myPicture from '../assets/smile.webp'
import { motion } from 'motion/react'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
})

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center text-black py-12 lg:py-24">
      {/* Background image with left fade */}
      <div
        className="
          absolute inset-0 -z-10
          bg-cover bg-center
          opacity-30
          lg:opacity-100
          lg:[mask-image:linear-gradient(to_left,black_30%,transparent_80%)]
        "
        style={{ backgroundImage: `url(${myPicture})` }}
      />
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl lg:mx-0 lg:ml-20 lg:pl-10 lg:mr-0">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight"
        >
          <span className="text-[#b78b4b]">Smile Confidently</span><br/>
          & Live Beautifully With BOHO Clinic
        </motion.h1>

        <motion.div
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href="/book"
            className="rounded-md bg-[#b78b4b] px-8 py-5 text-sm font-semibold text-black hover:bg-white hover:text-[#b78b4b] transition"
          >
            Boho Hair Transplants
          </a>
          <a
            href="/learn-more"
            className="rounded-md border border-[#b78b4b] px-8 py-5 text-sm font-semibold text-[#b78b4b] hover:bg-[#b78b4b] hover:text-black transition"
          >
            Boho Dental
          </a>
        </motion.div>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="mt-8 text-lg lg:text-xl font-light tracking-tight"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
