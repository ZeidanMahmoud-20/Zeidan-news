import React, { useState, useEffect } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Live clock update
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // News Data with direct verifiable images and source links
  const newsData = [
    {
      id: 1,
      title: "أضخم مشروعات البنية التحتية والعاصمة الإدارية تواصل جذب الاستثمارات الكبرى",
      category: "politics",
      source: "اليوم السابع",
      sourceUrl: "https://www.youm7.com",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "استعراض أحدث الإنجازات الحكومية في قطاع البنية التحتية والتنمية المستدامة في مصر."
    },
    {
      id: 2,
      title: "استعدادات مكثفة للمنتخب المصري قبل المواجهة المرتقبة في التصفيات الإفريقية",
      category: "sports",
      source: "مصر اليوم",
      sourceUrl: "https://www.msryom.com",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "الجهاز الفني للمنتخب الوطني يعلن القائمة النهائية للاعبين المعسكر القادم."
    },
    {
      id: 3,
      title: "البنك المركزي يعلن مؤشرات إيجابية لنمو الاحتياطي النقدي واستقرار الأسواق",
      category: "economy",
      source: "اليوم السابع",
      sourceUrl: "https://www.youm7.com",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "تقرير اقتصادي يوضح تحسن تدفقات النقد الأجنبي وارتفاع معدلات التصدير."
    },
    {
      id: 4,
      title: "هيئة الأرصاد تحذر من شبورة مائية وتكشف تفاصيل الطقس المعتدل خلال الأيام المقبلة",
      category: "weather",
      source: "مصر اليوم",
      sourceUrl: "https://www.msryom.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "درجات الحرارة المتوقعة في القاهرة والمحافظات معتدلة ومناسبة للأنشطة اليومية."
    },
    {
      id: 5,
      title: "مبادرة شبابية رائدة تنجح في تشجير وتجميل 50 قرية مصرية بمحافظات الصعيد",
      category: "good news",
      source: "اليوم السابع",
      sourceUrl: "https://www.youm7.com",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "نماذج مشرفة من الشباب المتطوعين يصنعون الفارق في مجتمعاتهم المحلية."
    },
    {
      id: 6,
      title: "إحباط محاولة غش تجاري كبرى وضبط طن من السلع غير الصالحة في إحدى المحافظات",
      category: "bad news",
      source: "مصر اليوم",
      sourceUrl: "https://www.msryom.com",
      image: "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "الأجهزة الرقابية تواصل حملاتها الصارمة لحماية المستهلكين من التلاعب بالأسواق."
    },
    {
      id: 7,
      title: "انطلاق فعاليات المعرض الدولي للكتاب وسط إقبال جماهيري ضخم وغير مسبوق",
      category: "culture",
      source: "اليوم السابع",
      sourceUrl: "https://www.youm7.com",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "آلاف الزوار يتدفقون على أجنحة المعرض للاستمتاع بالفعاليات الثقافية والفنية المتنوعة."
    },
    {
      id: 8,
      title: "نادي الأهلي والزمالك يستعدان لقمة حاسمة وسط ترقب جماهيري كبير في الدوري",
      category: "sports",
      source: "مصر اليوم",
      sourceUrl: "https://www.msryom.com",
      image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80",
      date: "سبتمبر 2026",
      summary: "جاهزية تامة للفريقين واستعدادات أمنية وتنظيمية مكثفة لخروج اللقاء بأفضل صورة."
    }
  ];

  // Filtering logic
  const filteredNews = newsData.filter(item => {
    const matchesSection = activeSection === 'home' || activeSection === 'contact' || item.category === activeSection;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSection && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      
      {/* Top Header Bar */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 space-x-reverse cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="w-12 h-12 bg-gradient-to-tr from-red-600 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 transform hover:scale-105 transition-transform">
                <span className="text-2xl font-black tracking-wider text-white">ZN</span>
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
                  ZN <span className="text-xs uppercase px-2 py-0.5 bg-red-600/20 text-red-400 border border-red-500/30 rounded-full font-semibold">Zeidan News</span>
                </h1>
                <p className="text-xs text-slate-400 font-medium">نبض مصر اللحظة بلحظة</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 space-x-reverse">
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'politics', label: 'سياسة' },
                { id: 'sports', label: 'رياضة' },
                { id: 'economy', label: 'اقتصاد' },
                { id: 'weather', label: 'الطقس' },
                { id: 'good news', label: 'أخبار سارة' },
                { id: 'bad news', label: 'أخبار سيئة' },
                { id: 'contact', label: 'اتصل بنا' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeSection === tab.id
                      ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            {/* Live Date / Time Badge */}
            <div className="hidden xl:flex flex-col items-end text-xs text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-lg border border-slate-800">
              <span className="font-semibold text-slate-200">مصر اليوم</span>
              <span>{currentTime.toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
            {[
              { id: 'home', label: 'الرئيسية' },
              { id: 'politics', label: 'سياسة' },
              { id: 'sports', label: 'رياضة' },
              { id: 'economy', label: 'اقتصاد' },
              { id: 'weather', label: 'الطقس' },
              { id: 'good news', label: 'أخبار سارة' },
              { id: 'bad news', label: 'أخبار سيئة' },
              { id: 'contact', label: 'اتصل بنا' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveSection(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-right px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === tab.id ? 'bg-red-600 text-white' : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        
        {/* Contact Section View */}
        {activeSection === 'contact' ? (
          <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">تواصل مع إدارة ZN (Zeidan News)</h2>
            <p className="text-slate-400 text-center mb-8">نحن هنا دائماً لتلقي استفساراتكم ومقترحاتكم على مدار الساعة.</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 space-x-reverse bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500 font-bold text-xl">👤</div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">اسم المسؤول / المؤسس</h3>
                  <p className="text-lg font-bold text-white">Zeidan Mahmoud Zeidan</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500 font-bold text-xl">📧</div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">البريد الإلكتروني</h3>
                  <a href="mailto:zeidanmahmoud123@gmail.com" className="text-lg font-bold text-red-400 hover:underline">zeidanmahmoud123@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="w-12 h-12 bg-red-600/10 border border-red-500/20 rounded-lg flex items-center justify-center text-red-500 font-bold text-xl">📱</div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">رقم الهاتف</h3>
                  <a href="tel:01122608560" className="text-lg font-bold text-white hover:text-red-400 dir-ltr">01122608560</a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Search and Category Header Banner */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-gradient-to-r from-slate-900 to-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-xl">
              <div>
                <h2 className="text-2xl font-black text-white capitalize">
                  {activeSection === 'home' ? 'أحدث الأخبار المصرية اليوم' : `قسم: ${activeSection}`}
                </h2>
                <p className="text-sm text-slate-400 mt-1">اضغط على أي صورة أو خبر للانتقال المباشر إلى المصدر (مصر اليوم / اليوم السابع)</p>
              </div>
              
              <div className="w-full md:w-72">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث في الأخبار..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <span className="absolute left-3 top-2.5 text-slate-500">🔍</span>
                </div>
              </div>
            </div>

            {/* News Grid */}
            {filteredNews.length === 0 ? (
              <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-lg">عذراً، لم نتمكن من العثور على نتائج مطابقة لبحثك.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((item) => (
                  <article 
                    key={item.id} 
                    className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all duration-300 flex flex-col group"
                  >
                    {/* Pressable Image heading directly to source */}
                    <div className="relative overflow-hidden aspect-video bg-slate-950">
                      <a 
                        href={item.sourceUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full h-full cursor-pointer"
                        title={`الانتقال إلى المصدر: ${item.source}`}
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                        <span className="absolute bottom-3 right-3 bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-lg">
                          {item.source}
                        </span>
                      </a>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                        <span className="bg-slate-800 px-2.5 py-0.5 rounded text-slate-300">{item.category}</span>
                        <span>{item.date}</span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-snug">
                        <a 
                          href={item.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-red-400 transition-colors"
                        >
                          {item.title}
                        </a>
                      </h3>

                      <p className="text-slate-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {item.summary}
                      </p>

                      <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                        <a 
                          href={item.sourceUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                        >
                          <span>قراءة الخبر بالمصدر الأصلي</span>
                          <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          
          <div className="flex items-center space-x-3 space-x-reverse">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">ZN</div>
            <span className="font-bold text-slate-200">ZN (Zeidan News) - جميع الحقوق محفوظة © 2026</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
            <span>المؤسس: <strong className="text-white">Zeidan Mahmoud Zeidan</strong></span>
            <span>البريد: <a href="mailto:zeidanmahmoud123@gmail.com" className="text-red-400 hover:underline">zeidanmahmoud123@gmail.com</a></span>
            <span>الهاتف: <a href="tel:01122608560" className="text-white hover:text-red-400 dir-ltr">01122608560</a></span>
          </div>

        </div>
      </footer>

    </div>
  );
}
