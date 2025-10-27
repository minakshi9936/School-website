'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Phone,
  GraduationCap,
  Briefcase,
  FileText,
} from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const dropdownItems: Record<string, { name: string; path: string }[]> = {
    Campus: [
      { name: 'Facilities', path: '/campus/facilities' },
      { name: 'Infrastructure', path: '/campus/infrastructure' },
      { name: 'Health & Safety', path: '/campus/health-safety' },
    ],
    Academics: [
      { name: 'Learning Program', path: '/academics/learning-program' },
      { name: 'Curriculum', path: '/academics/curriculum' },
      { name: 'Faculty', path: '/academics/faculty' },
      { name: 'Academic Calendar', path: '/academics/academic-calendar' },
    ],
    Admission: [
      { name: 'Admission Form', path: '/admission/admission-form' },
      { name: 'Fee Structure', path: '/admission/fee-structure' },
      { name: 'Admission Guidelines', path: '/admission/admission-guidelines' },
      { name: 'Transfer Certificate', path: '/admission/transfer-certificate' },
    ],
    'News & Updates': [
      { name: 'Announcements', path: '/news-updates/announcements' },
      { name: 'Events', path: '/news-updates/events' },
      { name: 'News', path: '/news-updates/news' },
    ],
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full fixed top-0 left-0 z-50">
      {/* === Top Utility Bar === */}
      <div className="bg-gray-100 border-b border-gray-200 py-1">
        <div className="container mx-auto flex flex-wrap justify-end items-center gap-4 text-sm text-gray-700 px-4">
          <Link href="/admission/admission-form" className="flex items-center gap-1 hover:text-blue-700 transition">
            <FileText className="w-4 h-4" /> Admission Form
          </Link>
          <Link href="/contact" className="flex items-center gap-1 hover:text-blue-700 transition">
            <Phone className="w-4 h-4" /> Contact Us
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:text-blue-700 transition">
            <Briefcase className="w-4 h-4" /> Careers
          </Link>
        </div>
      </div>

      {/* === Main Navigation === */}
      <motion.div
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`transition-all duration-300 ${
          isScrolled || !isHomePage ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-blue-700 to-green-600 p-2 rounded-md shadow-sm group-hover:scale-110 transition-transform">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold tracking-wide leading-none `}>
                BRIGHTFUTURE
              </h1>
              <p className={`text-sm font-medium tracking-widest -mt-0.5 ${
                isScrolled || !isHomePage ? 'text-gray-600' : 'text-blue-500'
              }`}>
                SCHOOL
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div
            className={`hidden lg:flex items-center space-x-8 font-medium  text-gray-800`}
          >
            <Link href="/" className="px-3 py-2 hover:text-green-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 hover:text-green-600 transition-colors duration-200">
              About
            </Link>
            <Link href="/gallery" className="px-3 py-2 hover:text-green-600 transition-colors duration-200">
              Gallery
            </Link>

            {Object.keys(dropdownItems).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(menu)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className={`px-3 py-2 hover:text-green-600 transition-colors duration-200 ${
                    activeDropdown === menu ? 'text-green-600' : ''
                  }`}
                >
                  {menu}
                </button>

                <AnimatePresence>
                  {activeDropdown === menu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 bg-white border border-gray-200 shadow-lg rounded-md mt-1 z-40"
                    >
                      <ul className="py-2 w-56">
                        {dropdownItems[menu].map((item, i) => (
                          <li key={i}>
                            <Link
                              href={item.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600 transition"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 transition ${
              isScrolled || !isHomePage
                ? 'text-gray-700 hover:text-blue-700'
                : 'text-white hover:text-blue-200'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      {/* === Notification Bar === */}
      <div
        className={`text-center py-2 text-sm font-medium tracking-wide overflow-hidden ${
          isScrolled || !isHomePage ? 'bg-blue-900 text-white' : 'bg-transparent text-black'
        }`}
      >
        <div className="whitespace-nowrap animate-marquee">
          🎓 Admissions open for the session 2026–27 — Limited seats available! &nbsp;&nbsp;&nbsp;
        </div>
      </div>

      {/* === Mobile Menu === */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200 shadow-md"
          >
            <div className="px-4 py-4 space-y-2">
              <Link
                href="/"
                className="block px-4 py-3 font-medium text-gray-800 hover:bg-gray-50 hover:text-green-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 font-medium text-gray-800 hover:bg-gray-50 hover:text-green-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="block px-4 py-3 font-medium text-gray-800 hover:bg-gray-50 hover:text-green-600 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>

              {Object.keys(dropdownItems).map((menu) => (
                <details key={menu} className="border-b border-gray-100">
                  <summary className="px-4 py-3 font-medium text-gray-800 cursor-pointer hover:bg-gray-50">
                    {menu}
                  </summary>
                  <ul className="pl-6 pb-2 text-gray-600">
                    {dropdownItems[menu].map((item, i) => (
                      <li key={i}>
                        <Link
                          href={item.path}
                          className="block py-2 hover:text-green-600 transition"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
