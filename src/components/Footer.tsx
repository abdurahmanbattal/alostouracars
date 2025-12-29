export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-red-500 to-blue-400 bg-clip-text text-transparent mb-2">
            الأسطورة
          </h2>
          <p className="text-gray-400 text-lg">مكتب الأسطورة لتأجير السيارات</p>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>

        <div className="space-y-3 text-gray-500">
          <p className="text-lg">حلب – بستان القصر</p>
          <p className="text-sm">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
          <p className="text-xs">فخامة واقعية • ثقة • احتراف • خدمة راقية</p>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </footer>
  );
}
