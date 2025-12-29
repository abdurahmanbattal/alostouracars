import { MessageCircle, Phone } from 'lucide-react';

export default function Hero() {
  const whatsappNumber = '963993191708';
  const phoneNumber = '0993191708';

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            الأسطورة
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-8"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          تجربة تأجير سيارات بمستوى الأسطورة
        </h2>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 leading-relaxed">
          راحة، أمان، وسيارات حديثة تناسب جميع الاحتياجات
        </p>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          أسطول سيارات حديث وجاهز لخدمتك على مدار الساعة
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group relative px-8 py-5 bg-gradient-to-r from-green-500 to-green-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-7 h-7 group-hover:rotate-12 transition-transform" />
            <span>احجز الآن عبر واتساب</span>
          </a>

          <a
            href={`tel:${phoneNumber}`}
            className="w-full sm:w-auto group relative px-8 py-5 bg-gradient-to-r from-blue-600 to-red-600 text-white text-xl font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          >
            <Phone className="w-7 h-7 group-hover:rotate-12 transition-transform" />
            <span>اتصل بنا مباشرة</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
