import Link from 'next/link';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <div className="flex items-center space-x-2 md:space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-1.5 md:p-2 rounded-lg">
                <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <span className="text-lg md:text-xl font-bold">BrightFuture Academy</span>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              Empowering students to achieve excellence through quality education and holistic development.
            </p>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Campus', path: '/campus/facilities' },
                { name: 'Academics', path: '/academics/learning-program' },
                { name: 'Admission', path: '/admission/admission-form' },
                { name: 'News & Updates', path: '/news-updates/announcements' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors text-sm md:text-base"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start space-x-2 md:space-x-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm md:text-base">123 Education Street, Knowledge City, 45678</span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 md:space-x-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">info@brightfuture.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-gray-400">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} BrightFuture Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
