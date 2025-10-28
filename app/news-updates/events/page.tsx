'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Clock, MapPin, Search, X } from 'lucide-react';

export default function Events() {
  const allEvents = [
    {
      title: 'Cultural Fest 2026',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_lKRBN4PFxZNQPJ1PPcHJ803ji81Pjuq9qA&s',
      date: 'March 25, 2026',
      time: '9:00 AM - 5:00 PM',
      location: 'School Auditorium',
      category: 'Upcoming',
      desc: 'A showcase of talent, creativity, and diversity through dance, music, drama, and cultural performances.',
      details:
        'The Cultural Fest 2026 brings together students from all grades to perform in a wide range of activities including traditional dance, music, theatre, and more. The theme for this year is "Unity in Diversity". Parents are cordially invited.',
    },
    {
      title: 'Science Exhibition',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjViwFuGAU6io1ElwbHhm6iVrtB_D_n2HYA&s',
      date: 'February 15, 2026',
      time: '10:00 AM - 3:00 PM',
      location: 'Innovation Lab',
      category: 'Upcoming',
      desc: 'Encouraging innovation and discovery among students.',
      details:
        'Our annual Science Exhibition encourages students to present their innovative projects and scientific models. Judges from reputed institutions will be present. Winners will receive special certificates and prizes.',
    },
    {
      title: 'Art Week 2025',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GwFa_PbK_ekvhoxd_mMwh9tPzEcIV9DgYg&s',
      date: 'December 10–15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Art Hall',
      category: 'Past',
      desc: 'Celebrating art through workshops and student exhibits.',
      details:
        'Art Week included painting, sculpture, and craft workshops led by professional artists. Students’ artworks were displayed in the exhibition gallery for the entire week.',
    },
    {
      title: 'Independence Day Celebration',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrYwXJ81qwv7a9fCYjsqJR5QrnWzR7KulHg&s',
      date: 'August 15, 2025',
      time: '8:00 AM - 11:00 AM',
      location: 'School Ground',
      category: 'Past',
      desc: 'Honoring the spirit of freedom with flag hoisting and cultural programs.',
      details:
        'The event began with the flag hoisting ceremony followed by patriotic songs and speeches. Awards were distributed to outstanding performers in academics and sports.',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const filteredEvents = allEvents.filter(
    (e) =>
      (filter === 'All' || e.category === filter) &&
      (e.title.toLowerCase().includes(search.toLowerCase()) ||
        e.desc.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[55vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/events.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold text-center"
          >
            School Events
          </motion.h1>
        </div>
      </section>

      {/* Search & Filter */}
      <div className="max-w-6xl mx-auto px-6 mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center w-full md:w-1/2 bg-white px-4 py-2 rounded-xl shadow-sm">
          <Search className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search events..."
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
          <option value="All">All Events</option>
          <option value="Upcoming">Upcoming</option>
          <option value="Past">Past</option>
        </select>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={e.img}
                    alt={e.title}
                    className="h-48 w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    {e.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-700">
                    {e.title}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar size={14} /> {e.date}
                  </p>
                  <p className="text-gray-700 text-sm mt-2">{e.desc}</p>
                  <button
                    onClick={() => setSelectedEvent(e)}
                    className="mt-4 text-blue-700 font-medium hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-gray-500 mt-20"
            >
              No events found.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Event Details Modal */}
      <AnimatePresence>
        {selectedEvent && (
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
              <img
                src={selectedEvent.img}
                alt={selectedEvent.title}
                className="h-56 w-full object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white"
              >
                <X className="text-gray-700" />
              </button>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-blue-700">
                  {selectedEvent.title}
                </h2>
                <p className="text-sm text-gray-500 flex items-center gap-2 mt-2">
                  <Calendar size={16} /> {selectedEvent.date}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <Clock size={16} /> {selectedEvent.time}
                </p>
                <p className="text-sm text-gray-500 flex items-center gap-2">
                  <MapPin size={16} /> {selectedEvent.location}
                </p>
                <p className="text-gray-700 mt-4">{selectedEvent.details}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
