'use client';

import SectionWrapper from '../SectionWrapper';
import AnimatedCard from '../AnimatedCard';
import { Target, Eye, Heart, Award } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      description:
        'To provide world-class education that nurtures critical thinking, creativity, and character, preparing students to become responsible global citizens and lifelong learners.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description:
        'To be a leading educational institution recognized for academic excellence, innovative teaching methodologies, and holistic student development that shapes future leaders.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Heart,
      title: 'Our Values',
      description:
        'We believe in integrity, respect, compassion, and excellence. Our community fosters inclusivity, encourages curiosity, and celebrates diversity in all its forms.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Award,
      title: 'Principal\'s Message',
      description:
        'Welcome to BrightFuture Academy! We are committed to unlocking each student\'s potential through personalized attention, modern facilities, and a supportive learning environment.',
      color: 'from-yellow-400 to-yellow-500',
    },
  ];

  return (
    <SectionWrapper id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Our School
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a foundation for excellence since 2009, we are dedicated to nurturing young minds
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1} className="p-8">
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${card.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Why Choose BrightFuture Academy?</h3>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              We combine traditional values with modern teaching methods, state-of-the-art facilities,
              experienced faculty, and a vibrant campus life to create an enriching educational experience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Smart Classrooms', 'Sports Facilities', 'Science Labs', 'Arts & Culture'].map(
                (facility, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <p className="font-semibold">{facility}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
