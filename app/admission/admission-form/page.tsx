'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formId, setFormId] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    classApplying: '',
    fatherName: '',
    motherName: '',
    contact: '',
    email: '',
    address: '',
    birthCertificate: null,
    residenceProof: null,
    lastReportCard: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.studentName ||
      !formData.dob ||
      !formData.classApplying ||
      !formData.fatherName ||
      !formData.contact
    ) {
      alert('Please fill all required fields marked with *');
      return;
    }

    // Generate a unique form ID
    const id = 'ADM' + Date.now().toString().slice(-6);
    setFormId(id);
    setSubmitted(true);
  };

  const handleNewApplication = () => {
    setFormData({
      studentName: '',
      dob: '',
      classApplying: '',
      fatherName: '',
      motherName: '',
      contact: '',
      email: '',
      address: '',
      birthCertificate: null,
      residenceProof: null,
      lastReportCard: null,
    });
    setSubmitted(false);
    setFormId('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/admission-bg.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold"
          >
            Admission Form
          </motion.h1>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-16 flex-grow">
        {/* Guidelines Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-xl shadow-md p-8 mb-10"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            Registration Guidelines
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>All fields marked with * are mandatory.</li>
            <li>
              Names of the student and parents must match official documents
              (Birth Certificate / Aadhar Card).
            </li>
            <li>Upload clear scanned copies of required documents.</li>
            <li>Incorrect or incomplete forms will be rejected.</li>
            <li>
              Age eligibility and class criteria will be verified before final
              admission.
            </li>
          </ul>
        </motion.div>

        {/* Admission Form / Acknowledgement */}
        {!submitted ? (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 space-y-6"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Student Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Class Applying For *
                </label>
                <select
                  name="classApplying"
                  value={formData.classApplying}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                >
                  <option value="">Select Class</option>
                  {['Nursery', 'KG', ...Array.from({ length: 10 }, (_, i) => `Class ${i + 1}`)].map((cls, i) => (
                    <option key={i} value={cls}>{cls}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Contact Number *
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-medium text-gray-700">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
              Parent Details
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700">
                  Father's Name *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700">
                  Mother's Name
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
              Document Uploads
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Birth Certificate', name: 'birthCertificate' },
                { label: 'Residence Proof', name: 'residenceProof' },
                { label: 'Last Report Card', name: 'lastReportCard' },
              ].map((doc, i) => (
                <div key={i}>
                  <label className="block font-medium text-gray-700">{doc.label}</label>
                  <input
                    type="file"
                    name={doc.name}
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 bg-gray-50"
                  />
                </div>
              ))}
            </div>

            <div className="pt-8 flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </div>
          </motion.form>
        ) : (
          // Acknowledgement Screen
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-green-50 border border-green-200 rounded-xl p-8 text-center shadow-md"
            >
              <h2 className="text-3xl font-bold text-green-700 mb-4">
                Application Submitted Successfully!
              </h2>
              <p className="text-gray-700 mb-6">
                Thank you for applying. Your application has been received.
              </p>
              <div className="bg-white border border-green-200 rounded-lg p-4 inline-block shadow-sm mb-6">
                <p className="text-gray-600 text-sm">Your Form ID</p>
                <p className="text-2xl font-bold text-green-700">{formId}</p>
              </div>
              <p className="text-gray-600 mb-8">
                Please save this Form ID for future reference or admission inquiries.
              </p>
              <button
                onClick={handleNewApplication}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Start New Application
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <Footer />
    </div>
  );
}
