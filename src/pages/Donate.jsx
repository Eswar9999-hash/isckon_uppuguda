import React from 'react';
import { Heart, CreditCard, Gift, ShieldCheck } from 'lucide-react';

const Donate = () => {
  return (
    <div className="py-12 bg-[#FFFDF8]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Sacred Offering
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#8B1E13]">
            Support ISKCON Nandanavanam Uppuguda
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Donation Seva Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center">
              <Gift className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#8B1E13]">Anna Daan Seva</h2>
            <div className="p-4 bg-amber-50/50 rounded-xl border border-dashed border-amber-300 text-xs text-gray-500">
              [Donation Slot 1: Prasadam Sponsorship & Free Food Distribution]
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#C89B3C]/10 text-[#C89B3C] flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#8B1E13]">Nitya Seva & Worship</h2>
            <div className="p-4 bg-amber-50/50 rounded-xl border border-dashed border-amber-300 text-xs text-gray-500">
              [Donation Slot 2: Daily Flowers, Garland, Lamp & Bhog Seva]
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#8B1E13]/10 text-[#8B1E13] flex items-center justify-center">
              <CreditCard className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl font-bold text-[#8B1E13]">Temple Construction Seva</h2>
            <div className="p-4 bg-amber-50/50 rounded-xl border border-dashed border-amber-300 text-xs text-gray-500">
              [Donation Slot 3: Building Expansion & Cultural Center Seva]
            </div>
          </div>

        </div>

        {/* Bank & Payment Details Frame */}
        <div className="bg-white p-8 rounded-3xl border border-amber-900/10 shadow-lg space-y-6 max-w-2xl mx-auto">
          <div className="flex items-center space-x-2 text-[#8B1E13]">
            <ShieldCheck className="w-6 h-6 text-[#C89B3C]" />
            <h2 className="font-serif text-2xl font-bold">Direct Bank Transfer Details</h2>
          </div>

          <div className="p-6 bg-amber-50/60 rounded-2xl border border-dashed border-amber-300 text-xs text-gray-600 space-y-3">
            <div className="font-semibold text-[#8B1E13] text-sm">[Bank Account Credentials Placeholder Slot]</div>
            <p>Account Name: ISKCON NANDANAVANAM</p>
            <p>Bank Name: [Bank Name Slot]</p>
            <p>Account Number: [XXXXXXXXXXXX]</p>
            <p>IFSC Code: [XXXXXXXX]</p>
            <p>UPI ID / QR Code: [iskcon.uppuguda@upi]</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Donate;
