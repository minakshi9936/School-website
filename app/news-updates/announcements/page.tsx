'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Search, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

export default function Announcements() {
  const allAnnouncements = [
    {
      title: 'Annual Sports Day 2026 Announced',
      date: 'March 10, 2026',
      category: 'Events',
      desc: 'Join us for a day full of fun, energy, and competition at the BrightFuture Sports Arena. Students from all grades are encouraged to participate.',
      details:
        'Sports activities will include track races, long jump, relay, tug of war, and more. Parents are welcome to attend. Participants should register by March 5, 2026.',
    },
    {
      title: 'Parent-Teacher Meeting Scheduled',
      date: 'January 5, 2026',
      category: 'Academics',
      desc: 'Parents are invited to discuss student progress and academic goals with class teachers.',
      details:
        'Meeting slots will be available between 9:00 AM - 2:00 PM. Each parent will receive their slot via SMS and school app notifications. Attendance is highly encouraged.',
    },
    {
      title: 'Winter Break Notice',
      date: 'December 24, 2025',
      category: 'Holiday',
      desc: 'School will remain closed for Winter Break from December 24, 2025, to January 1, 2026.',
      details:
        'Classes will resume on January 2, 2026. Students are advised to complete pending assignments and prepare for upcoming exams.',
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = allAnnouncements.filter(
    (a) =>
      (filter === 'All' || a.category === filter) &&
      (a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[55vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/announcements.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold text-center"
          >
            Latest Announcements
          </motion.h1>
        </div>
      </section>

      {/* Filters & Search */}
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full md:w-1/2 bg-white px-4 py-2 rounded-xl shadow-sm">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search announcements..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-gray-700"
          />
        </div>
        <select
          className="px-4 py-2 rounded-xl border border-gray-300 shadow-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Events">Events</option>
          <option value="Academics">Academics</option>
          <option value="Holiday">Holidays</option>
        </select>
      </div>

      {/* Announcements List */}
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        <AnimatePresence>
          {filtered.length > 0 ? (
            filtered.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white shadow-md rounded-2xl p-6 border-l-4 border-blue-600"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-blue-700">
                      {a.title}
                    </h2>
                    <p className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                      <Calendar size={16} /> {a.date} |{' '}
                      <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-medium">
                        {a.category}
                      </span>
                    </p>
                    <p className="text-gray-700 mt-2">{a.desc}</p>
                  </div>
                  <button
                    onClick={() =>
                      setExpanded(expanded === i ? null : i)
                    }
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    {expanded === i ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden border-t mt-3 pt-3 text-gray-600"
                    >
                      {a.details}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 text-gray-500"
            >
              No announcements found.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}

