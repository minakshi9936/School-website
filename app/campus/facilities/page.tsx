'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FacilitiesPage() {
  const facilitySections = [
    {
      title: 'Academic Excellence',
      subtitle: 'Smart classrooms and laboratories fostering innovation and curiosity.',
      items: [
        { title: 'Smart Classrooms', img: 'https://images.unsplash.com/photo-1719159381916-062fa9f435a6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwY2xhc3Nyb29tfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000' },
        { title: 'Science Labs', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPcOHKpi63axLNRtoJZCPE-zfYh7slX-Itw&s' },
        { title: 'Library & Reading Zone', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0tT7Zsj3EaLK1AsbDr7cEyE013jlJSK23Iw&s' },
      ],
    },
    {
      title: 'Sports & Recreation',
      subtitle: 'Holistic development through indoor and outdoor sports facilities.',
      items: [
        { title: 'Playground & Track Field', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGu6RHXV21yWqSIhfwdw4LRFDl9rqnzdBkQ&s' },
        { title: 'Indoor Sports Hall', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7INLPeRxQfW1_R5SgjBTEXEtgjOkBVcnQhg&s' },
        { title: 'Yoga & Fitness Zone', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPXQyOrQ2l10s_BAzUYLG_U1ZXKCVau4xgg&s' },
      ],
    },
    {
      title: 'Creativity & Arts',
      subtitle: 'Inspiring artistic expression through visual and performing arts.',
      items: [
        { title: 'Art & Craft Studio', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GwFa_PbK_ekvhoxd_mMwh9tPzEcIV9DgYg&s' },
        { title: 'Music Room', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWpm6xrK3ltkd3xoupeLpf97-At8mmIAtnxw&s' },
        { title: 'Dance Studio', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHph41tBZR7gGIGk6c5t4uNRtbTey0IJozg&s' },
      ],
    },
    {
      title: 'Technology & Innovation',
      subtitle: 'Empowering young minds with modern tools and digital skills.',
      items: [
        { title: 'Computer Lab', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8WFHZfP0K5uPBZJFqQjHvHr89qIC6yZU7w&s' },
        { title: 'Robotics Lab', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP9j8gQP6LBbMiIvETkjy6xXOLs0AKUrLhhg&s' },
        { title: 'Innovation Hub', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzTs7gvxM2vWTTz1j0p5eCm1WdnkpzWeAm7w&s' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <Navbar />
      <main className="flex-grow">

        {/* Hero Section */}
        <section className="relative w-full h-[60vh] overflow-hidden">
          <Image
            src="/images/campus-facilities.jpg"
            alt="School Facilities"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 text-white overflow-hidden">
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold"
            >
              World-Class <span className="text-amber-300">Facilities</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-3 text-lg max-w-2xl mx-auto text-gray-100"
            >
              Discover our modern infrastructure designed to inspire learning, creativity, and all-round development.
            </motion.p>
          </div>
        </section>

        {/* Facilities Sections */}
        <section className="py-20 container mx-auto px-6 space-y-24">
          {facilitySections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-3">
                  {section.title}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{section.subtitle}</p>
              </div>

              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 40 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                  >
                    <div className="relative h-56 w-full">
                      <Image
                        src={item.img}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our {item.title.toLowerCase()} offers students the opportunity to explore, learn, and create in a nurturing environment.
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
