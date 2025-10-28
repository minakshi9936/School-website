'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import {
  BookOpen,
  Brain,
  Users,
  Globe,
  PenTool,
  Award,
} from 'lucide-react';

export default function Curriculum() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/curriculum.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold"
          >
            Our Curriculum
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 mt-3 max-w-2xl"
          >
            Building strong academic foundations while nurturing curiosity, values, and creativity in every learner.
          </motion.p>
        </div>
      </section>

      {/* Curriculum Philosophy */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 text-gray-700"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          Our Educational Philosophy
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          The curriculum at our school integrates academics, co-curricular, and life skills to promote holistic development.  
          It aligns with the principles of the <strong>National Education Policy (NEP)</strong>, emphasizing experiential learning,  
          critical thinking, and cross-disciplinary exposure.
        </p>
      </motion.section>

      {/* Academic Structure */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-800 mb-10">
            Academic Framework
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10 text-blue-700" />,
                title: 'Pre-Primary (Nursery–KG)',
                desc: 'Play-based, sensory-rich activities that encourage curiosity and social-emotional learning.',
              },
              {
                icon: <BookOpen className="w-10 h-10 text-blue-700" />,
                title: 'Primary (Grades 1–5)',
                desc: 'Strong literacy and numeracy foundation with hands-on exploration and thematic learning.',
              },
              {
                icon: <Brain className="w-10 h-10 text-blue-700" />,
                title: 'Middle (Grades 6–8)',
                desc: 'Introduction to advanced concepts, project-based learning, and skill integration.',
              },
              {
                icon: <Award className="w-10 h-10 text-blue-700" />,
                title: 'Senior (Grades 9–12)',
                desc: 'Career-oriented and research-based learning that prepares students for higher education and global opportunities.',
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
                <h4 className="text-lg font-semibold text-blue-900 mb-2 text-center">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Learning Areas */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-10">
            Core Subjects & Skill Domains
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <PenTool className="w-10 h-10 text-blue-700" />,
                title: 'Scholastic Areas',
                desc: 'Languages, Mathematics, Science, Social Studies, and Computer Education to strengthen analytical and communication skills.',
              },
              {
                icon: <Globe className="w-10 h-10 text-blue-700" />,
                title: 'Co-Scholastic Areas',
                desc: 'Art, Music, Dance, and Physical Education promote creativity, teamwork, and holistic wellness.',
              },
              {
                icon: <Brain className="w-10 h-10 text-blue-700" />,
                title: 'Life Skills & Values',
                desc: 'Critical thinking, empathy, leadership, and digital literacy integrated through everyday classroom activities.',
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

      {/* Pedagogical Approach */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCUSQFr10SM1xinQQi--WjQx6rEDZFZb7mA&s"
            alt="Pedagogical Approach"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
          />
          <div>
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Pedagogical Approach
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              The curriculum is delivered using an inquiry-based and
              competency-driven methodology that emphasizes experiential learning.
              Each lesson encourages exploration, discussion, and reflection.
            </p>
            <ul className="space-y-2 text-gray-700 text-sm list-disc list-inside">
              <li>Inquiry and project-based learning.</li>
              <li>Integration of technology and digital tools.</li>
              <li>Collaborative and peer-led group activities.</li>
              <li>Continuous feedback for growth-oriented learning.</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Assessment & Evaluation */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-semibold text-blue-900 mb-6">
            Assessment & Evaluation
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed mb-10">
            Our assessment framework is designed to measure both academic achievement and skill development.
            It emphasizes formative feedback and personal growth rather than rote performance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Continuous assessments and performance tracking.',
              'Project work, portfolios, and practical evaluations.',
              'Periodic examinations to measure conceptual understanding.',
            ].map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition text-gray-700"
              >
                {point}
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
        <h2 className="text-3xl font-semibold mb-4">
          Empowering Minds, Enriching Futures
        </h2>
        <p className="max-w-3xl mx-auto text-white/90">
          Our curriculum inspires lifelong learning, curiosity, and character —
          preparing students to excel academically and contribute meaningfully to society.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}
