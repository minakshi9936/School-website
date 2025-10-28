'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Wallet, Info, FileDown } from 'lucide-react';
import Link from 'next/link';

export default function FeeStructure() {
  const feeData = [
    { cls: 'Nursery – KG', tuition: '₹2,000', annual: '₹4,000' },
    { cls: 'Class 1 – 5', tuition: '₹2,500', annual: '₹5,000' },
    { cls: 'Class 6 – 8', tuition: '₹3,000', annual: '₹6,000' },
    { cls: 'Class 9 – 10', tuition: '₹3,500', annual: '₹7,000' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fee-structure.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl text-white font-bold tracking-wide"
          >
            Fee Structure
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-16 text-gray-700"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full shadow-lg"
          >
            <Wallet size={28} />
          </motion.div>
          <h2 className="text-3xl font-bold mt-6 mb-2 text-blue-700">
            Transparent & Affordable Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            BrightFuture School is committed to providing quality education with a
            clear and fair fee structure. Here’s the detailed breakdown for the
            academic session 2026–27.
          </p>
        </div>

        {/* Download Button */}
        <div className="flex justify-center mb-10">
          <a
            href="/pdfs/fee-structure.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition shadow-md"
          >
            <FileDown size={20} />
            Download Fee Structure
          </a>
        </div>

        {/* Fee Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-gray-100"
        >
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left font-semibold">Class</th>
                <th className="px-6 py-4 text-left font-semibold">Tuition Fee (per month)</th>
                <th className="px-6 py-4 text-left font-semibold">Annual Charges</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`${i % 2 === 0 ? 'bg-blue-50/30' : 'bg-white'} hover:bg-blue-100/40 transition`}
                >
                  <td className="px-6 py-4 font-medium text-gray-800">{item.cls}</td>
                  <td className="px-6 py-4 text-gray-700">{item.tuition}</td>
                  <td className="px-6 py-4 text-gray-700">{item.annual}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-md"
        >
          <div className="flex items-start gap-3">
            <Info className="text-blue-600 mt-1" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Important Notes
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Admission fee and uniform charges are separate and non-refundable.</li>
                <li>Sibling discounts are available — contact administration for details.</li>
                <li>Tuition fees must be paid by the 10th of every month.</li>
                <li>Late payments attract a minimal fine after due date.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Ready to Join BrightFuture School?
          </h3>
          <Link
            href="/admission/admission-form"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition shadow-lg"
          >
            Apply for Admission
          </Link>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}
