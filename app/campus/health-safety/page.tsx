'use client';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { Shield, HeartPulse, Users, FireExtinguisher, Stethoscope } from 'lucide-react';

export default function HealthSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/health-safety.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl text-white font-bold"
          >
            Health & Safety
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 mt-3 max-w-2xl"
          >
            We ensure a safe, hygienic, and nurturing environment where students can learn, grow, and thrive.
          </motion.p>
        </div>
      </section>

      {/* Overview Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto px-6 py-16 text-gray-700"
      >
        <h2 className="text-3xl font-semibold text-blue-900 mb-6 text-center">
          Our Commitment to Student Well-Being
        </h2>
        <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Health and safety form the foundation of our school’s operational philosophy. 
          From first aid facilities to fire safety systems and counseling services, 
          every measure is taken to ensure that our students feel safe and supported every day.
        </p>
      </motion.section>

      {/* Safety Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-800 mb-10">
            Safety & Health Facilities
          </h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Shield className="w-10 h-10 text-blue-700" />,
                title: '24/7 Campus Security',
                desc: 'Our school is equipped with CCTV surveillance, secure entry points, and trained guards to ensure student safety around the clock.',
              },
              {
                icon: <Stethoscope className="w-10 h-10 text-blue-700" />,
                title: 'On-Campus Medical Room',
                desc: 'A fully equipped infirmary with a certified nurse provides immediate medical care and first aid when required.',
              },
              {
                icon: <HeartPulse className="w-10 h-10 text-blue-700" />,
                title: 'Health Check-Ups',
                desc: 'We conduct regular health screenings and vaccination drives in collaboration with reputed hospitals and healthcare partners.',
              },
              {
                icon: <FireExtinguisher className="w-10 h-10 text-blue-700" />,
                title: 'Fire & Emergency Safety',
                desc: 'Fire alarms, extinguishers, and evacuation drills are part of our regular safety protocols to prepare for any emergency.',
              },
              {
                icon: <Users className="w-10 h-10 text-blue-700" />,
                title: 'Counseling & Wellness',
                desc: 'Qualified counselors support the mental and emotional well-being of students, helping them handle stress and build resilience.',
              },
              {
                icon: <Shield className="w-10 h-10 text-blue-700" />,
                title: 'Hygiene & Cleanliness',
                desc: 'We maintain high standards of cleanliness, with regular sanitization of classrooms, restrooms, and dining areas.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <div className="flex items-center justify-center mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-blue-900 mb-2 text-center">{item.title}</h4>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-semibold text-center text-blue-900 mb-10">
            Health & Safety in Action
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              '/images/medical-room.jpg',
              '/images/fire-drill.jpg',
              '/images/security-guards.jpg',
              '/images/counseling-session.jpg',
              '/images/clean-campus.jpg',
              '/images/sanitization.jpg',
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
                  alt={`Health & Safety ${i + 1}`}
                  width={400}
                  height={250}
                  className="w-full h-56 object-cover hover:brightness-110 transition"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 text-center bg-blue-900 text-white"
      >
        <h2 className="text-3xl font-semibold mb-4">Creating a Safe Future Together</h2>
        <p className="max-w-3xl mx-auto text-white/90">
          Our commitment to health and safety goes beyond compliance—it’s about creating a culture of care, awareness, and preparedness for every student and staff member on campus.
        </p>
      </motion.section>

      <Footer />
    </div>
  );
}
