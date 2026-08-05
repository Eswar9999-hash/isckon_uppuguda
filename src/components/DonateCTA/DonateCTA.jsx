import React from 'react';
import { Heart, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonateCTA = () => {
  return (
    <section className="py-20 bg-white border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Call to Action Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-[#8B1E13] via-[#74170e] to-[#8B1E13] p-8 sm:p-12 text-white shadow-2xl overflow-hidden border-2 border-[#C89B3C]/50">
          
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C89B3C_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-300/30 text-xs font-semibold text-[#C89B3C]">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Sacred Offerings & Seva</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-serif font-bold leading-tight max-w-2xl">
                Contribute to Devotional Service & Temple Seva
              </h2>

              <p className="text-sm text-amber-100/90 leading-relaxed font-light max-w-2xl">
                Support temple operations, spiritual activities, and outreach programs. Your generous contributions directly enable Daily Deity Worship, Annadaan (Free Meals Distribution), Vedic Book Distribution, Festival Sponsorships, and the continuing development of ISKCON Nandanavanam Uppuguda.
              </p>

              {/* Seva Highlights list */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs text-amber-200">
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"></span>
                  <span>Daily Deity Worship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"></span>
                  <span>Free Annadanam</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"></span>
                  <span>Book Distribution</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"></span>
                  <span>Festival Sponsorship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]"></span>
                  <span>Temple Development</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-start lg:items-end gap-4 w-full">
              <Link
                to="/donate"
                className="w-full text-center inline-flex items-center justify-center space-x-2 bg-[#C89B3C] hover:bg-[#b28831] text-[#8B1E13] font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Gift className="w-5 h-5" />
                <span>Donate Now</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default DonateCTA;
