'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TransferCertificate() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* Hero */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/transfer-certificate.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Transfer Certificate
          </h1>
        </div>
      </section>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-16 text-gray-700"
      >
        <p className="text-lg mb-6">
          Parents or guardians can request a Transfer Certificate (TC) by
          submitting a written application to the school office. The TC will be
          issued within 3–5 working days after processing.
        </p>

        <h2 className="text-xl font-semibold text-blue-700 mb-3">
          TC Request Process:
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Submit a written request for TC.</li>
          <li>Clear all dues (if applicable).</li>
          <li>Collect the signed and sealed certificate from the office.</li>
        </ol>
      </motion.div>
      <Footer />
    </div>
  );
}
