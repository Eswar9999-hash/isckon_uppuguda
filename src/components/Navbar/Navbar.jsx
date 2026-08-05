import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'About',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Philosophy', path: '/about#philosophy' },
        { name: 'Srila Prabhupada', path: '/about#prabhupada' },
        { name: 'Temple History', path: '/about#history' },
      ],
    },
    { name: 'Daily Darshan', path: 'https://youtube.com/@iskconnandanavanamuppuguda/live', isExternal: true },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Volunteer', path: '/volunteer' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md shadow-black/5 transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on the left */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo/logo.png" 
              alt="ISKCON Nandanavanam Uppuguda" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Center */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      className={`inline-flex items-center space-x-1 text-sm font-medium transition-colors hover:text-[#8B1E13] ${
                        location.pathname.startsWith('/about') ? 'text-[#8B1E13] font-semibold' : 'text-[#2D2D2D]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#8B1E13]' : 'text-gray-400'}`} />
                    </button>

                    {/* About Dropdown Menu matching Reference Image 4 */}
                    {isDropdownOpen && (
                      <div 
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        className="absolute left-0 mt-2 w-56 bg-[#FFFDF8] rounded-xl shadow-xl border border-amber-900/10 py-2 z-50 transition-all duration-200"
                      >
                        {link.dropdownItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-2.5 text-sm text-[#2D2D2D] hover:bg-[#8B1E13]/5 hover:text-[#8B1E13] font-medium transition-colors duration-150"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.isExternal) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium transition-colors hover:text-[#8B1E13] relative py-1 text-[#2D2D2D]"
                  >
                    {link.name}
                  </a>
                );
              }

              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-[#8B1E13] relative py-1 ${
                    isActive ? 'text-[#8B1E13] font-semibold' : 'text-[#2D2D2D]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8B1E13] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Donate Button */}
          <div className="hidden md:flex items-center">
            <Link
              to="/donate"
              className="inline-flex items-center space-x-2 bg-[#8B1E13] hover:bg-[#74170e] text-white px-6 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4 text-[#C89B3C] fill-current" />
              <span>Donate</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-3">
            <Link
              to="/donate"
              className="bg-[#8B1E13] text-white px-4 py-2 rounded-lg text-xs font-semibold"
            >
              Donate
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#8B1E13] hover:bg-gray-100 transition"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <div className="text-sm font-semibold text-[#8B1E13] px-3 py-2 border-b border-gray-100">
                    {link.name}
                  </div>
                  <div className="pl-4 space-y-1">
                    {link.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 text-sm text-[#2D2D2D] hover:text-[#8B1E13] hover:bg-[#8B1E13]/5 rounded-md"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            if (link.isExternal) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noreferrer"
                  className="block px-3 py-2.5 rounded-md text-base font-medium text-[#2D2D2D] hover:bg-gray-50"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-3 py-2.5 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'bg-[#8B1E13]/10 text-[#8B1E13] font-semibold'
                    : 'text-[#2D2D2D] hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
