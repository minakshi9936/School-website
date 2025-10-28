'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building, Laptop, Trees, Shield, Trophy } from 'lucide-react';

export default function Infrastructure() {
  const infrastructureSections = [
    {
      title: 'Academic Buildings',
      icon: <Building className="w-10 h-10 text-blue-700" />,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_hCW0WPtsRJeULVJxcR2UpZHMTXEO1rrbuQ&s',
      desc: `Our academic blocks are equipped with spacious, well-ventilated classrooms, 
             ergonomic furniture, and digital smartboards. Each room is designed to create 
             a dynamic and interactive learning environment that encourages participation.`,
    },
    {
      title: 'Technology & Laboratories',
      icon: <Laptop className="w-10 h-10 text-purple-700" />,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8WFHZfP0K5uPBZJFqQjHvHr89qIC6yZU7w&s',
      desc: `We provide state-of-the-art computer, science, and robotics labs that give students 
             hands-on experience in practical learning. All laboratories are updated with the 
             latest tools and safety standards to ensure innovation thrives.`,
    },
    {
      title: 'Sports & Recreation',
      icon: <Trophy className="w-10 h-10 text-amber-600" />,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbuoOJm-SaP8W-FC7mZeHnnBk0Bv0Tjmx6A&s',
      desc: `Our extensive sports complex includes football fields, basketball courts, 
             indoor badminton arenas, and yoga halls. We encourage physical well-being 
             as an integral part of every student’s daily routine.`,
    },
    {
      title: 'Campus Environment',
      icon: <Trees className="w-10 h-10 text-green-600" />,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtxBHLeQOFBQDncT_Wf9ulCkblcL-x_IfHA&s',
      desc: `The lush green campus offers a serene learning environment surrounded by gardens, 
             eco-friendly spaces, and open courtyards. The natural surroundings instill peace, 
             positivity, and respect for the environment.`,
    },
    {
      title: 'Safety & Sustainability',
      icon: <Shield className="w-10 h-10 text-red-600" />,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzW8-zzE3u2DaRU93qT6ZfstVTSaid7CVGBA&s',
      desc: `Student safety is our top priority. The campus features round-the-clock security, 
             surveillance systems, fire safety mechanisms, and a well-structured evacuation plan. 
             Solar panels and rainwater harvesting systems reflect our sustainable vision.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/infrastructure.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          >
            Infrastructure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 mt-3 max-w-3xl mx-auto"
          >
            A perfect balance of modern architecture, technology, and sustainability that fosters holistic growth.
          </motion.p>
        </div>
      </section>

      {/* Introduction Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 py-20 text-gray-700 text-center"
      >
        <p className="text-lg leading-relaxed">
          Our school’s infrastructure has been carefully crafted to create an ideal learning ecosystem — 
          one that inspires students to explore, innovate, and achieve. With world-class facilities, 
          sustainable practices, and modern amenities, we ensure every learner experiences excellence in education and environment.
        </p>
      </motion.section>

      {/* Infrastructure Grid */}
      <section className="container mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {infrastructureSections.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition"
            >
              <div
                className="h-56 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${section.img})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <div className="text-white text-xl font-semibold drop-shadow-md">
                    {section.title}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  {section.icon}
                  <h3 className="text-2xl font-semibold text-blue-800">{section.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{section.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Closing Message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-blue-900 text-white text-center py-16 px-6"
      >
        <h2 className="text-3xl font-bold mb-3">Built for the Future of Education</h2>
        <p className="max-w-3xl mx-auto text-gray-200 text-lg">
          Our infrastructure represents our commitment to providing students with a safe, inspiring, 
          and technologically advanced environment — where learning goes beyond classrooms and creativity knows no bounds.
        </p>
      </motion.div>

      <Footer />
    </div>
  );
}
