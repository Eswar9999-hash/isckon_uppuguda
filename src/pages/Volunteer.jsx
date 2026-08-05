import React from 'react';
import { HeartHandshake, UserCheck, Send } from 'lucide-react';

const Volunteer = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Devotional Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Become a Temple Volunteer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Content & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#8B1E13]">Seva Opportunities</h2>
              <div className="p-4 bg-amber-50/50 rounded-xl border border-dashed border-amber-300 text-xs text-gray-500 space-y-2">
                <div className="font-semibold text-[#8B1E13]">[Volunteer Seva Categories Slot]</div>
                <p>Ready for details on Deity Garland Seva, Kitchen Prasadam Prep, Cleaning Seva, Festival Event Management, IT & Media Seva.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-amber-900/10 shadow-lg space-y-6">
            <div className="flex items-center space-x-2 text-[#8B1E13]">
              <UserCheck className="w-6 h-6 text-[#C89B3C]" />
              <h2 className="font-serif text-2xl font-bold">Volunteer Registration Form</h2>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Phone / WhatsApp</label>
                <input type="tel" placeholder="+91 0000000000" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Area of Interest</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm text-gray-700">
                  <option>Select Seva Preference</option>
                  <option>Festival Coordination</option>
                  <option>Kitchen & Prasadam Seva</option>
                  <option>Media & Social Operations</option>
                  <option>Cleanliness & Maintenance</option>
                </select>
              </div>

              <button type="button" className="w-full bg-[#8B1E13] hover:bg-[#74170e] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-colors flex items-center justify-center space-x-2">
                <Send className="w-4 h-4 text-[#C89B3C]" />
                <span>Submit Application</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Volunteer;
