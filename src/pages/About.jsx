import React from 'react';
import { Image, BookOpen, Compass, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            About ISKCON Nandanavanam
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Our History, Philosophy & Lineage
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Section 1: Our Philosophy */}
        <section id="philosophy" className="scroll-mt-28 bg-white p-8 sm:p-12 rounded-3xl border border-amber-900/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-[#8B1E13]">
            <Compass className="w-7 h-7 text-[#C89B3C]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Our Philosophy</h2>
          </div>
          <div className="p-6 bg-amber-50/50 rounded-2xl border border-dashed border-amber-300 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E13] bg-[#8B1E13]/10 px-3 py-1 rounded-md">
              [Content Slot: Vedic Philosophy & Achintya Bheda Abheda]
            </span>
            <p className="text-xs text-gray-500 italic">
              Ready for core teachings on Gaudiya Vaishnavism, Chaitanya Mahaprabhu's sankirtan movement, and Krishna consciousness.
            </p>
          </div>
        </section>

        {/* Section 2: Srila Prabhupada */}
        <section id="prabhupada" className="scroll-mt-28 bg-white p-8 sm:p-12 rounded-3xl border border-amber-900/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-[#8B1E13]">
            <BookOpen className="w-7 h-7 text-[#C89B3C]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Founder-Acharya: A.C. Bhaktivedanta Swami Prabhupada</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-4 aspect-square rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-amber-50/50 p-6 flex flex-col items-center justify-center text-center">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">
                [Image Slot: Srila Prabhupada Portrait]
              </span>
            </div>
            <div className="md:col-span-8 p-6 bg-amber-50/50 rounded-2xl border border-dashed border-amber-300 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E13] bg-[#8B1E13]/10 px-3 py-1 rounded-md">
                [Content Slot: Srila Prabhupada Biography & Global Legacy]
              </span>
              <p className="text-xs text-gray-500 italic">
                Ready for biography details, 1965 journey to the West, translation of Bhagavad-gita As It Is, and establishment of ISKCON worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Temple History */}
        <section id="history" className="scroll-mt-28 bg-white p-8 sm:p-12 rounded-3xl border border-amber-900/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-[#8B1E13]">
            <Shield className="w-7 h-7 text-[#C89B3C]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">Temple History: Uppuguda, Hyderabad</h2>
          </div>
          <div className="p-6 bg-amber-50/50 rounded-2xl border border-dashed border-amber-300 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E13] bg-[#8B1E13]/10 px-3 py-1 rounded-md">
              [Content Slot: Temple Inception & Development Milestones]
            </span>
            <p className="text-xs text-gray-500 italic">
              Ready for history of ISKCON Nandanavanam Uppuguda, temple installation dates, community growth, and upcoming expansion plans.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
