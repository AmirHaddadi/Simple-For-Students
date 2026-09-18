import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductCard, { Product } from "@/components/ProductCard";
import Link from "next/link";

const sampleProducts: Product[] = [
  {
    id: 1,
    title: "هدفون بی‌سیم نویز کنسلینگ Pro",
    category: "صوتی و تصویری",
    price: "۳,۸۵۰,۰۰۰",
    rating: 4.8,
    icon: "fa-solid fa-headphones",
    image: "/images/product-1.webp",
    tag: "پرفروش",
    description: "تفکیک صدای بی‌نظیر، باتری با دوام ۳۰ ساعت و سیستم حذف نویز فعال پیشرفته.",
  },
  {
    id: 2,
    title: "ساعت هوشمند اولترا بند اسپرت",
    category: "گجت هوشمند",
    price: "۲,۲۹۰,۰۰۰",
    rating: 4.6,
    icon: "fa-solid fa-clock",
    image: "/images/product-2.webp",
    tag: "ویژه",
    description: "نمایشگر همیشه روشن AMOLED، سنجش ضربان قلب و اکسیژن خون و مقاومت در برابر آب.",
  },
  {
    id: 3,
    title: "کیبورد مکانیکال RGB سایلنت",
    category: "لوازم جانبی کامپیوتر",
    price: "۱,۹۵۰,۰۰۰",
    rating: 4.9,
    icon: "fa-solid fa-keyboard",
    image: "/images/product-3.webp",
    tag: "پیشنهاد ما",
    description: "سوییچ‌های قرمز نرم، نورپردازی قابل تنظیم و کابل جداشونده تایپ‌سی.",
  },
  {
    id: 4,
    title: "ماوس ارگونومیک بی‌سیم Master",
    category: "لوازم جانبی کامپیوتر",
    price: "۱,۱۵۰,۰۰۰",
    rating: 4.7,
    icon: "fa-solid fa-computer-mouse",
    image: "/images/product-4.webp",
    description: "طراحی کاملاً هماهنگ با ساختار دست جهت جلوگیری از خستگی مچ در ساعات کاری طولانی.",
  },
  {
    id: 5,
    title: "پاوربانک ۲۰۰۰۰ میلی‌آمپر فست شارژ",
    category: "شارژر و تغذیه",
    price: "۱,۶۰۰,۰۰۰",
    rating: 4.5,
    icon: "fa-solid fa-battery-three-quarters",
    image: "/images/product-5.webp",
    tag: "تخفیف",
    description: "پشتیبانی از فناوری شارژ سریع PD با توان خروجی ۳۰ وات و بدنه آلومینیومی مقاوم.",
  },
  {
    id: 6,
    title: "اسپیکر قابل حمل ضدآب BassBoost",
    category: "صوتی و تصویری",
    price: "۲,۴۰۰,۰۰۰",
    rating: 4.7,
    icon: "fa-solid fa-volume-high",
    image: "/images/product-6.webp",
    description: "صدای ۳۶۰ درجه شفاف، استاندارد ضد آب IPX7 و قابلیت اتصال دو اسپیکر همزمان.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Short Introduction Section */}
        <section className="py-12 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <i className="fa-solid fa-circle-check"></i>
                <span>چرا ساده‌مارکت؟</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                خرید مطمئن، شفاف و بدون پیچیدگی
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                ما در ساده‌مارکت تلاش کرده‌ایم بدون المان‌های مزاحم و تبلیغات اضافه، تجربه خریدی متمرکز و صریح را برای کاربران فراهم کنیم. کلیه امکانات برای سهولت شما عزیزان بهینه شده‌اند.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-box-archive"></i>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">اصالت ۱۰۰٪ کالا</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  تمامی کالاهای موجود در مجموعه با گارانتی اصالت فیزیکی و فاکتور معتبر تقدیم می‌شوند.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">ضمانت ۷ روزه بازگشت</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  در صورت وجود هرگونه مغایرت فنی یا ظاهری، تا هفت روز امکان تعویض و بازگشت مهیاست.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-xl bg-purple-600/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl">
                  <i className="fa-solid fa-paper-plane"></i>
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">تحویل اکسپرس</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  سفارش‌ها با امن‌ترین روش‌های پستی و پیک در کوتاه‌ترین بازه زمانی به دست شما می‌رسند.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                <i className="fa-solid fa-boxes-stacked"></i>
                <span>محصولات منتخب</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                تازه‌ترین تجهیزات دیجیتال
              </h2>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <i className="fa-solid fa-info-circle text-blue-500"></i>
              <span>نمایش کالاهای فروشگاهی با تصاویر باکیفیت WebP</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Call To Action (CTA) */}
        <section className="py-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-2xl mb-2">
              <i className="fa-solid fa-user-shield"></i>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              همین امروز به خانواده بزرگ ساده‌مارکت بپیوندید
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
              با ایجاد یک حساب کاربری ساده، به راحتی سفارش‌های خود را مدیریت کرده و از آخرین تخفیف‌ها مطلع شوید.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 shadow-lg shadow-black/10 transition-all hover:scale-105"
              >
                <i className="fa-solid fa-user-plus"></i>
                <span>افتتاح حساب کاربری رایگان</span>
              </Link>
              <Link
                href="/rules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 font-medium transition-all"
              >
                <i className="fa-solid fa-circle-question"></i>
                <span>مطالعه شرایط و قوانین</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
