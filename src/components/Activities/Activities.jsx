import React from 'react';
import { Utensils, BookOpen, Music, HeartHandshake, Bell } from 'lucide-react';

const Activities = () => {
  const activitiesData = [
    {
      title: 'Food For Life',
      icon: <Utensils className="w-5 h-5" />,
      description: 'Distribution of pure vegetarian sanctified food (prasadam) to families and communities around Uppuguda.',
      color: 'bg-[#8B1E13]/10 text-[#8B1E13]'
    },
    {
      title: 'Book Distribution',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Distributing transcendental literatures like Bhagavad Gita to spread spiritual education and moral values.',
      color: 'bg-[#C89B3C]/10 text-[#C89B3C]'
    },
    {
      title: 'Harinam Sankirtan',
      icon: <Music className="w-5 h-5" />,
      description: 'Congregational singing and chanting of the Holy Names of Lord Krishna on the streets for universal peace.',
      color: 'bg-[#8B1E13]/10 text-[#8B1E13]'
    },
    {
      title: 'Volunteer Seva',
      icon: <HeartHandshake className="w-5 h-5" />,
      description: 'Providing various services including deity garlands preparation, temple maintenance, and administrative assistance.',
      color: 'bg-[#C89B3C]/10 text-[#C89B3C]'
    },
    {
      title: 'Daily Arati',
      icon: <Bell className="w-5 h-5" />,
      description: 'Performance of regular daily prayers, offering lamps, prayers, and visual worship to the deities.',
      color: 'bg-[#8B1E13]/10 text-[#8B1E13]'
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF8] border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            Devotional Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
            Temple Activities & Outreach
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {activitiesData.map((act, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-3xl border border-amber-900/10 shadow-sm space-y-4 hover:shadow-md hover:border-[#8B1E13]/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${act.color}`}>
                  {act.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-[#8B1E13]">
                  {act.title}
                </h3>
                <p className="text-xs text-[#2D2D2D]/80 leading-relaxed font-light">
                  {act.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Activities;
