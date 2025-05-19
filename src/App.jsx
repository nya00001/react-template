import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "flowbite";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Education from './components/Education';

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        
        {/* Gold Radial Background */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_30%,#FFD700_100%)]"></div>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <div className="container mx-auto px-8">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

