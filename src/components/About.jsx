import React from 'react'
import aboutImg from '../assets/myProfilePicture.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from "motion/react"

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About 
            <span className="text-cyan-600">Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="wfull lg:w-1/2 lg:p-8">
                <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="flex items-center justify-center">
                    <img className="rounded-2xl md:w-3/4" src={aboutImg} alt="about"/>
                </motion.div>
            </div>
            <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default About