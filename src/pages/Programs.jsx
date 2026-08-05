import React from 'react';
import { Calendar, Image } from 'lucide-react';

const Programs = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Events & Gathering
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Temple Programs & Spiritual Courses
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl border border-amber-900/10 shadow-sm p-8 space-y-6">
            <div className="h-48 rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-amber-50/50 flex flex-col items-center justify-center text-center">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">[Image Slot: Bhakti Vriksha Sessions]</span>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C89B3C] bg-amber-100/60 px-2.5 py-1 rounded-md">
                [Program Slot 1]
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#8B1E13]">Bhakti Vriksha Small Groups</h2>
              <div className="p-4 bg-amber-50/50 rounded-xl border border-dashed border-amber-300 text-xs text-gray-500">
                Ready for home gathering details, neighborhood group schedules, and coordinator contact info.
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-amber-900/10 shadow-sm p-8 space-y-6">
            <div className="h-48 rounded-2xl border-2 border-dashed border-[#C89B3C]/50 bg-amber-50/50 flex flex-col items-center justify-center text-center">
              <Image className="w-8 h-8 text-[#8B1E13] mb-2" />
              <span className="text-xs font-semibold text-[#8B1E13]">[Image Slot: Children Cultural School]</span>
            </div>
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C89B3C] bg-amber-100/60 px-2.5 py-1 rounded-md">
                [Program Slot 2]
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#8B1E13]">Gopal Fun School (Kids)</h2>
              <div className="p-4 bg-amber-50/50 rounded-xl border border-dashed border-amber-300 text-xs text-gray-500">
                Ready for Sunday kids class syllabus, values education, sloka chanting, and drama workshops.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Programs;
