import { Award } from 'lucide-react';

export default function About() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Award className="w-16 h-16 text-yellow-500 ml-4" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            من نحن
          </h2>
        </div>

        <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-12"></div>

        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 sm:p-12 rounded-3xl border border-gray-700 shadow-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed text-center mb-8">
            مكتب <span className="text-blue-400 font-bold">الأسطورة</span> لتأجير السيارات في <span className="text-red-400 font-bold">حلب</span> يقدم تجربة تأجير راقية تعتمد على الجودة، الثقة، والالتزام.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed text-center">
            نضع راحة العميل في المقام الأول، ونوفر سيارات حديثة مع خدمة احترافية تناسب الأفراد والعائلات وتلبي مختلف الاحتياجات.
          </p>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-lg">خدمة متواصلة</div>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400 text-lg">موثوقية</div>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent mb-2">
                VIP
              </div>
              <div className="text-gray-400 text-lg">خدمة راقية</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
