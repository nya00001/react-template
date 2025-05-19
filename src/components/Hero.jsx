import React from 'react'
import { HERO_CONTENT } from '../constants'
import myPicture from '../assets/smile.webp'
import { motion } from "motion/react"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src={myPicture}
        alt="Smile at BOHO Clinic"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      {/* Overlay (optional darken) */}
      <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />

      {/* Content */}
      <div className="text-center px-6 max-w-4xl">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight"
        >
          Smile Confidently & Live Beautifully With BOHO Clinic
        </motion.h1>

        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="mt-4 block text-2xl sm:text-3xl bg-gradient-to-r from-cyan-400 via-slate-500 to-cyan-600 bg-clip-text text-transparent font-semibold"
        >
        BOHO Clinic        
        </motion.span>

        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="mt-6 text-lg font-light tracking-tight text-neutral-200"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>
    </section>
  )
}

export default Hero
