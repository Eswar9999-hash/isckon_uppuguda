import React from 'react';
import { MapPin, Navigation, Clock, Phone, Mail } from 'lucide-react';

const Map = () => {
  return (
    <section className="py-20 bg-[#FFFDF8] border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
            Temple Location & Directions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Map & Address Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Column */}
          <div className="lg:col-span-8 rounded-3xl bg-white p-4 border border-amber-900/10 shadow-lg min-h-[400px]">
            <iframe 
              title="ISKCON Nandanavanam Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.6479708688406!2d78.47953287516142!3d17.332353383543167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99df5e4429df%3A0xe96847db18544c06!2sNagulamma%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full min-h-[360px] rounded-2xl border border-amber-900/10"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address & Timings Column */}
          <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-amber-900/10 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-[#8B1E13]">
                <Navigation className="w-5 h-5 text-[#C89B3C]" />
                <h3 className="font-serif text-xl font-bold">Temple Details</h3>
              </div>
              
              <ul className="space-y-4 text-sm text-[#2D2D2D]/90">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#8B1E13] shrink-0 mt-0.5" />
                  <a 
                    href="https://maps.app.goo.gl/zZLHDVzuSSsvbQdR8?g_st=com.google.maps.preview.copy" 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-[#8B1E13] transition-colors"
                  >
                    ISKCON Nandanavanam, Beside Nagulamma Temple, Kandikal Gate, Uppuguda, Hyderabad, Telangana – 500053
                  </a>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#8B1E13] shrink-0" />
                  <span>+91-88155-63358</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#8B1E13] shrink-0" />
                  <span className="break-all">iskcon.uppuguda.hyd@gmail.com</span>
                </li>
              </ul>
            </div>

            {/* Opening Hours Info Slot */}
            <div className="p-5 bg-amber-50/60 rounded-2xl border border-dashed border-amber-300 space-y-3">
              <div className="flex items-center space-x-2 text-[#8B1E13] font-serif font-bold text-sm">
                <Clock className="w-4 h-4 text-[#C89B3C]" />
                <span>Temple Opening Hours</span>
              </div>
              <ul className="text-xs text-gray-600 space-y-1.5 font-light">
                <li className="flex justify-between">
                  <span>Morning Session:</span>
                  <span className="font-semibold text-[#2D2D2D]">4:30 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Evening Session:</span>
                  <span className="font-semibold text-[#2D2D2D]">4:30 PM - 8:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Map;
