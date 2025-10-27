'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Faculty() {
  const faculty = [
    { name: 'Dr. Meera Sharma', subject: 'Physics', image: '/images/faculty1.jpg' },
    { name: 'Mr. Rajiv Patel', subject: 'Mathematics', image: '/images/faculty2.jpg' },
    { name: 'Ms. Nita Rao', subject: 'English', image: '/images/faculty3.jpg' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/faculty-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">
            Our Faculty
          </h1>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {faculty.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md text-center p-6"
          >
            <img
              src={f.image}
              alt={f.name}
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-blue-700">{f.name}</h3>
            <p className="text-gray-600">{f.subject}</p>
          </motion.div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
