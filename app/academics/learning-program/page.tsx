'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LearningProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/learning-program.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Learning Program
          </h1>
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-16 text-gray-700"
      >
        <p className="text-lg">
          Our curriculum emphasizes critical thinking, innovation, and practical
          learning. The learning programs are designed to balance academics with
          extracurricular excellence.
        </p>
      </motion.div>
      <Footer />
    </div>
  );
}
