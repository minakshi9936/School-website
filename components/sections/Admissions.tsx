'use client';

import { useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import AnimatedCard from '../AnimatedCard';
import AnimatedButton from '../AnimatedButton';
import { ClipboardList, FileText, UserCheck, CheckCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function Admissions() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    grade: '',
    message: '',
  });

  const steps = [
    {
      icon: ClipboardList,
      title: 'Submit Application',
      description: 'Fill out the online application form with student and parent details',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FileText,
      title: 'Document Verification',
      description: 'Submit required documents including previous academic records and ID proofs',
      color: 'from-yellow-500 to-yellow-600',
    },
    {
      icon: UserCheck,
      title: 'Interview & Assessment',
      description: 'Attend a brief interaction with our admissions team and take an assessment test',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: CheckCircle,
      title: 'Confirmation',
      description: 'Receive admission confirmation and complete the enrollment process',
      color: 'from-green-500 to-green-600',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our admissions team will contact you shortly.');
    setShowForm(false);
    setFormData({
      studentName: '',
      parentName: '',
      email: '',
      phone: '',
      grade: '',
      message: '',
    });
  };

  return (
    <SectionWrapper id="admissions" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Admissions{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our vibrant learning community in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimatedCard key={index} delay={index * 0.1} className="p-4 md:p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full flex items-center justify-center border-4 border-blue-600 text-blue-600 font-bold text-sm md:text-base hover:bg-orange-400">
                  {index + 1}
                </div>
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto mt-4`}
                >
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{step.description}</p>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Admissions Now Open for 2025-26</h3>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Limited seats available. Early applications are encouraged. Financial aid and scholarships
            available for deserving students.
          </p>
          <AnimatedButton
            variant="secondary"
            onClick={() => setShowForm(true)}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Register Now
          </AnimatedButton>
        </div>
      </div>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Admission Registration</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="studentName">Student Name *</Label>
                <Input
                  id="studentName"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  placeholder="Enter student's full name"
                />
              </div>
              <div>
                <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                <Input
                  id="parentName"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  placeholder="Enter parent's full name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="grade">Grade Applying For *</Label>
              <Input
                id="grade"
                required
                value={formData.grade}
                onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                placeholder="e.g., Grade 1, Grade 5, etc."
              />
            </div>

            <div>
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Any specific requirements or questions..."
                rows={4}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition-shadow"
              >
                Submit Application
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </SectionWrapper>
  );
}
