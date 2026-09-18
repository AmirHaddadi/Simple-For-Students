# سازوکار تم (Theme Architecture)

وب‌سایت ساده‌مارکت دارای تم دوگانه **روشن (Light)** و **تاریک (Dark)** است.

## نحوه پیاده‌سازی

1. **متغیرهای سراسری CSS (`app/globals.css`):**
   * از CSS Variables استاندارد برای تفکیک مقادیر رنگی استفاده شده است:
     * `--background`
     * `--foreground`
     * `--card-bg`
     * `--card-border`
     * `--muted`
     * `--accent`
   * با اعمال کلاس `.dark` یا اتریبیوت `[data-theme="dark"]` روی عنصر ریشه `<html>`، پالت تیره فعال می‌شود.

2. **کامپوننت `ThemeToggle.tsx`:**
   * در هنگام لود شدن صفحه:
     * ابتدا `localStorage.getItem("theme")` بررسی می‌شود.
     * در صورت عدم وجود تنظیم قبلی، از طریق `window.matchMedia('(prefers-color-scheme: dark)')` وضعیت تم سیستم‌عامل کاربر شناسایی می‌شود.
   * با کلیک کاربر، تم جابجا شده و مقدار آن در `localStorage` ذخیره می‌گردد تا در رفرش یا جابجایی بین صفحات حفظ شود.
