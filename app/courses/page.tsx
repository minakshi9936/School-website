'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';
import AnimatedCard from '@/components/AnimatedCard';
import { BookOpen, Microscope, Calculator, Globe, Palette, Music } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<null | {
    title: string;
    fullDescription: string;
    icon: any;
    color: string;
    features: string[];
    outcomes: string[];
  }>(null);

  const courses = [
    {
      icon: BookOpen,
      title: 'Language Arts',
      shortDescription:
        'Comprehensive English language and literature program focusing on reading, writing, and communication skills. Develop critical thinking through...',
      fullDescription:
        'Our Language Arts program focuses on developing strong communication skills through reading, writing, and analysis of literature. Students engage in writing essays, poetry, and short stories while exploring global literature. We emphasize creativity, comprehension, and public speaking.',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Creative writing workshops',
        'Literary appreciation sessions',
        'Grammar and vocabulary enhancement',
        'Public speaking and debate',
      ],
      outcomes: [
        'Improved communication and analytical skills',
        'Confidence in expressing ideas effectively',
        'Enhanced critical reading and comprehension',
      ],
    },
    {
      icon: Microscope,
      title: 'Science & Technology',
      shortDescription:
        'Hands-on learning in Physics, Chemistry, Biology, and Computer Science with modern lab facilities. Students engage in experiments...',
      fullDescription:
        'The Science & Technology program encourages exploration and innovation through practical experiments and project-based learning. Students gain exposure to robotics, programming, environmental studies, and scientific research.',
      color: 'from-green-500 to-green-600',
      features: [
        'Modern science and computer labs',
        'Robotics and AI basics',
        'STEM fairs and hackathons',
        'Environmental awareness projects',
      ],
      outcomes: [
        'Strong analytical and problem-solving skills',
        'Ability to apply theory to real-world scenarios',
        'Foundation for engineering and medical careers',
      ],
    },
    {
      icon: Calculator,
      title: 'Mathematics',
      shortDescription:
        'Advanced mathematics curriculum from basic arithmetic to calculus, emphasizing problem-solving and logical reasoning. Interactive...',
      fullDescription:
        'Mathematics at BrightFuture Academy focuses on analytical thinking, quantitative reasoning, and conceptual clarity. Through puzzles, logic games, and applied math projects, students enjoy learning numbers in fun, interactive ways.',
      color: 'from-yellow-500 to-yellow-600',
      features: [
        'Algebra, geometry, and calculus',
        'Interactive math labs',
        'Math Olympiad preparation',
        'Real-world problem solving',
      ],
      outcomes: [
        'Confidence in numerical reasoning',
        'Logical and structured thinking',
        'Preparedness for technical and analytical fields',
      ],
    },
    {
      icon: Globe,
      title: 'Social Studies',
      shortDescription:
        'Explore history, geography, civics, and economics to understand our world and society. Field trips and cultural studies...',
      fullDescription:
        'Our Social Studies curriculum helps students understand the past, analyze the present, and prepare for the future. Interactive maps, debates, and model UN programs enrich global understanding.',
      color: 'from-blue-600 to-blue-700',
      features: [
        'Field trips and heritage tours',
        'Model United Nations activities',
        'Civic responsibility projects',
        'Cultural and historical workshops',
      ],
      outcomes: [
        'Enhanced global awareness',
        'Understanding of civic duties and governance',
        'Empathy towards cultural diversity',
      ],
    },
    {
      icon: Palette,
      title: 'Creative Arts',
      shortDescription:
        'Unleash creativity through visual arts, drama, and design thinking workshops. Students explore various mediums...',
      fullDescription:
        'The Creative Arts program inspires students to express themselves through visual and performing arts. We nurture artistic thinking, imagination, and design sense through studio practice and art showcases.',
      color: 'from-pink-500 to-pink-600',
      features: [
        'Painting, sculpture, and digital art',
        'Annual art exhibitions',
        'Drama and storytelling workshops',
        'Design and innovation projects',
      ],
      outcomes: [
        'Improved aesthetic and creative abilities',
        'Confidence in public performance',
        'Ability to translate ideas into visual or stage art',
      ],
    },
    {
      icon: Music,
      title: 'Music & Performing Arts',
      shortDescription:
        'Learn instruments, vocal training, and participate in concerts and cultural events. Music theory and practical performance...',
      fullDescription:
        'Our Music & Performing Arts program cultivates musical talent through instrumental learning, vocal training, and rhythm development. Students participate in choir, orchestra, and inter-school cultural fests.',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Instrumental and vocal training',
        'Annual concerts and recitals',
        'Cultural performance participation',
        'Music theory and appreciation classes',
      ],
      outcomes: [
        'Enhanced rhythmic and coordination skills',
        'Confidence through stage exposure',
        'Deeper understanding of music as an art form',
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <SectionWrapper id="courses" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                Explore Our{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Courses
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At BrightFuture Academy, we provide a well-rounded curriculum that empowers students with knowledge,
                creativity, and life skills for a brighter tomorrow.
              </p>
            </div>

            {/* Course Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => {
                const Icon = course.icon;
                return (
                  <AnimatedCard key={index} delay={index * 0.1} className="p-8 cursor-pointer group">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{course.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{course.shortDescription}</p>
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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

          {/* Dialog Modal for Details */}
          <Dialog open={selectedCourse !== null} onOpenChange={() => setSelectedCourse(null)}>
            <DialogContent className="max-w-3xl">
              {selectedCourse && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold flex items-center">
                      <div
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedCourse.color} flex items-center justify-center mr-4`}
                      >
                        <selectedCourse.icon className="w-6 h-6 text-white" />
                      </div>
                      {selectedCourse.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="mt-6 space-y-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {selectedCourse.fullDescription}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">Key Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selectedCourse.features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-800">Learning Outcomes:</h4>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {selectedCourse.outcomes.map((o, i) => (
                          <li key={i}>{o}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </SectionWrapper>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
