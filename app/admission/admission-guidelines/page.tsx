'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdmissionGuidelines() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* Hero */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/admission-guidelines.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Admission Guidelines
          </h1>
        </div>
      </section>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-16 text-gray-700"
      >
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">
          Admission Procedure
        </h2>
        <ul className="list-decimal pl-6 space-y-3">
          <li>Collect the registration form from the school office or apply online.</li>
          <li>Submit filled form with required documents before the last date.</li>
          <li>Attend interaction/test session (for specific classes).</li>
          <li>Selected candidates will receive an admission confirmation email/SMS.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
          Documents Required
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Birth Certificate</li>
          <li>Previous School Report Card</li>
          <li>Transfer Certificate (if applicable)</li>
          <li>Passport-size Photographs (3 copies)</li>
        </ul>
      </motion.div>
      <Footer />
    </div>
  );
}
