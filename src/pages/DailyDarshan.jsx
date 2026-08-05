import React from 'react';
import { Sun, Video, Image, Clock } from 'lucide-react';

const DailyDarshan = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Sacred Vision
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Daily Deities Darshan & Live Streaming
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Today's Darshan Gallery Slots */}
        <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 text-[#8B1E13]">
            <Sun className="w-6 h-6 text-[#C89B3C]" />
            <h2 className="font-serif text-2xl font-bold">Today's Altar Shringar Darshan</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-[3/4] rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-amber-50/50 p-6 flex flex-col items-center justify-center text-center">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">[Image Slot: Main Deities Shringar]</span>
            </div>
            <div className="aspect-[3/4] rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-amber-50/50 p-6 flex flex-col items-center justify-center text-center">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">[Image Slot: Srila Prabhupada Altar]</span>
            </div>
            <div className="aspect-[3/4] rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-amber-50/50 p-6 flex flex-col items-center justify-center text-center">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">[Image Slot: Special Flower Decoration]</span>
            </div>
          </div>
        </div>

        {/* Live Broadcast Slot */}
        <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-6">
          <div className="flex items-center space-x-2 text-[#8B1E13]">
            <Video className="w-6 h-6 text-[#C89B3C]" />
            <h2 className="font-serif text-2xl font-bold">Live Temple Broadcast</h2>
          </div>
          <div className="aspect-video max-w-4xl mx-auto rounded-2xl border-2 border-dashed border-[#8B1E13]/40 bg-amber-50/50 flex flex-col items-center justify-center text-center p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8B1E13] bg-[#8B1E13]/10 px-3 py-1 rounded-full mb-2">
              [Live Stream Embed Slot]
            </span>
            <p className="text-xs text-gray-500">Ready for YouTube / Facebook Live Aarti feed embed code.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DailyDarshan;
