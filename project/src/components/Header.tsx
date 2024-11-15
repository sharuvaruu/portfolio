import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Sharvari<span className="text-purple-600">.</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/sharuvaruu" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/sharvari-salodkar-587b611a5" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#skills" 
                 className="text-gray-600 hover:text-gray-900 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Skills
              </a>
              <a href="#projects" 
                 className="text-gray-600 hover:text-gray-900 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
              <a href="#experience" 
                 className="text-gray-600 hover:text-gray-900 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
              <a href="#contact" 
                 className="text-gray-600 hover:text-gray-900 transition-colors"
                 onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/sharuvaruu" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/sharvari-salodkar-587b611a5" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}