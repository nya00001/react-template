import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "flowbite"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        
        {/* Gold Radial Background */}
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="relative h-full w-full">
            <div
              className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(183,139,75,0.3),rgba(255,255,255,0))]"
            ></div>
          </div>
        </div>

        <Navbar />

        <Routes>
          {/* Home Route: Hero followed by Testimonials */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Testimonials />
              </>
            }
          />

          {/* Other pages */}
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />

          {/* Stand‐alone Testimonials page if you still want one */}
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
