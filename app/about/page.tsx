'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWrapper from '../../components/SectionWrapper';
import AnimatedCard from '../../components/AnimatedCard';
import {
  Target,
  Eye,
  Heart,
  Award,
  BookOpen,
  Users,
  GraduationCap,
  Star,
  Camera,
  Trophy,
  Music,
  FlaskConical,
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To ignite a lifelong passion for learning through curiosity, creativity, and compassion — empowering students to lead with knowledge and kindness.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be a globally recognized institution shaping leaders of tomorrow through innovation, inclusion, and integrity in education.',
      color: 'from-purple-500 to-indigo-600',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'We believe in respect, resilience, and responsibility. Our campus fosters empathy, integrity, and growth through collaboration and community spirit.',
      color: 'from-pink-500 to-rose-600',
    },
    {
      icon: Award,
      title: "Principal's Message",
      description:
        'At BrightFuture Academy, we believe every child has the potential to shine. Our mission is to guide, nurture, and inspire each student to explore, achieve, and lead with confidence.',
      color: 'from-amber-400 to-yellow-500',
    },
  ];

  const highlights = [
    { label: 'Years of Excellence', value: '15+' },
    { label: 'Dedicated Educators', value: '50+' },
    { label: 'Bright Learners', value: '1200+' },
    { label: 'National Awards', value: '25+' },
  ];

  const features = [
    { icon: BookOpen, title: 'Modern Curriculum' },
    { icon: Users, title: 'Expert Mentorship' },
    { icon: Star, title: 'Top Achievements' },
    { icon: GraduationCap, title: 'Global Exposure' },
  ];

  const campusLife = [
    {
      icon: Trophy,
      title: 'Sports & Athletics',
      desc: 'Encouraging teamwork, discipline, and physical excellence through various sports events and tournaments.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGu6RHXV21yWqSIhfwdw4LRFDl9rqnzdBkQ&s',
    },
    {
      icon: Music,
      title: 'Cultural Events',
      desc: 'A vibrant platform for music, dance, and drama — celebrating diversity and creativity every semester.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpm6xrK3ltkd3xoupeLpf97-At8mmIAtnxw&s',
    },
    {
      icon: FlaskConical,
      title: 'Science & Innovation Labs',
      desc: 'State-of-the-art labs inspiring innovation, experiments, and discovery-based learning among students.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPcOHKpi63axLNRtoJZCPE-zfYh7slX-Itw&s',
    },
    {
      icon: Camera,
      title: 'Library & Research Center',
      desc: 'A peaceful space with thousands of resources to explore, read, and research across subjects.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tT7Zsj3EaLK1AsbDr7cEyE013jlJSK23Iw&s',
    },
  ];

  const faculty = [
    {
      name: 'Dr. Rakesh Mehra',
      role: 'Principal',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mIaDnaxu6GBxYnGE1FtuGkfpVYBAxh1Bwg&s',
      desc: 'With 20+ years of leadership in education, Dr. Mehra champions innovation-driven teaching that nurtures excellence and character.',
    },
    {
      name: 'Ms. Nisha Patel',
      role: 'Vice Principal',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsyjGOwzFYlw5Wv3wBcNUbD5gfHRqkhbYMSA&s',
      desc: 'An inspiring mentor, Ms. Patel cultivates creativity, confidence, and communication skills through literature and leadership programs.',
    },
    {
      name: 'Mr. Ankit Sharma',
      role: 'Head of Science Department',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsANjHOWttrf6wtL2OcU5lHQaImKUbN0buYg&s',
      desc: 'A passionate science educator dedicated to experiential learning, research projects, and curiosity-driven discovery.',
    },
    {
      name: 'Mrs. Sneha Rao',
      role: 'Mathematics Faculty',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz2KFIDy1aRwV2HFnCcVvNHPDb82VujJsXzQ&s',
      desc: 'Simplifying complex concepts with real-world applications, Mrs. Rao empowers analytical thinking and problem-solving.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 via-white to-blue-50 overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative py-28 text-center bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
          <div className="relative z-10 container mx-auto px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl font-bold mb-6"
            >
              About <span className="text-amber-300">BrightFuture Academy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-lg sm:text-xl max-w-3xl mx-auto text-blue-100"
            >
              Where education meets innovation. Building leaders, thinkers, and dreamers since 2009 — shaping futures one learner at a time.
            </motion.p>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <SectionWrapper id="mission" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <AnimatedCard key={index} delay={index * 0.1} className="p-8">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Journey Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10">Our Journey of Excellence</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {highlights.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.2 }}
                  className="bg-white/10 rounded-xl p-6 shadow-lg hover:bg-white/20 transition"
                >
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <SectionWrapper id="why-us" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose <span className="text-blue-700">BrightFuture Academy?</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              We combine the strength of tradition with the power of innovation — offering a learning
              experience that’s interactive, inclusive, and inspiring. Our students don’t just study;
              they discover, create, and lead.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <AnimatedCard key={i} delay={i * 0.1} className="p-6 text-center hover:shadow-2xl">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <p className="font-semibold text-gray-800">{f.title}</p>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Campus Life Section */}
        <SectionWrapper id="campus-life" className="py-20 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-10 text-gray-900">
              Explore Our <span className="text-blue-700">Campus Life</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {campusLife.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition transform hover:-translate-y-1"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-52 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <Icon className="w-7 h-7 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </SectionWrapper>

        {/* Faculty Section */}
        <SectionWrapper id="faculty" className="py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-14">
              Meet Our <span className="text-blue-700">Faculty</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
              {faculty.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                >
                  <img
                    src={f.img}
                    alt={f.name}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-900">{f.name}</h4>
                    <p className="text-blue-600 font-medium">{f.role}</p>
                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionWrapper>

        {/* Admission Button */}
        <div className="text-center py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Join Our BrightFuture Family?</h2>
          <Link
            href="/admissions"
            className="inline-block bg-amber-400 text-blue-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-amber-300 hover:scale-105 transition-transform duration-300"
          >
            Apply for Admission
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
