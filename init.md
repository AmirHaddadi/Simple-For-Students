# Simple Persian E-Commerce Website — Student Project

یک پروژه بسیار ساده، تمیز و قابل ارائه برای پروژه دانشگاهی بساز.

## هدف

یک سایت فروشگاهی فارسی و RTL با ظاهر مدرن و مینیمال ایجاد کن که فقط بخش‌های اصلی زیر را داشته باشد:

* Landing / Home
* Login
* Register
* قوانین و شرایط استفاده
* Header
* Footer
* Dark / Light Theme

پروژه عمداً ساده باشد و وارد منطق پیچیده، API، دیتابیس یا Backend واقعی نشو.

## Stack

* Node.js
* Next.js
* HTML
* CSS
* JavaScript / TypeScript در صورت نیاز
* بدون Database
* بدون API
* بدون Authentication واقعی
* بدون Backend Business Logic

Node.js فقط برای اجرای پروژه استفاده شود.

پروژه باید با یک دستور ساده اجرا شود:

```bash
npm run dev
```

در صورت نیاز یک دستور build استاندارد نیز داشته باشد:

```bash
npm run build
npm start
```

## Frontend

ساختار صفحات:

```text
/
 /login
 /register
 /rules
```

### Home / Landing

شامل:

* Header
* Hero section
* معرفی کوتاه فروشگاه
* چند محصول نمونه به صورت Mock/Static
* CTA
* Footer

محصولات فقط Static باشند و نیازی به خرید واقعی، سبد خرید یا پرداخت نیست.

### Login

فرم ساده:

* ایمیل / شماره موبایل
* رمز عبور
* دکمه ورود
* لینک ثبت‌نام

هیچ Authentication واقعی پیاده‌سازی نکن.

### Register

فرم ساده:

* نام
* ایمیل
* شماره موبایل
* رمز عبور
* تکرار رمز عبور
* دکمه ثبت‌نام

فقط Validation ساده سمت Client کافی است.

### Rules

صفحه قوانین و شرایط استفاده با محتوای نمونه فارسی و قابل قبول برای یک فروشگاه ایرانی.

## UI / UX

طراحی:

* Minimal
* Modern
* Clean
* User Friendly
* Responsive
* Mobile First
* RTL
* مناسب سایت فارسی ایران

Theme:

* Light
* Dark

تغییر Theme بدون پیچیدگی و با حفظ وضعیت در LocalStorage انجام شود.

از Shadow، Gradient، Animation و Componentهای اضافی بیش از حد استفاده نکن.

طراحی باید شبیه یک پروژه دانشجویی تمیز و حرفه‌ای باشد، نه یک سیستم Enterprise.

## Typography

فونت **IranYekan** در Root پروژه قرار دارد.

فونت را از فایل‌های موجود پروژه به صورت صحیح با `@font-face` تعریف کن و فونت اصلی کل سایت قرار بده.

تمام متن‌ها، فرم‌ها، Navigation و Componentها باید از همین فونت استفاده کنند.

## RTL / Persian

تمام موارد مربوط به سایت فارسی رعایت شود:

* `dir="rtl"`
* متن فارسی
* Alignment صحیح
* فاصله‌گذاری مناسب
* اعداد و قیمت‌های نمونه مناسب ایران
* فرم‌های RTL
* Responsive Navigation
* موبایل / تبلت / دسکتاپ

## Branding

نام، Logo متنی، رنگ‌های اصلی و هویت بصری را خودت انتخاب کن.

یک نام ساده و قابل ارائه برای فروشگاه انتخاب کن.

نیازی به طراحی برند پیچیده نیست.

## Images / Assets

اگر برای Landing یا Product Cards به تصویر نیاز داری، فعلاً از Placeholder مناسب استفاده کن.

اما اگر تشخیص دادی که برای ظاهر نهایی پروژه تصاویر اختصاصی لازم است:

برای **هر دسته تصویر** یک فایل Markdown داخل:

```text
/docs/image-prompts/
```

بساز.

مثلاً:

```text
/docs/image-prompts/hero.md
/docs/image-prompts/products.md
```

داخل هر فایل فقط Prompt دقیق تولید تصویر را قرار بده و مشخص کن:

* موضوع تصویر
* سبک
* ابعاد
* Aspect Ratio
* فرمت خروجی موردنظر
* محل استفاده در پروژه
* نام فایل پیشنهادی

بعد از اینکه تصاویر تولید شدند و به پروژه داده شدند:

1. تصاویر را بررسی کن.
2. در صورت نیاز به WebP تبدیل کن.
3. نام‌گذاری استاندارد انجام بده.
4. در مسیر مناسب `public/` قرار بده.
5. مسیر تصاویر را در Components اصلاح کن.
6. مطمئن شو تصاویر Responsive هستند.

فعلاً بدون دریافت تصاویر خارجی پروژه را کامل کن.

## Components

Componentها ساده و قابل فهم باشند.

حداقل:

```text
Header
Footer
ThemeToggle
Hero
ProductCard
```

از abstraction و معماری بیش از حد خودداری کن.

## Project Structure

ساختار نهایی مرتب و قابل فهم باشد، مثلاً:

```text
project/
├── app/
│   ├── page.*
│   ├── login/
│   ├── register/
│   └── rules/
├── components/
├── public/
│   ├── fonts/
│   └── images/
├── styles/
├── docs/
│   └── image-prompts/
├── package.json
├── README.md
└── ...
```

ساختار را بر اساس نسخه Next.js انتخاب کن و از الگوی استاندارد همان نسخه استفاده کن.

## Documentation

مستندات کامل ولی مختصر و قابل فهم ایجاد کن.

تمام مستندات Markdown باشند.

حداقل:

```text
README.md
docs/
├── project-structure.md
├── setup.md
├── pages.md
├── components.md
├── theme.md
└── image-prompts/
```

### README.md

توضیح بده:

* پروژه چیست
* هدف پروژه
* تکنولوژی‌های استفاده‌شده
* نحوه نصب
* نحوه اجرا
* نحوه Build
* ساختار کلی پروژه

### project-structure.md

توضیح ساده مسیرها و مسئولیت هر پوشه.

### pages.md

تمام صفحات و وظیفه هر صفحه.

### components.md

Componentهای اصلی و کاربرد هرکدام.

### theme.md

نحوه Light/Dark Theme و LocalStorage.

## Important Constraints

* Backend واقعی نساز.
* Database نساز.
* API نساز.
* JWT نساز.
* Session نساز.
* Payment نساز.
* پنل مدیریت نساز.
* سیستم پیچیده Authentication نساز.
* وابستگی غیرضروری اضافه نکن.
* UI را بیش از حد پیچیده نکن.
* کد باید برای یک دانشجوی ترم پایین قابل فهم باشد.
* هیچ Feature غیرضروری اضافه نکن.

## Final Verification

در پایان:

```bash
npm install
npm run build
```

را اجرا کن و خطاهای Build را برطرف کن.

سپس پروژه را با:

```bash
npm run dev
```

قابل اجرا نگه دار.

در پایان ساختار پروژه، دستورات اجرا و فایل‌های مهم را در README توضیح بده.

هدف اصلی:

**یک فروشگاه فارسی بسیار ساده، زیبا، Responsive و قابل ارائه دانشگاهی که کل منطق آن در Client باشد و با یک دستور اجرا شود.**
