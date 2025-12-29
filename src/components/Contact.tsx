import { MessageCircle, Phone, Globe, Facebook, User } from 'lucide-react';

export default function Contact() {
  const whatsappNumber = '963993191708';
  const phoneNumbers = ['0993191708', '0940766263'];
  const website = 'https://maps.app.goo.gl/7Ebi5mto6aiPKkTB7';
  const facebook = 'https://www.facebook.com/share/1AN9yZgFi7/';

  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          تواصل معنا
        </h2>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-8"></div>

        <p className="text-center text-2xl text-gray-300 mb-4">
          نرد بسرعة – حجز سهل – خدمة فورية
        </p>

        <div className="flex items-center justify-center gap-3 mb-16">
          <User className="w-8 h-8 text-yellow-500" />
          <p className="text-xl text-gray-400">
            تواصل مع <span className="text-white font-bold">أبو زيدو</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-3xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex items-center justify-center gap-4">
              <MessageCircle className="w-12 h-12 text-white group-hover:rotate-12 transition-transform" />
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  تواصل عبر واتساب
                </div>
                <div className="text-green-100">الطريقة الأسرع للحجز</div>
              </div>
            </div>
          </a>

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex items-center justify-center gap-4">
              <Globe className="w-12 h-12 text-white group-hover:rotate-12 transition-transform" />
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  نتشرف بزيارتكم
                </div>
                <div className="text-blue-100">تعرف على خدماتنا</div>
              </div>
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {phoneNumbers.map((phone, index) => (
            <a
              key={index}
              href={`tel:${phone}`}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-red-500/50 shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">اتصال مباشر</div>
                  <div className="text-2xl font-bold text-white" dir="ltr">
                    {phone}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-blue-600 to-blue-700 px-8 py-5 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-4"
          >
            <Facebook className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold text-white">تابعنا على فيسبوك</span>
          </a>
        </div>
      </div>
    </section>
  );
}
