'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  const navItems = [
    { 
      name: 'Home', 
      path: '/',
      hasDropdown: false 
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
      name: 'About', 
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Our Company', path: '/about/company' },
        { name: 'Our Team', path: '/about/team' },
        { name: 'Testimonials', path: '/about/testimonials' }
      ] 
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
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
    </header>
  );
}



