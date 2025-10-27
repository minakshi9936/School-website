'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';

export default function GalleryPage() {
  const images = [
    '/images/school1.jpg',
    '/images/school2.jpg',
    '/images/lab.jpg',
    '/images/library.jpg',
    '/images/sports.jpg',
    '/images/event.jpg',
    '/images/art.jpg',
    '/images/classroom.jpg',
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-pink-50 to-white">
      <Navbar />

      <main className="flex-grow pt-24">
        <SectionWrapper id="gallery" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Our <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Gallery</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore glimpses of our vibrant campus, classrooms, and memorable school events.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {images.map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-2xl shadow-md"
                >
                  <img
                    src={src}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
