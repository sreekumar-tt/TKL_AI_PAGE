import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/Techno key logo-only key.png"
            alt="Technokey Learning Logo"
            className="h-12 w-auto"
          />
        </div>
        <a
          href="mailto:connect@technokeylearning.com"
          className="text-sm font-medium text-gray-700 border border-gray-300 px-4 py-2 rounded-full hover:bg-[#2563EB] hover:text-white hover:border-[#2563EB] transition-colors duration-200"
        >
          Email Us
        </a>
      </div>
    </header>
  );
}
