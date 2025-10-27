'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FeeStructure() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/fee-structure.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Fee Structure
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto px-6 py-16 text-gray-700"
      >
        <p className="text-lg mb-8">
          At BrightFuture School, we ensure transparent and affordable fee
          structures for every student. Below is the academic fee breakdown for
          the session 2026–27.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 shadow-lg rounded-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Class</th>
                <th className="px-6 py-3 text-left">Tuition Fee (per month)</th>
                <th className="px-6 py-3 text-left">Annual Charges</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Nursery – KG', '₹2,000', '₹4,000'],
                ['Class 1 – 5', '₹2,500', '₹5,000'],
                ['Class 6 – 8', '₹3,000', '₹6,000'],
                ['Class 9 – 10', '₹3,500', '₹7,000'],
              ].map(([cls, tuition, annual], i) => (
                <tr
                  key={i}
                  className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b`}
                >
                  <td className="px-6 py-3">{cls}</td>
                  <td className="px-6 py-3">{tuition}</td>
                  <td className="px-6 py-3">{annual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}
