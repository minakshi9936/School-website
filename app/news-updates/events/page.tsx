'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Events() {
  const events = [
    { title: 'Cultural Fest 2026', img: '/images/event1.jpg', desc: 'A showcase of talent, creativity, and diversity.' },
    { title: 'Science Exhibition', img: '/images/event2.jpg', desc: 'Encouraging innovation and discovery among students.' },
    { title: 'Art Week', img: '/images/event3.jpg', desc: 'Celebrating art through workshops and student exhibits.' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/events.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Events
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {events.map((e, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={e.img} alt={e.title} className="h-48 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-700">{e.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
