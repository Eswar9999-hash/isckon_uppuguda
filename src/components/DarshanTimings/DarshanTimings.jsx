import React from 'react';
import { Clock, Sun, Moon, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const DarshanTimings = () => {
  return (
    <section className="py-20 bg-[#FFFDF8] border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Daily Temple Schedule
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
            Daily Darshan & Aarti Timings
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Timings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Morning Schedule */}
          <div className="bg-white rounded-3xl border border-amber-900/10 shadow-sm p-6 sm:p-8 space-y-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 pb-4 border-b border-amber-100">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C89B3C] flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#8B1E13]">Morning Session</h3>
                <span className="text-xs text-[#C89B3C] font-semibold">4:30 AM - 1:00 PM</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-[#2D2D2D]/95">
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Mangala Aarti</span>
                <span className="font-bold text-[#8B1E13]">4:30 AM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Tulsi Aarti</span>
                <span className="font-bold text-[#8B1E13]">5:00 AM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Japa Meditation</span>
                <span className="font-bold text-[#8B1E13]">5:15 AM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Shringar Darshan & Guru Puja</span>
                <span className="font-bold text-[#8B1E13]">7:30 AM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Srimad Bhagavatam Discourse</span>
                <span className="font-bold text-[#8B1E13]">8:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Afternoon Schedule */}
          <div className="bg-white rounded-3xl border border-amber-900/10 shadow-sm p-6 sm:p-8 space-y-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 pb-4 border-b border-amber-100">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#C89B3C] flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#8B1E13]">Midday Session</h3>
                <span className="text-xs text-[#C89B3C] font-semibold">12:30 PM - 1:00 PM</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-[#2D2D2D]/95">
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Raj Bhog Aarti</span>
                <span className="font-bold text-[#8B1E13]">12:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Altar Closes (Darshan Closed)</span>
                <span className="font-bold text-gray-400">1:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Evening Schedule */}
          <div className="bg-white rounded-3xl border border-amber-900/10 shadow-sm p-6 sm:p-8 space-y-6 hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-3 pb-4 border-b border-amber-100">
              <div className="w-11 h-11 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center">
                <Moon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#8B1E13]">Evening Session</h3>
                <span className="text-xs text-[#8B1E13] font-semibold">4:30 PM - 8:30 PM</span>
              </div>
            </div>

            <ul className="space-y-3 text-xs text-[#2D2D2D]/95">
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Temple Reopens</span>
                <span className="font-bold text-[#8B1E13]">4:30 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Tulsi Aarti</span>
                <span className="font-bold text-[#8B1E13]">6:45 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Sandhya (Gaura) Aarti</span>
                <span className="font-bold text-[#8B1E13]">7:00 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gray-50">
                <span className="font-medium">Bhagavad Gita Pravachan</span>
                <span className="font-bold text-[#8B1E13]">7:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sayana Aarti (Temple Closes)</span>
                <span className="font-bold text-[#8B1E13]">8:15 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Action Bar */}
        <div className="mt-12 text-center">
          <Link
            to="/daily-darshan"
            className="inline-flex items-center space-x-2 bg-[#8B1E13] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-[#74170e] transition shadow"
          >
            <Calendar className="w-4 h-4 text-[#C89B3C]" />
            <span>View Complete Schedule & Live Stream</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default DarshanTimings;
