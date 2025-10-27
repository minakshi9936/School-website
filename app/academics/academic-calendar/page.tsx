'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AcademicCalendar() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/calendar.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Academic Calendar
          </h1>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-6 py-16 text-gray-700"
      >
        <p className="text-lg">
          Our academic calendar ensures balanced learning throughout the year.
          Stay updated with session dates, holidays, and events.
        </p>
        <ul className="list-disc pl-6 mt-6 space-y-2">
          <li>Session Start: April 1</li>
          <li>Summer Vacation: May 25 - June 30</li>
          <li>Mid-Term Exams: September</li>
          <li>Annual Exams: February</li>
        </ul>
      </motion.div>
      <Footer />
    </div>
  );
}
