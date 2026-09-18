# راهنمای نصب و راه‌اندازی (Setup & Installation)

این پروژه با کمترین وابستگی ممکن و به صورت Client-Side طراحی شده و برای اجرا تنها به محیط **Node.js** نیاز دارد.

## پیش‌نیازها

* **Node.js**: نسخه 18.18 یا بالاتر (پیشنهاد: Node.js 20 LTS یا 22)
* **مدیریت پکیج**: `npm` یا `yarn` یا `pnpm`

---

## مراحل نصب

### ۱. دریافت یا کلون پروژه

```bash
git clone https://github.com/AmirHaddadi/Simple-For-Students.git
cd Simple-For-Students
```

### ۲. نصب بسته‌های وابستگی (Dependencies)

دستور زیر را در ریشه پروژه اجرا کنید:

```bash
npm install
```

این دستور پکیج‌های Next.js، React، TailwindCSS و پکیج بومی **Font Awesome** را نصب می‌کند.

---

## دستورات اجرایی

### اجرای محیط توسعه (Development)

برای اجرای محلی با قابلیت Hot Reload:

```bash
npm run dev
```

سپس مرورگر خود را باز کرده و به آدرس زیر بروید:
[http://localhost:3000](http://localhost:3000)

---

### خروجی گرفتن و ساخت نسخه نهایی (Production Build)

برای اطمینان از صحت کامل ساختار و کدهای پروژه:

```bash
npm run build
```

و برای اجرای پروژه روی خروجی بیلد شده:

```bash
npm start
```
