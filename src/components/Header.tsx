import { Phone } from 'lucide-react';

export default function Header() {
  const phoneNumber = '0993191708';

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Phone */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline text-lg" dir="ltr">
              {phoneNumber}
            </span>
          </a>

          {/* Logo & Title */}
          <div className="text-center flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 bg-clip-text text-transparent">
              الأسطورة
            </h1>

            {/* Wing Logo */}
            <img
              src="/logo.png"
              alt="Al Ostoura Logo"
              className="mt-1 h-6 sm:h-7 object-contain opacity-90"
            />
          </div>

          {/* Spacer */}
          <div className="w-20"></div>

        </div>
      </div>
    </header>
  );
}
