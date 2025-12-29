import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <MapPin className="w-12 h-12 text-red-500 ml-4" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            موقعنا
          </h2>
        </div>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-12"></div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-12 rounded-3xl border border-gray-700 shadow-2xl">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-blue-500 rounded-full flex items-center justify-center">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              حلب – بستان القصر
            </h3>
          </div>

          <p className="text-xl text-gray-400 mt-6">
            نحن في خدمتك في قلب حلب، موقع مركزي يسهل الوصول إليه
          </p>

          <div className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-full border border-blue-500/30">
            <span className="text-lg text-gray-300">زيارتك تسعدنا</span>
          </div>
        </div>
      </div>
    </section>
  );
}
