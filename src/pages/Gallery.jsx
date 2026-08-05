import React from 'react';
import { Image } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Temple Moments
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Full Photo & Video Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <div key={index} className="aspect-square rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-white p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">
                [Gallery Slot #{index}]
              </span>
              <span className="text-[10px] text-gray-500 mt-1">Image / Event Category</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
