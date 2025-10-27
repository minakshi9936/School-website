'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdmissionForm() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/admission-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Admission Form
          </h1>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <p className="text-gray-700 mb-6">
          Fill out the form below to apply for admission. Our team will reach
          out shortly.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Open Detailed Form
        </button>
      </motion.div>
      <Footer />
    </div>
  );
}
