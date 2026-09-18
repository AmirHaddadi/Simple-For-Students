import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-100 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: About */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <i className="fa-solid fa-bag-shopping text-sm"></i>
              </span>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                فروشگاه ساده‌مارکت
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-md">
              فروشگاه اینترنتی ساده‌مارکت، مرجع تخصصی خرید لوازم دیجیتال، ساعت‌های هوشمند، تجهیزات کامپیوتری و صوتی. طراحی مدرن، ارسال سریع و تضمین اصالت کالا.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-link text-blue-500 dark:text-blue-400 text-xs"></i>
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                  <i className="fa-solid fa-chevron-left text-[10px] text-slate-400 dark:text-slate-500"></i>
                  <span>صفحه نخست</span>
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                  <i className="fa-solid fa-chevron-left text-[10px] text-slate-400 dark:text-slate-500"></i>
                  <span>لیست محصولات</span>
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                  <i className="fa-solid fa-chevron-left text-[10px] text-slate-400 dark:text-slate-500"></i>
                  <span>قوانین و مقررات</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact / Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-blue-500 dark:text-blue-400 text-xs"></i>
              خدمات مشتریان
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-phone text-slate-400 dark:text-slate-500 text-xs"></i>
                <span>پشتیبانی: ۰۲۱-۸۸۸۸۸۸۸۸</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-truck-fast text-slate-400 dark:text-slate-500 text-xs"></i>
                <span>ارسال اکسپرس سراسر ایران</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-slate-400 dark:text-slate-500 text-xs"></i>
                <span>ضمانت ۷ روزه بازگشت کالا</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-center text-xs text-slate-600 dark:text-slate-400">
          <p className="flex items-center gap-1.5 font-medium text-center">
            <i className="fa-regular fa-copyright"></i>
            <span>تمامی حقوق برای فروشگاه ساده‌مارکت محفوظ است.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
