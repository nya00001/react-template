// src/components/Testimonials.jsx
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";

const images = [client1, client2, client3, client4];

const testimonials = [
  {
    name: "Jane Doe",
    quote:
      "Boho Clinic transformed my smile and my confidence. The staff were incredible from start to finish!",
  },
  {
    name: "Mark Johnson",
    quote:
      "I flew in from abroad and every detail was handled—transfers, lodging, treatment. Flawless experience!",
  },
  {
    name: "Emily Smith",
    quote:
      "My hair transplant turned out better than I ever imagined. Professional, caring, and absolutely worth it.",
  },
  {
    name: "Carlos Reyes",
    quote:
      "Best dental work you can find in Antalya. Highly recommended—my new smile speaks for itself!",
  },
  {
    name: "Laura Chen",
    quote:
      "Completely at ease the entire time. The team’s attention to detail is unmatched. Thank you, Boho!",
  },
  {
    name: "Ahmed Patel",
    quote:
      "From consultation to follow-up, seamless service. They truly care about your results and comfort.",
  },
  {
    name: "Sofia Rossi",
    quote:
      "I can’t stop smiling! The results are natural and stunning. Boho Clinic is a five-star experience.",
  },
  {
    name: "David Kim",
    quote:
      "Travel logistics, treatment, and aftercare were all world-class. I felt supported every step of the way.",
  },
  {
    name: "Nina Gupta",
    quote:
      "A life-changing journey. The hair restoration exceeded my expectations and gave me back my confidence!",
  },
  {
    name: "Oliver Brown",
    quote:
      "Efficient, caring, and professional—my dental implants look and feel perfect. Highly recommend Boho!",
  },
  {
    name: "Mia Wilson",
    quote:
      "I never knew a clinic visit could be this stress-free. Exceptional care and amazing results.",
  },
  {
    name: "Liam Becker",
    quote:
      "Boho’s holistic approach to patient care is incredible. My hair transplant is flawless!",
  },
];

export default function Testimonials() {
  const totalSlides = testimonials.length;

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 space-y-12">

        {/* Desktop: 4 slides */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={totalSlides}
          visibleSlides={4}
          step={1}
          infinite={false}
          isPlaying
          interval={3000}
        >
          <div className="relative flex items-center">
            <ButtonBack className="absolute left-0 ml-4 z-30 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white">
              ‹
            </ButtonBack>
            <div className="w-full overflow-hidden">
              <Slider>
                <div className="flex gap-8">
                  {testimonials.map((t, idx) => (
                    <Slide key={idx} index={idx}>
                      <div className="relative w-full flex-shrink-0">
                        <img
                          src={images[idx % images.length]}
                          alt={`Slide ${idx + 1}`}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-30 p-6 flex flex-col justify-end">
                          <p className="text-white mb-2">{t.quote}</p>
                          <p className="text-white font-semibold text-right">
                            — {t.name}
                          </p>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext className="absolute right-0 mr-4 z-30 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white">
              ›
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Tablet: 2 slides */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={totalSlides}
          visibleSlides={2}
          step={1}
          infinite={false}
          isPlaying
          interval={3000}
        >
          <div className="relative flex items-center">
            <ButtonBack className="absolute left-0 ml-4 z-30 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white">
              ‹
            </ButtonBack>
            <div className="w-full overflow-hidden">
              <Slider>
                <div className="flex gap-6">
                  {testimonials.map((t, idx) => (
                    <Slide key={idx} index={idx}>
                      <div className="relative w-full flex-shrink-0">
                        <img
                          src={images[idx % images.length]}
                          alt={`Slide ${idx + 1}`}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-30 p-6 flex flex-col justify-end">
                          <p className="text-white mb-2">{t.quote}</p>
                          <p className="text-white font-semibold text-right">
                            — {t.name}
                          </p>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext className="absolute right-0 mr-4 z-30 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white">
              ›
            </ButtonNext>
          </div>
        </CarouselProvider>

        {/* Mobile: 1 slide */}
        <CarouselProvider
          className="block md:hidden"
          naturalSlideWidth={100}
          isIntrinsicHeight
          totalSlides={totalSlides}
          visibleSlides={1}
          step={1}
          infinite={false}
          isPlaying
          interval={3000}
        >
          <div className="relative flex items-center">
            <ButtonBack className="absolute left-0 ml-4 z-30 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white">
              ‹
            </ButtonBack>
            <div className="w-full overflow-hidden">
              <Slider>
                <div className="flex gap-4">
                  {testimonials.map((t, idx) => (
                    <Slide key={idx} index={idx}>
                      <div className="relative w-full flex-shrink-0">
                        <img
                          src={images[idx % images.length]}
                          alt={`Slide ${idx + 1}`}
                          className="w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-30 p-6 flex flex-col justify-end">
                          <p className="text-white mb-2">{t.quote}</p>
                          <p className="text-white font-semibold text-right">
                            — {t.name}
                          </p>
                        </div>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
            </div>
            <ButtonNext className="absolute right-0 mr-4 z-30 p-2 bg-gray-800 bg-opacity-50 rounded-full text-white">
              ›
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
}
