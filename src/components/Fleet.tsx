import { Sparkles } from 'lucide-react';

const cars = [
  {
    title: 'سيارات اقتصادية',
    description: 'مثالية للتنقل اليومي بأسعار مناسبة',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'سيارات عائلية',
    description: 'واسعة ومريحة للعائلات والرحلات',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'سيارات حديثة وفاخرة',
    description: 'للمناسبات الخاصة والتجربة الفاخرة',
    image: 'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Fleet() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="w-12 h-12 text-yellow-500 ml-4" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            أسطولنا
          </h2>
        </div>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 border border-gray-800 hover:border-blue-500/50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 relative z-10">
                  {car.title}
                </h3>

                <p className="text-gray-400 text-lg leading-relaxed relative z-10">
                  {car.description}
                </p>

                <div className="mt-6 flex items-center justify-between relative z-10">
                  <span className="text-blue-400 font-semibold text-lg">متوفر الآن</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
