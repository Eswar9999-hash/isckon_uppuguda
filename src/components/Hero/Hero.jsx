import React, { useState, useEffect } from 'react';
import { ArrowRight, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const slides = [
    {
      image: '/images/radha_krishna_altar1.jpg',
      alt: 'Sri Sri Radha Krishna Deities - ISKCON Nandanavanam Uppuguda'
    },
    {
      image: '/images/radha_krishna_altar2.jpg',
      alt: 'Beautiful Altar Darshan - ISKCON Nandanavanam'
    },
    {
      image: '/images/krishna_painting.jpg',
      alt: 'Lord Sri Krishna Devotional Painting'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[650px] lg:h-[750px] overflow-hidden bg-black">
      
      {/* Background Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Dark Overlay for Readability */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover transform scale-105 transition-transform duration-[5000ms]"
          />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl space-y-6">
          
          <div className="inline-flex items-center space-x-2 bg-[#C89B3C]/20 border border-[#C89B3C]/40 px-4 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C89B3C] animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C89B3C]">
              Sri Sri Radha Krishna Mandir
            </span>
          </div>

          <div className="space-y-3">
            <span className="block text-xl md:text-2xl font-serif text-amber-100/90 font-light">
              Welcome to
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white leading-tight drop-shadow-md">
              ISKCON Nandanavanam Uppuguda
            </h1>
          </div>

          <p className="text-base sm:text-lg text-amber-50/90 leading-relaxed font-light drop-shadow-sm max-w-2xl">
            Serving the teachings of Lord Sri Krishna through Bhakti Yoga, Bhagavad Gita, Harinam Sankirtan, Daily Darshan and Community Service.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 bg-[#C89B3C] hover:bg-[#b28831] text-[#8B1E13] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Explore Temple</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://youtube.com/@iskconnandanavanamuppuguda/live"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-3.5 rounded-xl text-sm font-semibold backdrop-blur-sm transition-all duration-200"
            >
              <Video className="w-4 h-4 text-[#C89B3C]" />
              <span>Live Darshan</span>
            </a>
          </div>

        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-[#C89B3C] w-8' : 'bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default Hero;
