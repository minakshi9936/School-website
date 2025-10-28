'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {
  BookOpen,
  Lightbulb,
  Users,
  Trophy,
  Globe,
  Brain,
} from 'lucide-react';

export default function LearningProgram() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/learning-program.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold"
          >
            Learning Program
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 mt-3 max-w-2xl"
          >
            Nurturing curiosity, creativity, and critical thinking through a holistic, modern, and student-centered approach.
          </motion.p>
        </div>
      </section>

      {/* Overview */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 text-gray-700"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          A Curriculum Beyond Textbooks
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Our learning programs combine academic excellence with experiential learning,
          allowing students to explore ideas, collaborate with peers, and develop skills
          essential for success in the real world. We focus on concept-based understanding
          rather than rote memorization.
        </p>
      </motion.section>

      {/* Academic Stages */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-800 mb-10">
            Academic Stages
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <BookOpen className="w-10 h-10 text-blue-700" />,
                title: 'Primary Years (Grades 1–5)',
                desc: 'Focus on building strong foundations in language, math, and science through hands-on and activity-based learning.',
              },
              {
                icon: <Brain className="w-10 h-10 text-blue-700" />,
                title: 'Middle Years (Grades 6–8)',
                desc: 'Encouraging curiosity and analytical skills through project-based learning, coding, and integrated subjects.',
              },
              {
                icon: <Lightbulb className="w-10 h-10 text-blue-700" />,
                title: 'Senior Years (Grades 9–12)',
                desc: 'Preparation for higher education with specialized subjects, research exposure, and leadership opportunities.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-10">
            Co-Curricular & Enrichment Programs
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Trophy className="w-10 h-10 text-blue-700" />,
                title: 'Sports & Athletics',
                desc: 'Comprehensive physical education programs that encourage teamwork, discipline, and a spirit of healthy competition.',
              },
              {
                icon: <Users className="w-10 h-10 text-blue-700" />,
                title: 'Clubs & Societies',
                desc: 'From debate and robotics to arts and environment, students explore passions and develop leadership skills.',
              },
              {
                icon: <Globe className="w-10 h-10 text-blue-700" />,
                title: 'Global Learning',
                desc: 'Exposure to international perspectives through exchange programs, cultural events, and virtual collaborations.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCOVB8BDwBS8P9dCeznqqe06bG1TXsfj_6A&s"
            alt="Teaching Methodology"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Innovative Teaching Methods
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We employ an inquiry-driven and collaborative learning approach
              that integrates technology, real-world applications, and peer
              interaction. Teachers act as facilitators, guiding students to
              question, experiment, and discover.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li>Smart classrooms equipped with interactive boards.</li>
              <li>STEM-based projects and practical science experiments.</li>
              <li>Collaborative group activities and presentations.</li>
              <li>Integration of digital learning tools and virtual labs.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-10">
            Learning in Action
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              '/images/classroom-learning.jpg',
              '/images/group-activity.jpg',
              '/images/robotics-lab.jpg',
              '/images/science-experiment.jpg',
              '/images/sports-day.jpg',
              '/images/art-class.jpg',
            ].map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={src}
                  alt={`Learning Program ${i + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover hover:brightness-110 transition"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center bg-blue-900 text-white"
      >
        <h2 className="text-3xl font-semibold mb-4">Shaping Future Innovators</h2>
        <p className="max-w-3xl mx-auto text-white/90">
          Our goal is to inspire students to think critically, act compassionately,
          and lead confidently in an ever-changing world.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}
