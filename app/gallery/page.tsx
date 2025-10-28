'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import {
  Search,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Play,
  Image as ImageIcon,
  Users,
  GraduationCap,
  Award,
} from 'lucide-react';

interface GalleryItem {
  id: number;
  type: string;
  category: string;
  title: string;
  description: string;
  image: string;
  featured?: boolean;
}

// Gallery data
const galleryItems = [
  // Campus
  {
    id: 1,
    type: 'image',
    category: 'campus',
    title: 'School Building',
    description: 'A view of our modern and vibrant school campus.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hCW0WPtsRJeULVJxcR2UpZHMTXEO1rrbuQ&s',
    featured: true,
  },
  {
    id: 2,
    type: 'image',
    category: 'campus',
    title: 'Classroom',
    description: 'Engaging and interactive classroom environment.',
    image: 'https://images.unsplash.com/photo-1719159381916-062fa9f435a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000',
  },
  {
    id: 3,
    type: 'image',
    category: 'campus',
    title: 'Library',
    description: 'Our library offers a peaceful reading environment.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tT7Zsj3EaLK1AsbDr7cEyE013jlJSK23Iw&s',
  },

  // Events
  {
    id: 4,
    type: 'image',
    category: 'events',
    title: 'Annual Function',
    description: 'Celebrating student talents and achievements.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvj0W9B-OlbuoGLMMepGK9i7fEQIEl0qc_g&s',
    featured: true,
  },
  {
    id: 5,
    type: 'image',
    category: 'events',
    title: 'Sports Day',
    description: 'Students participating in annual sports events.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbuoOJm-SaP8W-FC7mZeHnnBk0Bv0Tjmx6A&s',
  },

  // Students
  {
    id: 6,
    type: 'image',
    category: 'students',
    title: 'Art Session',
    description: 'Students showcasing creativity in art class.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GwFa_PbK_ekvhoxd_mMwh9tPzEcIV9DgYg&s',
  },
  {
    id: 7,
    type: 'image',
    category: 'students',
    title: 'Science Lab',
    description: 'Hands-on learning in our modern laboratory.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPcOHKpi63axLNRtoJZCPE-zfYh7slX-Itw&s',
    featured: true,
  },
];

const categories = [
  { id: 'all', name: 'All Photos', icon: ImageIcon, count: galleryItems.length },
  {
    id: 'campus',
    name: 'Campus',
    icon: GraduationCap,
    count: galleryItems.filter((i) => i.category === 'campus').length,
  },
  {
    id: 'events',
    name: 'Events',
    icon: Users,
    count: galleryItems.filter((i) => i.category === 'events').length,
  },
  {
    id: 'students',
    name: 'Students',
    icon: Users,
    count: galleryItems.filter((i) => i.category === 'students').length,
  },
  {
    id: 'achievements',
    name: 'Achievements',
    icon: Award,
    count: galleryItems.filter((i) => i.category === 'achievements').length,
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItems = galleryItems.filter((item) => item.featured);

  const openLightbox = (item: GalleryItem, index: number) => {
    setSelectedImage(item);
    setLightboxIndex(index);
  };

  const closeLightbox = () => setSelectedImage(null);

  const navigateLightbox = (dir: 'next' | 'prev') => {
    const currentIndex = filteredItems.findIndex((i) => i.id === selectedImage?.id);
    const newIndex =
      dir === 'next'
        ? (currentIndex + 1) % filteredItems.length
        : (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[newIndex]);
    setLightboxIndex(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'ArrowRight') navigateLightbox('next');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src="/images/campus-facilities.jpg"
            alt="School Gallery"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              Our <span className="text-amber-300">Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-3 text-base sm:text-lg max-w-2xl mx-auto text-gray-100 px-4"
            >
              Explore glimpses of our vibrant campus, classrooms, and memorable school events.
            </motion.p>
          </div>
        </section>

        <div className="py-20 container mx-auto px-6">

            {/* Featured Section */}
            <section className="mb-20 space-y-24">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 text-gray-800">
                Featured Moments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {featuredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    onClick={() => openLightbox(item, i)}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-all flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 md:h-10 md:w-10 text-white opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div className="p-3 md:p-4 bg-white">
                      <h3 className="font-semibold text-base md:text-lg text-gray-800">{item.title}</h3>
                      <p className="text-gray-600 text-xs md:text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Filter & Search */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
              <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center space-x-2 px-4 md:px-5 py-2 rounded-full font-semibold transition-all text-sm md:text-base ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                    }`}
                  >
                    <cat.icon className="h-4 w-4 md:h-5 md:w-5" />
                    <span>{cat.name}</span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        selectedCategory === cat.id
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-10 py-2 w-64 md:w-72 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-sm md:text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Gallery Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              <AnimatePresence>
                {filteredItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="rounded-xl overflow-hidden shadow-md cursor-pointer bg-white"
                    onClick={() => openLightbox(item, i)}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/50 transition-all flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 hover:opacity-100" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-800 line-clamp-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-6xl max-h-full bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Prev / Next */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Content */}
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 flex items-center justify-center p-8">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="max-h-[80vh] object-contain rounded-lg"
                  />
                </div>
                <div className="lg:w-80 bg-gray-900 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
                  <p className="text-gray-300 mb-4">{selectedImage.description}</p>
                  <p className="text-sm text-gray-400 capitalize mb-1">
                    Category: {selectedImage.category}
                  </p>
                  <p className="text-sm text-gray-400 mb-6">
                    Image {lightboxIndex + 1} of {filteredItems.length}
                  </p>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg">
                      Download
                    </button>
                    <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg">
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

