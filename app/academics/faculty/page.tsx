'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FacultyDirectory() {
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const faculty = [
  { name: 'Dr. Meera Sharma', department: 'Science', qualification: 'Ph.D. in Physics', experience: '15 years' },
  { name: 'Mr. Rajiv Patel', department: 'Mathematics', qualification: 'M.Sc. in Mathematics', experience: '12 years' },
  { name: 'Ms. Nita Rao', department: 'English', qualification: 'M.A. in English', experience: '10 years' },
  { name: 'Mr. Arjun Singh', department: 'Computer Science', qualification: 'B.Tech in Computer Science', experience: '8 years' },
  { name: 'Mrs. Kavita Joshi', department: 'Social Science', qualification: 'M.A. in History', experience: '14 years' },
  { name: 'Mr. Sameer Khan', department: 'Physical Education', qualification: 'B.P.Ed.', experience: '9 years' },
  { name: 'Ms. Pooja Das', department: 'Biology', qualification: 'M.Sc. in Botany', experience: '7 years' },
  { name: 'Mrs. Rekha Nair', department: 'Chemistry', qualification: 'M.Sc. in Chemistry', experience: '11 years' },
  { name: 'Dr. Suresh Menon', department: 'Physics', qualification: 'Ph.D. in Astrophysics', experience: '18 years' },
  { name: 'Ms. Anjali Verma', department: 'Computer Science', qualification: 'M.Tech in Artificial Intelligence', experience: '6 years' },
  { name: 'Mr. Deepak Yadav', department: 'Mathematics', qualification: 'Ph.D. in Applied Mathematics', experience: '16 years' },
  { name: 'Mrs. Ritu Malhotra', department: 'Commerce', qualification: 'M.Com in Accounting', experience: '13 years' },
  { name: 'Mr. Harish Gupta', department: 'Economics', qualification: 'M.A. in Economics', experience: '10 years' },
  { name: 'Ms. Sneha Iyer', department: 'Fine Arts', qualification: 'BFA in Painting', experience: '9 years' },
  { name: 'Mr. Vinod Thakur', department: 'Physical Education', qualification: 'M.P.Ed.', experience: '12 years' },
  { name: 'Dr. Priya Nandan', department: 'Biotechnology', qualification: 'Ph.D. in Biotechnology', experience: '17 years' },
  { name: 'Ms. Alisha Fernandes', department: 'English', qualification: 'Ph.D. in Linguistics', experience: '8 years' },
  { name: 'Mr. Manoj Rawat', department: 'Political Science', qualification: 'M.A. in Political Science', experience: '15 years' },
  { name: 'Mrs. Shalini Kapoor', department: 'Computer Science', qualification: 'MCA', experience: '9 years' },
  { name: 'Dr. Anupama Roy', department: 'Zoology', qualification: 'Ph.D. in Zoology', experience: '14 years' },
  { name: 'Mr. Chetan Deshmukh', department: 'Mechanical Engineering', qualification: 'B.E. in Mechanical Engineering', experience: '11 years' },
  { name: 'Ms. Neha Bansal', department: 'Psychology', qualification: 'M.A. in Psychology', experience: '10 years' },
  { name: 'Dr. Rohit Sinha', department: 'Chemistry', qualification: 'Ph.D. in Organic Chemistry', experience: '19 years' },
  { name: 'Mrs. Lata Pillai', department: 'Sociology', qualification: 'M.A. in Sociology', experience: '13 years' },
];

  const filteredFaculty = faculty.filter(
    f =>
      f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.department.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/faculty-bg.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Faculty Directory
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-gray-200 mt-4 max-w-2xl mx-auto text-lg"
          >
            Meet our dedicated team of educators — committed to inspiring, mentoring, and empowering young minds.
          </motion.p>
        </div>
      </section>

      {/* Search + Table Section */}
      <main className="max-w-6xl mx-auto px-6 py-16 flex-grow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4 md:mb-0">
            All Faculty Members
          </h2>
          <input
            type="text"
            placeholder="Search by name or department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto bg-white rounded-xl shadow-lg"
        >
          <table className="w-full border-collapse">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Department</th>
                <th className="py-3 px-4 text-left">Qualification</th>
                <th className="py-3 px-4 text-left">Experience</th>
              </tr>
            </thead>
            <tbody>
              {filteredFaculty.length > 0 ? (
                filteredFaculty.map((f, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="py-3 px-4">{f.name}</td>
                    <td className="py-3 px-4">{f.department}</td>
                    <td className="py-3 px-4">{f.qualification}</td>
                    <td className="py-3 px-4">{f.experience}</td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>

        {/* Career Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Join Our Teaching Team
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Passionate about education and eager to make a difference? Apply now and become a part of our inspiring academic family.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all"
          >
            Apply for Career
          </motion.button>
        </motion.div>
      </main>

      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-lg p-8 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
              >
                &times;
              </button>
              <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
                Apply for Teaching Position
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject / Department"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <textarea
                  placeholder="Why would you like to join us?"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all font-semibold"
                >
                  Submit Application
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

