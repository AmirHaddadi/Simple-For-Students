import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: About */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <i className="fa-solid fa-bag-shopping text-sm"></i>
              </span>
              <span className="font-bold text-base text-slate-900 dark:text-white">
                فروشگاه ساده‌مارکت
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              یک وب‌سایت نمونه فروشگاه اینترنتی طراحی شده با Next.js برای پروژه‌های دانشگاهی.
              طراحی شده بر پایه معماری مینیمال، فونت استاندارد فارسی و رابط کاربری کاربرپسند.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-link text-blue-500 text-xs"></i>
              دسترسی سریع
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li>
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                  <i className="fa-solid fa-chevron-left text-[10px] text-slate-400"></i>
                  <span>صفحه نخست</span>
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                  <i className="fa-solid fa-chevron-left text-[10px] text-slate-400"></i>
                  <span>لیست محصولات</span>
                </Link>
              </li>
              <li>
                <Link href="/rules" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2 transition-colors">
                  <i className="fa-solid fa-chevron-left text-[10px] text-slate-400"></i>
                  <span>قوانین و مقررات</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact / Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <i className="fa-solid fa-circle-info text-blue-500 text-xs"></i>
              اطلاعات پروژه
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-graduation-cap text-slate-400"></i>
                <span>پروژه کارشناسی / دانشگاهی</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-code text-slate-400"></i>
                <span>توسعه‌یافته با Next.js & Tailwind</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-slate-400"></i>
                <span>بدون وابستگی به سرور و دیتابیس</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-1">
            <i className="fa-regular fa-copyright"></i>
            <span>تمامی حقوق برای این پروژه آموزشی و دانشجویی محفوظ است.</span>
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <i className="fa-solid fa-heart text-red-500"></i>
              <span>طراحی شده با عشق برای دانشجویان</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
