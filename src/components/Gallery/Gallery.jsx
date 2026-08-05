import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const galleryItems = [
    {
      image: '/images/radha_krishna_altar1.jpg',
      title: 'Sri Sri Radha Krishna',
      category: 'Altar Darshan'
    },
    {
      image: '/images/krishna_painting.jpg',
      title: 'Lord Sri Krishna Painting',
      category: 'Art & Culture'
    },
    {
      image: '/images/yasoda_krishna.jpg',
      title: 'Mother Yasoda & Krishna',
      category: 'Spiritual Painting'
    },
    {
      image: '/images/radha_krishna_altar2.jpg',
      title: 'Altar Deities Close Up',
      category: 'Daily Shringar'
    },
    {
      image: '/images/bhagavad_gita.jpg',
      title: 'Bhagavad Gita As It Is',
      category: 'Vedic Literature'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Visual Memories
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
              Photo Gallery
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-[#8B1E13] hover:text-[#74170e] underline underline-offset-4"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative aspect-square rounded-3xl overflow-hidden border border-amber-900/10 shadow-sm bg-amber-50"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Hover Overlay with Zoom Animation */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#C89B3C] mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm font-bold leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
