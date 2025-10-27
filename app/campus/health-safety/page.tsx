'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HealthSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/health-safety.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Health & Safety
          </h1>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <p className="text-lg text-gray-700">
          Student safety and well-being are our top priorities. Our campus
          includes an on-site infirmary, regular health check-ups, and trained
          safety personnel to ensure a secure environment for all students.
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}
