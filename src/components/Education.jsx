import React from 'react'
import { EDUCATION } from '../constants'
import { motion } from "motion/react"
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">Education</motion.h2>
        <div>
            {EDUCATION.map((education, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/4">
                    <p className="text-sm mb-2 text-neutral-400">{education.year}</p>         
                    </motion.div>
                    <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: 100, opacity: 0 }} transition={{ duration: 1 }} className="w-full max-w-xl lg:w-3/4">
                        <h6 className="text-2xl mb-2 font-semibold">{education.degree} - <span className="text-cyan-600 text-sm">{education.institution}</span></h6>
                        <p className="mb-4 text-neutral-400">{education.location}</p>
                        {education.details && <p className="text-sm text-neutral-400">{education.details}</p>}
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Education
