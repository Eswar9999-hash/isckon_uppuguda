import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import Map from '../components/Map/Map';

const Contact = () => {
  return (
    <div className="py-12 bg-[#FFFDF8] space-y-12">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Contact ISKCON Nandanavanam
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-8">
            <h2 className="font-serif text-2xl font-bold text-[#8B1E13] border-b border-amber-100 pb-3">Get In Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center shrink-0 mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</h3>
                  <p className="text-sm font-semibold text-[#2D2D2D] mt-0.5">+91-88155-63358</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center shrink-0 mt-1">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</h3>
                  <p className="text-sm font-semibold text-[#2D2D2D] mt-0.5">iskcon.uppuguda.hyd@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500">Temple Address</h3>
                  <p className="text-sm font-light text-gray-700 mt-0.5 leading-relaxed">
                    <a 
                      href="https://maps.app.goo.gl/zZLHDVzuSSsvbQdR8?g_st=com.google.maps.preview.copy" 
                      target="_blank" 
                      rel="noreferrer"
                      className="hover:underline hover:text-[#8B1E13] transition-colors"
                    >
                      ISKCON Nandanavanam, Beside Nagulamma Temple, Kandikal Gate, Uppuguda, Hyderabad, Telangana – 500053
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-amber-900/10 shadow-lg space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#8B1E13]">Send Us a Message</h2>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Your Name</label>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Email Address</label>
                  <input type="email" placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Subject</label>
                <input type="text" placeholder="Inquiry Subject" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1">Message</label>
                <textarea rows="4" placeholder="How can we assist you?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#8B1E13] text-sm resize-none"></textarea>
              </div>

              <button type="button" className="bg-[#8B1E13] hover:bg-[#74170e] text-white px-8 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-colors flex items-center justify-center space-x-2">
                <Send className="w-4 h-4 text-[#C89B3C]" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

        </div>

      </div>

      <Map />
    </div>
  );
};

export default Contact;
