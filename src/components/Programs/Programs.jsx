import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programsData = [
    {
      title: 'Sunday Love Feast',
      tag: 'Weekly Gathering',
      image: '/images/radha_krishna_altar2.jpg',
      description: 'Join us every Sunday for ecstatic kirtan, philosophical discourses on Bhagavad-gita, and delicious prasadam distribution.'
    },
    {
      title: 'Bhagavad Gita Classes',
      tag: 'Scriptural Wisdom',
      image: '/images/bhagavad_gita.jpg',
      description: 'Daily systematically structured classes explaining the principles of Bhagavad Gita As It Is by Srila Prabhupada.'
    },
    {
      title: 'Youth Forum',
      tag: 'Youth Empowerment',
      image: '/images/krishna_painting.jpg',
      description: 'Empowering young minds through value education, character building classes, and leadership workshops.'
    },
    {
      title: 'Festival Celebrations',
      tag: 'Special Events',
      image: '/images/radha_krishna_altar1.jpg',
      description: 'Grand celebrations of Sri Krishna Janmashtami, Gaura Purnima, Ratha Yatra and other festivals with full grandeur.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Spiritual Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
              Participate in Temple Programs
            </h2>
          </div>
          <Link
            to="/programs"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8B1E13] hover:text-[#74170e] underline underline-offset-4"
          >
            <span>View All Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programsData.map((prog, index) => (
            <div 
              key={index} 
              className="group bg-[#FFFDF8] rounded-3xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              {/* Image slot */}
              <div className="h-44 overflow-hidden relative bg-amber-950/5">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] uppercase font-bold tracking-wider text-amber-100 bg-[#8B1E13]/80 px-2.5 py-1 rounded-md">
                  {prog.tag}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#8B1E13]">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-[#2D2D2D]/80 leading-relaxed font-light">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-amber-500/10">
                  <Link 
                    to="/programs"
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#C89B3C] hover:text-[#b28831] transition-colors"
                  >
                    <span>Program Timings</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Programs;
