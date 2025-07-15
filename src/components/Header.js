'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      hasDropdown: false 
    },
    {
      name: 'About',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Bachir Oueida', path: '/about/bachir-oueda' },
        { name: 'News', path: '/about/news' }
      ] 
    },
    { 
      name: 'Properties', 
      path: '/properties',
      hasDropdown: true,
      dropdownItems: [
        { name: 'For Sale', path: '/properties/for-sale' },
        { name: 'For Rent', path: '/properties/for-rent' },
        { name: 'New Developments', path: '/properties/new-developments' }
      ] 
    },
    { 
      name: 'High Rises', 
      path: '/high-rises',
      hasDropdown: true,
      dropdownItems: [
        { name: 'The Avery', path: '/high-rises/the-avery' },
        { name: 'Royal Atlantis', path: '/high-rises/royal-atlantis' },
        { name: 'The Century', path: '/high-rises/the-century' }
      ] 
    },
    {
      name: 'Communities',
      path: '/communities',
      hasDropdown: false
    },
    { 
      name: 'Contact', 
      path: '/contact',
      hasDropdown: false 
    },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-200 transition-colors">
            BACHIR OUEIDA
          </Link>
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(index)}
                        className="flex items-center text-white hover:text-gray-200 transition-colors focus:outline-none"
                      >
                        {item.name}
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === index && (
                        <ul className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              <Link 
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link 
                      href={item.path} 
                      className="text-white hover:text-gray-200 transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex justify-between items-center">
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Centered Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-gray-200 transition-colors absolute left-1/2 transform -translate-x-1/2">
            BACHIR OUEIDA
          </Link>

          {/* Placeholder for balance */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    {item.hasDropdown ? (
                      <div>
                        <button 
                          onClick={() => toggleDropdown(index)}
                          className="flex items-center justify-between w-full px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors focus:outline-none"
                        >
                          {item.name}
                          <svg 
                            className={`h-4 w-4 transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {activeDropdown === index && (
                          <ul className="pl-4 bg-gray-50">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link 
                                  href={dropdownItem.path}
                                  className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white transition-colors"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    setMobileMenuOpen(false);
                                  }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <Link 
                        href={item.path} 
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}



