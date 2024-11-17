import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass, DiPhp } from 'react-icons/di';
import { SiTailwindcss, SiVite, SiWordpress, SiDrupal, SiJavascript, SiFigma, SiShopify, SiHeadlessui, SiAdobelightroomclassic } from 'react-icons/si';
import { FaVuejs, FaNodeJs } from 'react-icons/fa';
import { motion } from "motion/react";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: { 
    y: [10, -10], 
    transition: { 
      duration: duration, 
      ease: 'linear', 
      repeat: Infinity, 
      repeatType: 'reverse' 
    }
  }
});

const Technologies = () => {
  const durations = [2.5, 2, 1.5, 1.8, 2.3, 2.2, 1.2, 1.9, 1.1, 2.1]; 
  
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 whileInView={{ y: 0, opacity: 1 }} initial={{ y: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>

      {/* Frontend Frameworks and Libraries */}
      <Section 
        title="Frontend Frameworks and Libraries" 
        icons={[
          { component: RiReactjsLine, color: "text-cyan-400", duration: durations[0] },
          { component: TbBrandNextjs, color: "text-gray-400", duration: durations[1] },
          { component: FaVuejs, color: "text-green-500", duration: durations[2] },
          { component: SiJavascript, color: "text-yellow-400", duration: durations[3] }
        ]}
      />

      {/* Styling Frameworks and Tools */}
      <Section 
        title="Styling Frameworks and Tools" 
        icons={[
          { component: SiTailwindcss, color: "text-blue-400", duration: durations[4] },
          { component: DiSass, color: "text-pink-400", duration: durations[5] },
          { component: DiCss3, color: "text-blue-500", duration: durations[6] },
          { component: AiFillHtml5, color: "text-orange-500", duration: durations[7] }
        ]}
      />

      {/* CMS Platforms */}
      <Section 
        title="CMS Platforms" 
        icons={[
          { component: SiWordpress, color: "text-blue-600", duration: durations[8] },
          { component: SiDrupal, color: "text-blue-800", duration: durations[9] },
          { component: SiHeadlessui, color: "text-pink-500", duration: durations[1] },
          { component: SiShopify, color: "text-green-600", duration: durations[2] }
        ]}
      />

      {/* Design Tools */}
      <Section 
        title="Design Tools" 
        icons={[
          { component: SiFigma, color: "text-purple-500", duration: durations[3] },
          { component: SiAdobelightroomclassic, color: "text-red-500", duration: durations[4] }
        ]}
      />

      {/* Build Tools */}
      <Section 
        title="Build Tools" 
        icons={[
          { component: SiVite, color: "text-purple-400", duration: durations[5] },
          { component: FaNodeJs, color: "text-green-500", duration: durations[6] }
        ]}
      />

      {/* Backend */}
      <Section 
        title="Backend" 
        icons={[
          { component: DiPhp, color: "text-indigo-500", duration: durations[7] }
        ]}
      />
    </div>
  )
};

const Section = ({ title, icons }) => (
  <motion.div whileInView={{ x: 0, opacity: 1 }} initial={{ x: -100, opacity: 0 }} transition={{ duration: 1.5 }} className="mb-8">
    <h3 className="text-2xl mb-4 text-center">{title}</h3>
    <div className="flex flex-wrap justify-center gap-6">
      {icons.map(({ component: Icon, color, duration }, index) => (
        <motion.div key={index} variants={iconVariants(duration)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <Icon className={`text-7xl ${color}`} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default Technologies;
