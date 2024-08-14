import React, { useState, useEffect } from 'react';

const sections = [
  "Cv Headline",
  "Resume",
  "Work Experience",
  "Education Details",
  "Online Presence",
  "Skills",
  "Courses & Certifications",
  "Projects",
  "Awards & Achievements",
  "Personal Details",
  "Languages"
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.toLowerCase().replace(/\s+/g, '-'));
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveSection(section.toLowerCase().replace(/\s+/g, '-'));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(section);
    }
  };

  return (
    <nav className="sticky top-0 flex overflow-x-auto whitespace-nowrap bg-white p-2 space-x-4 border-b border-white-700 custom-scrollbar z-10">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase().replace(/\s+/g, '-')}`}
          className={`text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-blue-600 ${activeSection === section.toLowerCase().replace(/\s+/g, '-') ? 'bg-blue-700' : ''}`}
          onClick={() => handleClick(section.toLowerCase().replace(/\s+/g, '-'))}
        >
          {section}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
