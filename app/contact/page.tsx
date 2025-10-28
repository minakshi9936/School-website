'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError('Please fill out all fields.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setError('');
    setSubmitted(true);

    // Simulate form submission delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
      alert('✅ Message sent successfully!');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-50 to-white">
      <Navbar />

      <main className="flex-grow pt-24">
        <SectionWrapper id="contact" className="py-20">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Contact{' '}
                <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  Us
                </span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have any questions? Reach out to us — we’d love to hear from you!
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-full text-white">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">
                      BrightFuture Academy, Near City Park, New Delhi, India
                    </p>
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

                {/* Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.350049432838!2d77.2089859!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb6d2a3c2a5d%3A0xe81c1f44cbddc437!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1690800000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  loading="lazy"
                  className="rounded-xl border-none shadow-md"
                ></iframe>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-lg rounded-2xl p-8 border border-green-100"
              >
                <h2 className="text-2xl font-semibold mb-6 text-center text-green-700">
                  Send Us a Message
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter 10-digit Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                    maxLength={10}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitted}
                    className={`${
                      submitted ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
                    } text-white py-3 px-6 rounded-lg w-full transition`}
                  >
                    {submitted ? 'Sending...' : 'Send Message'}
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
