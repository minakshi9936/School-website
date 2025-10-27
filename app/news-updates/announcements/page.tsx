'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Announcements() {
  const announcements = [
    {
      title: 'Annual Sports Day 2026 Announced',
      date: 'March 10, 2026',
      desc: 'Join us for a day full of fun, energy, and competition at the BrightFuture Sports Arena.',
    },
    {
      title: 'Parent-Teacher Meeting Scheduled',
      date: 'January 5, 2026',
      desc: 'Parents are invited to discuss student progress and academic goals.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/announcements.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Announcements
          </h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        {announcements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-600"
          >
            <h2 className="text-2xl font-semibold text-blue-700">{a.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{a.date}</p>
            <p className="text-gray-700">{a.desc}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
