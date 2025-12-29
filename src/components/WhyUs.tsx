import { Car, Shield, DollarSign, Clock, Handshake } from 'lucide-react';

const features = [
  {
    icon: Car,
    title: 'أسطول سيارات حديثة ومتنوعة',
    description: 'سيارات عصرية تلبي جميع احتياجاتك',
  },
  {
    icon: Shield,
    title: 'أعلى معايير الأمان والموثوقية',
    description: 'سيارات مفحوصة وآمنة بالكامل',
  },
  {
    icon: DollarSign,
    title: 'أسعار واضحة بدون مفاجآت',
    description: 'شفافية كاملة في التسعير',
  },
  {
    icon: Clock,
    title: 'خدمة متوفرة 24/7',
    description: 'نحن معك في أي وقت',
  },
  {
    icon: Handshake,
    title: 'تعامل راقٍ وسريع',
    description: 'خدمة عملاء احترافية ومحترمة',
  },
];

export default function WhyUs() {
  return (
    <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          لماذا الأسطورة؟
        </h2>
        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105 border border-gray-800 hover:border-blue-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
