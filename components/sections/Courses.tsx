'use client';

import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedCard from '../AnimatedCard';
import { BookOpen, Microscope, Calculator, Globe, Palette, Music } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<null | {
    title: string;
    fullDescription: string;
    icon: any;
    color: string;
  }>(null);

  const courses = [
    {
      icon: BookOpen,
      title: 'Language Arts',
      shortDescription:
        'Comprehensive English language and literature program focusing on reading, writing, and communication skills. Develop critical thinking through...',
      fullDescription:
        'Comprehensive English language and literature program focusing on reading, writing, and communication skills. Develop critical thinking through literary analysis, creative writing workshops, public speaking, and debate competitions. Our curriculum includes classic and contemporary literature, grammar mastery, and effective communication strategies.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Microscope,
      title: 'Science & Technology',
      shortDescription:
        'Hands-on learning in Physics, Chemistry, Biology, and Computer Science with modern lab facilities. Students engage in experiments...',
      fullDescription:
        'Hands-on learning in Physics, Chemistry, Biology, and Computer Science with modern lab facilities. Students engage in experiments, coding projects, robotics, and scientific research. Our state-of-the-art laboratories provide opportunities for practical exploration, fostering curiosity and innovation in STEM fields.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      shortDescription:
        'Advanced mathematics curriculum from basic arithmetic to calculus, emphasizing problem-solving and logical reasoning. Interactive...',
      fullDescription:
        'Advanced mathematics curriculum from basic arithmetic to calculus, emphasizing problem-solving and logical reasoning. Interactive lessons include algebra, geometry, trigonometry, and statistics. We use real-world applications and competitions to make math engaging and relevant to everyday life.',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: Globe,
      title: 'Social Studies',
      shortDescription:
        'Explore history, geography, civics, and economics to understand our world and society. Field trips and cultural studies...',
      fullDescription:
        'Explore history, geography, civics, and economics to understand our world and society. Field trips and cultural studies bring learning to life. Students develop global awareness, historical perspective, and understanding of social structures through interactive projects and community engagement.',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      shortDescription:
        'Unleash creativity through visual arts, drama, and design thinking workshops. Students explore various mediums...',
      fullDescription:
        'Unleash creativity through visual arts, drama, and design thinking workshops. Students explore various mediums including painting, sculpture, digital art, and theater performance. Our arts program encourages self-expression, cultural appreciation, and innovative thinking through exhibitions and performances.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: Music,
      title: 'Music & Performing Arts',
      shortDescription:
        'Learn instruments, vocal training, and participate in concerts and cultural events. Music theory and practical performance...',
      fullDescription:
        'Learn instruments, vocal training, and participate in concerts and cultural events. Music theory and practical performance classes develop musical talent. Students can join choir, orchestra, or band, with opportunities to perform at school events and community venues.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <SectionWrapper id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Courses
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive curriculum designed to nurture every aspect of student development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1} className="p-6 md:p-8 cursor-pointer group">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">{course.shortDescription}</p>
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center text-sm md:text-base"
                >
                  Read More
                  <svg
                    className="w-3 h-3 md:w-4 md:h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </AnimatedCard>
            );
          })}
        </div>
      </div>

      <Dialog open={selectedCourse !== null} onOpenChange={() => setSelectedCourse(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold flex items-center">
              {selectedCourse && (
                <>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedCourse.color} flex items-center justify-center mr-4`}
                  >
                    <selectedCourse.icon className="w-6 h-6 text-white" />
                  </div>
                  {selectedCourse.title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-700 leading-relaxed text-lg">
              {selectedCourse?.fullDescription}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
