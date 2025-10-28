'use client';

import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedCard from '../AnimatedCard';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Education Street, Knowledge City, 45678',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@brightfuture.edu',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Fri: 8:00 AM - 4:00 PM',
      color: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <SectionWrapper id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Get in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1} className="p-4 md:p-6 text-center">
                <div
                  className={`w-10 h-10 md:w-14 md:h-14 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900">{info.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{info.content}</p>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <AnimatedCard className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <Label htmlFor="name">Your Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us more about your inquiry..."
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-xl transition-shadow font-semibold text-base md:text-lg"
              >
                Send Message
              </button>
            </form>
          </AnimatedCard>

          <AnimatedCard delay={0.2} className="p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Visit Our Campus</h3>
            <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px] mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We welcome campus visits and tours. Please contact our admissions office to schedule a
              personalized tour of our facilities. Experience firsthand our modern classrooms,
              laboratories, sports facilities, and meet our dedicated faculty.
            </p>
          </AnimatedCard>
        </div>
      </div>
    </SectionWrapper>
  );
}
