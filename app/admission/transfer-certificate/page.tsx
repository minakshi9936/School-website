'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, ClipboardCheck, HelpCircle, PhoneCall, FileDown } from 'lucide-react';
import Link from 'next/link';

export default function TransferCertificate() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/transfer-certificate.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center text-center px-4">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold tracking-wide"
          >
            Transfer Certificate (TC)
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 text-gray-700"
      >
        {/* Intro */}
        <div className="text-center mb-12">
          <FileText className="w-12 h-12 mx-auto text-blue-700 mb-4" />
          <h2 className="text-3xl font-semibold text-blue-700 mb-2">
            Applying for a Transfer Certificate
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The Transfer Certificate (TC) is an official document provided to students
            when they wish to leave the school. It certifies the student’s attendance
            and conduct during their tenure at the institution.
          </p>
        </div>

        {/* Request Process */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-12 border border-gray-100">
          <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
            <ClipboardCheck size={24} /> TC Request Process
          </h3>
          <ol className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Submit a written application to the school office, mentioning student name, class, and reason for leaving.</li>
            <li>Ensure that all school dues, library books, and materials are cleared.</li>
            <li>Parents or guardians must verify all details in the school records before submission.</li>
            <li>The Transfer Certificate will be processed within <b>3–5 working days</b> after approval from the principal.</li>
            <li>Collect the signed and sealed certificate from the school office during working hours.</li>
          </ol>
        </div>

        {/* Required Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-12 shadow-md"
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Documents Required
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Written application by parent/guardian</li>
            <li>Copy of the latest fee receipt</li>
            <li>No Dues Certificate (if applicable)</li>
            <li>Identity proof of the parent/guardian</li>
          </ul>
        </motion.div>

        {/* Download Form */}
        <div className="text-center mb-16">
          <a
            href="/pdfs/transfer-certificate-form.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <FileDown size={20} />
            Download TC Request Form
          </a>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-100 rounded-2xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-semibold text-blue-700 flex items-center gap-2 mb-6">
            <HelpCircle size={24} /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-800">1. Can I apply for TC online?</h4>
              <p className="text-gray-600">Currently, TC requests must be submitted offline at the school office along with necessary documents.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">2. How long does it take to receive the TC?</h4>
              <p className="text-gray-600">It usually takes 3–5 working days after verification and clearance of all dues.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">3. Is there any fee for obtaining a TC?</h4>
              <p className="text-gray-600">No fee is charged for the first copy. Duplicate copies may require a minimal administrative fee.</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center bg-blue-600 text-white rounded-2xl py-10 px-6 shadow-lg"
        >
          <PhoneCall className="w-10 h-10 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Need Help?</h3>
          <p className="text-blue-100 max-w-xl mx-auto mb-4">
            For any queries related to Transfer Certificates, reach out to our
            administration department.
          </p>
          <p className="font-medium">📞 +91 98765 43210 | ✉️ info@brightfuture.edu.in</p>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
}
