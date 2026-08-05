import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#8B1E13] text-white pt-16 pb-8 border-t-4 border-[#C89B3C]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Responsive Layout matching Reference Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-amber-500/20">
          
          {/* Column 1: Brand & Address */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-2xl backdrop-blur-sm w-fit">
              <img 
                src="/logo/logo.png" 
                alt="ISKCON Nandanavanam Uppuguda" 
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-amber-100/90 text-sm leading-relaxed font-light">
              ISKCON Nandanavanam, Beside Nagulamma Temple, Kandikal Gate, Uppuguda, Hyderabad, Telangana – 500053.
            </p>
            
            {/* Social Media Icons matching reference layout */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors text-white hover:text-[#8B1E13]" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.21.19 2.21.19v2.43h-1.24c-1.23 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors text-white hover:text-[#8B1E13]" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter/X */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors text-white hover:text-[#8B1E13]" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com/@iskconnandanavanamuppuguda?si=tvSemvGS3-ZlQiaM" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors text-white hover:text-[#8B1E13]" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#C89B3C] flex items-center justify-center transition-colors text-white hover:text-[#8B1E13]" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-semibold text-[#C89B3C] tracking-wide border-b border-amber-500/20 pb-2">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-amber-100/90 font-light">
              <li className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-[#C89B3C] mt-1 shrink-0" />
                <span>+91-88155-63358</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#C89B3C] mt-1 shrink-0" />
                <span className="break-all">iskcon.uppuguda.hyd@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#C89B3C] mt-1 shrink-0" />
                <span>ISKCON Nandanavanam, Beside Nagulamma Temple, Kandikal Gate, Uppuguda, Hyderabad, Telangana – 500053</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Explore Links */}
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-semibold text-[#C89B3C] tracking-wide border-b border-amber-500/20 pb-2">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-amber-100/90">
              <li>
                <Link to="/" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://youtube.com/@iskconnandanavanamuppuguda/live" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors"
                >
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Live Darshan</span>
                </a>
              </li>
              <li>
                <Link to="/contact" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Legal Links */}
          <div className="space-y-5">
            <h3 className="font-serif text-lg font-semibold text-[#C89B3C] tracking-wide border-b border-amber-500/20 pb-2">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-amber-100/90">
              <li>
                <Link to="/donate" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Donate</span>
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Volunteer</span>
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/terms" className="inline-flex items-center space-x-2 hover:text-[#C89B3C] transition-colors">
                  <ArrowRight className="w-4 h-4 text-[#C89B3C]" />
                  <span>Terms and Conditions</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Mantra Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-amber-200/70 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} ISKCON Nandanavanam Uppuguda, Hyderabad. All Rights Reserved.</p>
          <div className="font-serif text-amber-300 italic tracking-wider text-sm">
            Hare Krishna Hare Krishna Krishna Krishna Hare Hare | Hare Rama Hare Rama Rama Rama Hare Hare
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
