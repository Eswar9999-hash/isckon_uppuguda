import React from 'react';
import { Compass, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutTemple = () => {
  return (
    <section className="py-20 bg-white border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Collage Layout using Uploaded Assets */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 relative">
            <div className="absolute inset-0 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10 transform -translate-x-4 -translate-y-4" />
            
            {/* Main Image: Yasoda Krishna */}
            <div className="col-span-8 overflow-hidden rounded-3xl border border-amber-900/15 shadow-lg aspect-[3/4] bg-amber-50">
              <img 
                src="/images/yasoda_krishna.jpg" 
                alt="Mother Yasoda and Lord Krishna" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>

            {/* Collage Side Grid */}
            <div className="col-span-4 flex flex-col gap-4 justify-between h-full">
              {/* Image 2: Srila Prabhupada Portrait */}
              <div className="overflow-hidden rounded-2xl border border-amber-900/15 shadow-md aspect-square bg-amber-50">
                <img 
                  src="/images/prabhupada_portrait.jpg" 
                  alt="His Divine Grace A.C. Bhaktivedanta Swami Prabhupada" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Image 3: Lord Krishna Flute Deity */}
              <div className="overflow-hidden rounded-2xl border border-amber-900/15 shadow-md aspect-square bg-amber-50">
                <img 
                  src="/images/krishna_flute_deity.jpg" 
                  alt="Lord Krishna Playing Flute Deity" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Overlay Small Floating Badge */}
            <div className="absolute bottom-4 right-4 bg-white border border-[#C89B3C] px-5 py-3 rounded-2xl shadow-xl z-10 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-[#C89B3C]" />
              <div>
                <span className="block text-[10px] uppercase font-bold text-[#8B1E13] tracking-wider">Lineage</span>
                <span className="text-xs font-semibold text-[#2D2D2D]">Gaudiya Vaishnavism</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Founder-Acharya & Temple Mission
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13] leading-tight">
              Inspiring Devotion, Wisdom & Selfless Service
            </h2>

            <p className="text-sm text-[#2D2D2D]/90 leading-relaxed font-light">
              ISKCON Nandanavanam Uppuguda is dedicated to propagating the sublime teachings of Lord Sri Krishna as revealed in the Bhagavad-gita. Under the spiritual guidance of our Founder-Acharya, His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, we offer a peaceful sanctuary for practicing Bhakti Yoga, study, and daily worship.
            </p>

            {/* Bullet Points with Icons */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#8B1E13]">Bhakti Yoga Practices</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">Cultivating spiritual consciousness through daily deity arati, congregational chanting, and kirtans.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#C89B3C]/10 text-[#C89B3C] flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#8B1E13]">Vedic Study & Wisdom</h4>
                  <p className="text-xs text-gray-500 font-light mt-0.5">Regular discourses and courses on the Bhagavad-gita to establish moral and spiritual guidelines.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-[#8B1E13] hover:bg-[#74170e] text-white px-6 py-3 rounded-xl text-xs font-semibold shadow transition-colors"
              >
                <span>Read Full Philosophy</span>
              </Link>
              <Link
                to="/volunteer"
                className="text-xs font-semibold text-[#8B1E13] hover:underline"
              >
                Join Community Service →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutTemple;
