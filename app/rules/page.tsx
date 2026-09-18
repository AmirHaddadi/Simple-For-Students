import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RulesPage() {
  const sections = [
    {
      id: "general",
      icon: "fa-solid fa-scale-balanced",
      title: "۱. مقررات عمومی و دامنه تعهدات",
      content:
        "استفاده از وب‌سایت ساده‌مارکت به منزله آگاهی کامل و پذیرش تمامی بندهای ذکر شده در این صفحه می‌باشد. این وب‌سایت در قالب یک پروژه دانشگاهی توسعه یافته و کلیه محتویات، محصولات و قیمت‌های نمایش‌داده‌شده جنبه آزمایشی و ارائه‌ای دارند.",
    },
    {
      id: "account",
      icon: "fa-solid fa-user-shield",
      title: "۲. حساب کاربری و حفظ امنیت",
      content:
        "کاربر موظف است در هنگام تکمیل فرم ثبت‌نام از اطلاعات صحیح استفاده نماید. مسئولیت حفظ و نگهداری کلمه عبور و هرگونه فعالیت ثبت شده تحت عنوان شناسه کاربری به عهده شخص کاربر خواهد بود.",
    },
    {
      id: "orders",
      icon: "fa-solid fa-box-check",
      title: "۳. ثبت سفارش و نحوه تحویل",
      content:
        "سفارش‌ها در بستر شبیه‌سازی ثبت می‌گردند. در سامانه‌های تجاری واقعی، پردازش سفارشات پس از تایید نهایی پرداخت انجام شده و تحویل مرسولات بسته به آدرس ثبت‌شده از طریق شبکه پستی یا ناوگان اختصاصی صورت می‌پذیرد.",
    },
    {
      id: "return",
      icon: "fa-solid fa-rotate-left",
      title: "۴. شرایط بازگشت کالا و گارانتی",
      content:
        "در صورتی که کالای دریافت شده دارای مغایرت مشخصات با صفحه محصول یا آسیب فیزیکی باشد، خریدار می‌تواند تا ۷ روز تقویمی درخواست تعویض یا عودت وجه را مطرح نماید. کالا باید در شرایط اولیه و بسته‌بندی پلمپ بازگردانده شود.",
    },
    {
      id: "privacy",
      icon: "fa-solid fa-shield-halved",
      title: "۵. حریم خصوصی کاربران",
      content:
        "ساده‌مارکت متعهد می‌شود از اطلاعات خصوصی کاربران با استفاده از بالاترین معیارهای فنی حفاظت کند و هیچ‌گونه اطلاعات هویتی را در اختیار اشخاص ثالث تجاری قرار ندهد.",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-8">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1">
            <i className="fa-solid fa-house text-[11px]"></i>
            <span>صفحه اصلی</span>
          </Link>
          <i className="fa-solid fa-chevron-left text-[9px] text-slate-400"></i>
          <span className="text-slate-800 dark:text-slate-200 font-medium">قوانین و شرایط استفاده</span>
        </nav>

        {/* Header Title */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl">
              <i className="fa-solid fa-file-contract"></i>
            </span>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                قوانین و شرایط استفاده از ساده‌مارکت
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                <i className="fa-regular fa-clock text-blue-500"></i>
                <span>آخرین بازبینی و به‌روزرسانی: مهرماه ۱۴۰۳</span>
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-100 dark:border-slate-700/60">
            لطفاً پیش از هرگونه تعامل با سرویس‌ها و ثبت اطلاعات در سامانه، توافق‌نامه و مقررات زیر را به دقت مطالعه فرمایید. این مستند حقوق و وظایف دوطرفه خریدار و مجموعه را تبیین می‌نماید.
          </p>
        </div>

        {/* Rule Sections */}
        <div className="space-y-6">
          {sections.map((sec) => (
            <div
              key={sec.id}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-xs hover:border-blue-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm shrink-0">
                  <i className={sec.icon}></i>
                </span>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {sec.title}
                </h2>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed pr-12">
                {sec.content}
              </p>
            </div>
          ))}
        </div>

        {/* Acceptance Note */}
        <div className="mt-8 p-5 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-circle-exclamation text-xl text-blue-600 dark:text-blue-400"></i>
            <span className="text-xs sm:text-sm text-blue-900 dark:text-blue-200">
              سوال یا ابهامی در ارتباط با شرایط استفاده دارید؟ با واحد دانشجویی در ارتباط باشید.
            </span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            <i className="fa-solid fa-house"></i>
            <span>بازگشت به خانه</span>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
