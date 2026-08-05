import React from 'react';
import { Play, Video, ArrowUpRight } from 'lucide-react';

const YouTube = () => {
  const latestVideos = [
    {
      id: 'video1',
      title: 'Daily Deity Shringar Darshan & Aarti Live',
      duration: '45:20',
      thumbnail: '/images/radha_krishna_altar1.jpg'
    },
    {
      id: 'video2',
      title: 'Srimad Bhagavatam Discourse - Chapter 1',
      duration: '1:12:05',
      thumbnail: '/images/bhagavad_gita.jpg'
    },
    {
      id: 'video3',
      title: 'Ecstatic Sunday Feast Kirtan at Uppuguda',
      duration: '38:15',
      thumbnail: '/images/radha_krishna_altar2.jpg'
    }
  ];

  return (
    <section className="py-20 bg-[#FFFDF8] border-b border-amber-900/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C89B3C] bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
            Live Stream & Discourses
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E13]">
            YouTube Channel Broadcasts
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent mx-auto"></div>
        </div>

        {/* Featured Video Frame */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative rounded-3xl bg-amber-950/5 p-4 border border-[#C89B3C]/30 shadow-xl overflow-hidden">
            <a 
              href="https://youtube.com/@iskconnandanavanamuppuguda?si=tvSemvGS3-ZlQiaM"
              target="_blank"
              rel="noreferrer"
              className="aspect-video rounded-2xl relative overflow-hidden bg-black group cursor-pointer block"
            >
              <img 
                src="/images/radha_krishna_altar1.jpg" 
                alt="Featured Altar Darshan Broadcast" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                <div className="w-20 h-20 rounded-full bg-[#8B1E13] text-white flex items-center justify-center mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-9 h-9 fill-current translate-x-0.5" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C89B3C] bg-[#8B1E13]/80 px-3.5 py-1.5 rounded-xl mb-2">
                  Featured Stream: Daily Aarti & Puja Live
                </span>
                <p className="text-sm font-light text-amber-50 max-w-md hidden sm:block">
                  Click to play the latest recorded broadcast from Hare Krishna Land Uppuguda.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* 3 Latest Videos Below */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
            <h3 className="font-serif text-lg font-bold text-[#8B1E13] flex items-center space-x-2">
              <Video className="w-5 h-5 text-[#C89B3C]" />
              <span>Recent Broadcasts</span>
            </h3>
            <a 
              href="https://youtube.com/@iskconnandanavanamuppuguda?si=tvSemvGS3-ZlQiaM" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center space-x-1 text-xs font-bold text-[#C89B3C] hover:text-[#b28831]"
            >
              <span>Visit YouTube Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestVideos.map((video, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="h-36 relative overflow-hidden bg-black">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute bottom-2 right-2 bg-black/75 text-white px-2 py-0.5 rounded text-[10px] font-medium">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-10 h-10 rounded-full bg-[#8B1E13] text-white flex items-center justify-center shadow-md">
                      <Play className="w-4 h-4 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <h4 className="text-xs font-semibold text-[#2D2D2D] line-clamp-2 leading-relaxed">
                    {video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default YouTube;
