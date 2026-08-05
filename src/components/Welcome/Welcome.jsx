import React from 'react';
import { BookOpen, Heart, Music } from 'lucide-react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const cards = [
    {
      title: 'Bhagavad Gita Wisdom',
      image: '/images/bhagavad_gita.jpg',
      icon: <BookOpen className="w-5 h-5" />,
      description: 'Daily Bhagavad Gita classes based on Bhagavad Gita As It Is by His Divine Grace A.C. Bhaktivedanta Swami Srila Prabhupada.',
      link: '/about#philosophy'
    },
    {
      title: 'Temple Seva',
      image: '/images/radha_krishna_altar2.jpg',
      icon: <Heart className="w-5 h-5" />,
      description: 'Join devotional service through Annadanam, temple maintenance, deity worship and community outreach.',
      link: '/volunteer'
    },
    {
      title: 'Harinam Sankirtan',
      image: '/images/harinam_procession.jpg',
      icon: <Music className="w-5 h-5" />,
      description: 'Participate in congregational chanting of the Hare Krishna Maha Mantra and spread Krishna Consciousness.',
      link: '/programs'
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF8] border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            Hare Krishna Land
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
            Welcome to ISKCON Nandanavanam
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Frame */}
              <div className="h-56 relative overflow-hidden bg-amber-950/5">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-[#8B1E13] text-white px-3 py-1.5 rounded-xl text-xs font-semibold shadow-md">
                  {card.icon}
                  <span>{card.title}</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <p className="text-sm text-[#2D2D2D]/80 leading-relaxed font-light">
                  {card.description}
                </p>
                <div className="pt-2">
                  <Link 
                    to={card.link}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-[#8B1E13] hover:text-[#74170e] transition-colors"
                  >
                    <span>Learn More</span>
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

export default Welcome;
