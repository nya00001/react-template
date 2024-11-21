import React from 'react';
import aboutImg from '../assets/myProfilePicture.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from "motion/react";
import resumePDF from '../assets/resume-eng.pdf'; // Import your PDF file here

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-cyan-600">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div 
            whileInView={{ x: 0, opacity: 1 }} 
            initial={{ x: -100, opacity: 0 }} 
            transition={{ duration: 0.5 }} 
            className="flex items-center justify-center"
          >
            <img className="rounded-2xl md:w-3/4" src={aboutImg} alt="About" />
          </motion.div>
        </div>
        <motion.div 
          whileInView={{ x: 0, opacity: 1 }} 
          initial={{ x: 100, opacity: 0 }} 
          transition={{ duration: 0.5 }} 
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
          <div className="flex justify-center lg:justify-start mt-4">
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
            >
              View My Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
