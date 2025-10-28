'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Search, X } from 'lucide-react';

export default function News() {
  const allNews = [
    {
      title: 'BrightFuture Students Win Coding Challenge 2026',
      img: '/images/news1.jpg',
      date: 'March 20, 2025',
      category: 'Achievements',
      desc: 'Our students secured 1st place at the National Coding Olympiad held in Delhi.',
      details:
        'A group of BrightFuture High School students won the National Coding Olympiad 2026, outperforming 200+ teams from across India. Their project, “EduCode”, focused on using AI for personalized education. The school principal congratulated the team and announced that they will represent the state at the upcoming International Tech Meet.',
    },
    {
      title: 'New Library Wing Inaugurated',
      img: '/images/news2.jpg',
      date: 'February 8, 2025',
      category: 'Infrastructure',
      desc: 'The new digital library includes e-learning pods, a reading zone, and AI study tools.',
      details:
        'The new library block was inaugurated by the Education Minister. It features over 10,000 digital books, AI-powered study tools, and collaborative zones for group projects. Students can access e-learning modules through touch-screen panels integrated with the school’s learning management system.',
    },
    {
      title: 'Annual Science Fair 2025 Results Announced',
      img: '/images/news3.jpg',
      date: 'December 10, 2024',
      category: 'Events',
      desc: 'Over 100 projects were showcased in this year’s science fair, promoting innovation and creativity.',
      details:
        'The Annual Science Fair 2025 concluded with an inspiring exhibition of innovative ideas by students from grades 6–12. The top prize went to “EcoBot”, a waste-sorting robot developed by Class 10 students. All participants were appreciated for their creativity and teamwork.',
    },
    {
      title: 'Scholarship Program 2026 Applications Open',
      img: '/images/news4.jpg',
      date: 'January 5, 2026',
      category: 'Announcements',
      desc: 'BrightFuture launches a new merit-based scholarship for high-performing students.',
      details:
        'The 2026 scholarship program invites applications from students excelling in academics, sports, or arts. Eligible students can apply through the school portal by May 10. The program aims to encourage well-rounded student development.',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const filteredNews = allNews.filter(
    (n) =>
      (filter === 'All' || n.category === filter) &&
      (n.title.toLowerCase().includes(search.toLowerCase()) ||
        n.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[55vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/news-bg.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold mb-3"
          >
            Latest News & Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/90 max-w-2xl text-lg"
          >
            Stay informed with the latest happenings, announcements, and achievements from BrightFuture School.
          </motion.p>
        </div>
      </section>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center w-full md:w-1/2 bg-white px-4 py-2 rounded-xl shadow-sm border">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search news..."
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
          <option value="All">All News</option>
          <option value="Achievements">Achievements</option>
          <option value="Events">Events</option>
          <option value="Infrastructure">Infrastructure</option>
          <option value="Announcements">Announcements</option>
        </select>
      </div>

      {/* News Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {filteredNews.length > 0 ? (
            filteredNews.map((n, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img src={n.img} alt={n.title} className="h-52 w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {n.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-700">{n.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar size={14} /> {n.date}
                  </p>
                  <p className="text-gray-700 text-sm mt-2">{n.desc}</p>
                  <button
                    onClick={() => setSelectedNews(n)}
                    className="mt-4 text-blue-700 font-medium hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-gray-500 mt-20"
            >
              No news found.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white max-w-2xl w-full rounded-2xl overflow-hidden shadow-xl relative"
            >
              <img src={selectedNews.img} alt={selectedNews.title} className="h-56 w-full object-cover" />
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white"
              >
                <X className="text-gray-700" />
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-700">{selectedNews.title}</h2>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                  <Calendar size={16} /> {selectedNews.date}
                </p>
                <p className="text-gray-700 mt-4 leading-relaxed">{selectedNews.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

