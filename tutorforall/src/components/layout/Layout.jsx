import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Experts', path: '/experts' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white shadow fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TutorForAll</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navigation.map((item) => (
                <Button 
                  key={item.name} 
                  variant="ghost" 
                  className="text-gray-600 hover:text-blue-600"
                >
                  {item.name}
                </Button>
              ))}
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="w-full text-left text-gray-600 hover:text-blue-600"
                >
                  {item.name}
                </Button>
              ))}
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                Dedicated to helping students achieve academic excellence through personalized support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                {navigation.map((item) => (
                  <li key={item.name} className="hover:text-white cursor-pointer">
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: help@tutorforall.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Education St, Learning City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-white hover:text-blue-400">
                  Twitter
                </Button>
                <Button variant="ghost" className="text-white hover:text-blue-600">
                  Facebook
                </Button>
                <Button variant="ghost" className="text-white hover:text-pink-400">
                  Instagram
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; 2024 TutorForAll. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
