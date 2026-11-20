'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on the homepage
  const isHomepage = pathname === '/';

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
        { name: 'About Bachir', path: '/about' },
        { name: 'News', path: '/blogs' }
      ] 
    },
    { 
      name: 'Properties', 
      path: '/properties',
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Properties', path: '/properties' },
        { name: 'For Sale', path: '/properties/sale' },
        { name: 'For Lease', path: '/properties/lease' },
        { name: 'Coming Soon', path: '/properties/coming-soon' },
        { name: 'Sold Properties', path: '/properties/sold' }
      ] 
    },
    { 
      name: 'High Rises', 
      path: '/high-rises',
      hasDropdown: true,
      dropdownItems: [
        { name: 'The Avery', path: '/high-rises/the-avery' },
        // { name: 'Royal Atlantis', path: '/high-rises/royal-atlantis' },
        { name: 'The Century', path: '/high-rises/the-century' }
      ] 
    },
    {
      name: 'Communities',
      path: '/communities',
      hasDropdown: false
    },
    {
      name: 'Testimonials',
      path: '/testimonials',
      hasDropdown: false
    },
    {
      name: 'Simply Abu Dhabi',
      path: '/simply-abu-dhabi',
      hasDropdown: false
    },
    { 
      name: 'Contact', 
      path: '/contact',
      hasDropdown: false 
    },
  ];

  // Determine header styling based on page and scroll state
  const getHeaderStyle = () => {
    if (!isHomepage) {
      // Non-homepage: always show white background with shadow
      return 'bg-white/95 backdrop-blur-md shadow-md';
    }
    // Homepage: show background only when scrolled
    return scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent';
  };
  
  // Determine text color based on page and scroll state
  const getTextColor = () => {
    if (!isHomepage) {
      // Non-homepage: always black text
      return 'text-black hover:text-gray-700';
    }
    // Homepage: white text when not scrolled, black when scrolled
    return scrolled ? 'text-black hover:text-gray-700' : 'text-white hover:text-gray-200';
  };

  const onHero = isHomepage && !scrolled;
  const brandNameColor = onHero ? 'text-white' : getTextColor();
  const logoSrc = onHero ? '/logos/la-real-estate-logo.png' : '/logos/la-real-estate-header.png';
  const logoWidth = onHero ? 767 : 827;
  const logoHeight = onHero ? 225 : 232;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderStyle()}`}
    >
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center gap-6">
          <Link href="/" className={`flex shrink-0 flex-col items-center leading-none ${onHero ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]' : ''}`}>
            <Image
              src={logoSrc}
              alt="L.A. Real Estate"
              width={logoWidth}
              height={logoHeight}
              priority
              unoptimized
              className="h-11 w-auto xl:h-12"
            />
            <span className={`mt-1 whitespace-nowrap text-[13px] font-bold tracking-[0.16em] transition-colors xl:text-sm ${brandNameColor}`}>
              BACHIR OUEIDA
            </span>
          </Link>
          <nav>
            <ul className="flex flex-nowrap items-center gap-x-3 text-[13px] xl:gap-x-5 xl:text-[15px]">
              {navItems.map((item, index) => (
                <li key={index} className="relative shrink-0 whitespace-nowrap group">
                  {item.hasDropdown ? (
                    <>
                      <button 
                        onClick={() => toggleDropdown(index)}
                        className={`flex items-center transition-colors focus:outline-none ${getTextColor()}`}
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
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-1 z-50">
                          {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              <Link 
                                href={dropdownItem.path}
                                className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white transition-colors"
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
                      className={`transition-colors ${getTextColor()}`}
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
        <div className="relative flex items-center justify-between lg:hidden">
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className={`focus:outline-none transition-colors ${getTextColor()}`}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <Link href="/" className={`flex flex-col items-center leading-none ${onHero ? 'drop-shadow-[0_1px_3px_rgba(0,0,0,0.85)]' : ''}`}>
            <Image
              src={logoSrc}
              alt="L.A. Real Estate"
              width={logoWidth}
              height={logoHeight}
              priority
              unoptimized
              className="h-9 w-auto"
            />
            <span className={`mt-0.5 whitespace-nowrap text-[11px] font-bold tracking-[0.14em] transition-colors ${brandNameColor}`}>
              BACHIR OUEIDA
            </span>
          </Link>

          {/* Placeholder for balance */}
          <div className="w-6"></div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg h-screen">
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



