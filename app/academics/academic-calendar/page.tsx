'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CalendarDays, Search, Download } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function AcademicCalendar() {
  const [searchTerm, setSearchTerm] = useState('');

  const events = [
    { month: 'April', event: 'New Academic Session Begins', date: 'April 1', type: 'Session Start' },
    { month: 'May', event: 'Parent-Teacher Meeting', date: 'May 10', type: 'Meeting' },
    { month: 'May - June', event: 'Summer Vacation', date: 'May 25 - June 30', type: 'Holiday' },
    { month: 'July', event: 'School Reopens After Vacation', date: 'July 1', type: 'Reopening' },
    { month: 'August', event: 'Independence Day Celebration', date: 'August 15', type: 'Event' },
    { month: 'September', event: 'Mid-Term Examinations', date: 'September 10 - 20', type: 'Exam' },
    { month: 'October', event: 'Cultural Week', date: 'October 15 - 20', type: 'Event' },
    { month: 'December', event: 'Winter Break', date: 'December 25 - January 2', type: 'Holiday' },
    { month: 'February', event: 'Annual Examinations', date: 'February 10 - 25', type: 'Exam' },
    { month: 'March', event: 'Result Declaration & New Admissions', date: 'March 15', type: 'Result' },
  ];

  const filteredEvents = events.filter(
    (e) =>
      e.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Academic Calendar', 14, 20);
    doc.setFontSize(12);
    doc.text('School Academic Year Schedule', 14, 28);

    autoTable(doc, {
      startY: 35,
      head: [['Month', 'Event', 'Date', 'Type']],
      body: filteredEvents.map((item) => [item.month, item.event, item.date, item.type]),
      styles: { fontSize: 11, halign: 'left', cellPadding: 3 },
      headStyles: { fillColor: [25, 55, 109] },
    });

    doc.save('Academic_Calendar.pdf');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Header Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/calendar.jpg')" }}
      >
        <div className="absolute inset-0 text-white bg-gradient-to-r from-blue-200 via-indigo-400 to-purple-700 overflow-hidden flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-5xl text-white font-bold"
          >
            Academic Calendar
          </motion.h1>
        </div>
      </section>

      {/* Search + Download + Table */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 bg-white shadow-sm w-full md:w-2/3"
          >
            <Search className="text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Search by month, event, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full focus:outline-none text-gray-700"
            />
          </motion.div>

          {/* Download Button */}
          <motion.button
            onClick={handleDownloadPDF}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-full shadow-md transition-all duration-200"
          >
            <Download size={18} />
            Download PDF
          </motion.button>
        </div>

        {/* Table Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="overflow-x-auto shadow-lg rounded-xl bg-white"
        >
          <table className="min-w-full border-collapse text-left">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="py-3 px-4 text-sm md:text-base">Month</th>
                <th className="py-3 px-4 text-sm md:text-base">Event</th>
                <th className="py-3 px-4 text-sm md:text-base">Date</th>
                <th className="py-3 px-4 text-sm md:text-base">Type</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b hover:bg-blue-50 transition-colors"
                  >
                    <td className="py-3 px-4 font-medium text-gray-800">{item.month}</td>
                    <td className="py-3 px-4 text-gray-700 flex items-center gap-2">
                      <CalendarDays className="text-blue-600" size={18} />
                      {item.event}
                    </td>
                    <td className="py-3 px-4 text-gray-700">{item.date}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          item.type === 'Holiday'
                            ? 'bg-red-100 text-red-600'
                            : item.type === 'Exam'
                            ? 'bg-yellow-100 text-yellow-700'
                            : item.type === 'Event'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {item.type}
                      </span>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
