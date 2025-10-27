'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
      <Navbar />

      <main className="flex-grow">
        <SectionWrapper id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Contact <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Us</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have any questions? Reach out to us and we’ll be happy to help.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">BrightFuture Academy, Near City Park, New Delhi, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full text-white">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full text-white">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">info@brightfuture.edu.in</p>
                  </div>
                </div>

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!..."
                  width="100%"
                  height="250"
                  loading="lazy"
                  className="rounded-xl border-none"
                ></iframe>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-2xl p-8"
              >
                <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="border p-3 rounded-lg w-full" />
                  <input type="email" placeholder="Email Address" className="border p-3 rounded-lg w-full" />
                  <textarea placeholder="Your Message" rows={4} className="border p-3 rounded-lg w-full" />
                  <button className="bg-green-600 text-white py-3 px-6 rounded-lg w-full hover:bg-green-700 transition">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}
