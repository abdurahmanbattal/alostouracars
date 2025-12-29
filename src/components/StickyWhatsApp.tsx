import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function StickyWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappNumber = '963993191708';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 left-6 z-50 group transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      aria-label="تواصل عبر واتساب"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 animate-pulse"></div>

        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:rotate-12 transition-transform" />
        </div>

        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black animate-ping"></div>
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-black"></div>
      </div>

      <div className="hidden sm:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-green-500/30">
        <span className="text-sm font-semibold">تواصل معنا الآن</span>
      </div>
    </a>
  );
}
