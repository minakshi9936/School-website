'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function News() {
  const newsList = [
    {
      title: 'BrightFuture Students Win Coding Challenge 2026',
      img: '/images/news1.jpg',
      desc: 'Our students secured 1st place at the National Coding Olympiad held in Delhi.',
    },
    {
      title: 'New Library Wing Inaugurated',
      img: '/images/news2.jpg',
      desc: 'The new digital library includes e-learning pods, a reading zone, and AI study tools.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/news-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Latest News
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {newsList.map((n, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img src={n.img} alt={n.title} className="h-52 w-full object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-blue-700">{n.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{n.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
