'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <Image
          src="/images/campus-facilities.jpg"
          alt="School Facilities"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/40">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold"
          >
            World-Class Facilities
          </motion.h1>
          <p className="mt-3 text-lg max-w-2xl mx-auto">
            Our school provides modern amenities designed to foster learning, creativity, and growth.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Smart Classrooms', img: '/images/classroom.jpg' },
            { title: 'Science Labs', img: '/images/lab.jpg' },
            { title: 'Library', img: '/images/library.jpg' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">
                  Experience the best infrastructure designed to enhance student engagement and success.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      </main>
      <Footer />
    </div>
  );
}
