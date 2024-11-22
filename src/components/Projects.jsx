import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ y: 0, opacity: 1 }} 
        initial={{ y: -100, opacity: 0 }} 
        transition={{ duration: 0.5 }} 
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ x: 0, opacity: 1 }} 
              initial={{ x: -100, opacity: 0 }} 
              transition={{ duration: 1 }} 
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                className="rounded-2xl mb-6"
                alt={project.title}
              />
            </motion.div>
            <motion.div 
              whileInView={{ x: 0, opacity: 1 }} 
              initial={{ x: 100, opacity: 0 }} 
              transition={{ duration: 1 }} 
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white text-black px-4 py-2 font-semibold hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-slate-500 text-slate-500 px-4 py-2 font-semibold hover:bg-slate-500 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div whileInView={{ x: 0, opacity: 1 }} 
              initial={{ x: 100, opacity: 0 }} 
              transition={{ duration: 1 }}  
              className="text-center mt-16 mb-16">
        <a
          href="https://github.com/nya00001"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-cyan-500 text-black px-6 py-3 font-semibold hover:bg-black hover:text-white hover:border hover:border-white cursor-pointer"
        >
          For more projects, check out my GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;
