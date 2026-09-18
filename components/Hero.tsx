import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-slate-100/70 via-slate-50/40 to-white dark:from-[#030712] dark:via-[#050b18] dark:to-[#080e1c] border-b border-slate-200/80 dark:border-slate-800/80">
      {/* Subtle deep ambient glow for high contrast in dark mode */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-600/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-right">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 text-xs font-semibold shadow-xs">
              <i className="fa-solid fa-sparkles text-blue-600 dark:text-blue-400"></i>
              <span>فروشگاه مدرن و پیشرو در لوازم دیجیتال</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              تجربه یک خرید آنلاین <br className="hidden sm:inline" />
              <span className="text-blue-600 dark:text-blue-400">ساده، سریع و بدون دغدغه</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              «ساده‌مارکت» مرجع تخصصی ارائه جدیدترین تجهیزات دیجیتال، لوازم جانبی هوشمند و گجت‌های روز با تضمین بهترین قیمت و کیفیت است.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span>مشاهده محصولات</span>
              </Link>
              <Link
                href="/rules"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-slate-700 font-medium transition-all shadow-xs"
              >
                <i className="fa-solid fa-shield-check text-blue-500 dark:text-blue-400"></i>
                <span>قوانین و شرایط</span>
              </Link>
            </div>

            {/* Badges / Stats */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col items-center lg:items-start">
                <span className="flex items-center gap-1.5 text-lg font-bold text-slate-900 dark:text-white">
                  <i className="fa-solid fa-bolt text-amber-500 dark:text-amber-400 text-sm"></i>
                  <span>۱۰۰٪</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">سرعت پردازش</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="flex items-center gap-1.5 text-lg font-bold text-slate-900 dark:text-white">
                  <i className="fa-solid fa-mobile-screen-button text-blue-500 dark:text-blue-400 text-sm"></i>
                  <span>واکنش‌گرا</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">طراحی استاندارد</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="flex items-center gap-1.5 text-lg font-bold text-slate-900 dark:text-white">
                  <i className="fa-solid fa-certificate text-emerald-500 dark:text-emerald-400 text-sm"></i>
                  <span>تضمین اصالت</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">کالاهای اورجینال</span>
              </div>
            </div>
          </div>

          {/* Right Frame in Glassmorphism Container with smooth webkit blur */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-4 rounded-3xl bg-white/80 dark:bg-[#0c1324]/80 backdrop-blur-xl backdrop-saturate-150 border border-slate-200/80 dark:border-slate-700/60 shadow-xl dark:shadow-2xl dark:shadow-black/70 transition-all duration-300 hover:border-blue-500/40">
              {/* Product Image Frame */}
              <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-750 bg-slate-100 dark:bg-slate-950 shadow-inner">
                <Image
                  src="/images/hero.webp"
                  alt="پیشخوان ساده‌مارکت"
                  fill
                  priority
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Sub-cards container */}
              <div className="mt-3.5 grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 dark:bg-[#131c33]/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/70 shadow-xs">
                  <span className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
                    <i className="fa-solid fa-truck-fast"></i>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">ارسال سریع</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">سراسر کشور</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/90 dark:bg-[#131c33]/80 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/70 shadow-xs">
                  <span className="w-9 h-9 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm shrink-0">
                    <i className="fa-solid fa-headset"></i>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">پشتیبانی</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">۲۴ ساعته</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
