"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic Client Validations
    if (!fullName.trim()) {
      setError("لطفاً نام و نام خانوادگی خود را وارد کنید.");
      return;
    }

    if (!email.trim() || !email.includes("@")) {
      setError("لطفاً یک آدرس ایمیل معتبر وارد کنید.");
      return;
    }

    if (!phone.trim() || phone.length < 10) {
      setError("لطفاً شماره موبایل معتبر ۱۰ یا ۱۱ رقمی وارد فرمایید.");
      return;
    }

    if (!password || password.length < 6) {
      setError("کلمه عبور باید دست‌کم شامل ۶ کاراکتر باشد.");
      return;
    }

    if (password !== confirmPassword) {
      setError("کلمه عبور و تکرار آن با یکدیگر همخوانی ندارند.");
      return;
    }

    if (!termsAccepted) {
      setError("جهت ثبت‌نام باید شرایط و قوانین استفاده را بپذیرید.");
      return;
    }

    // Mock successful client-side creation
    setSuccess("ثبت‌نام شبیه‌سازی‌شده شما با موفقیت انجام شد! می‌توانید وارد شوید.");
  };

  return (
    <>
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl">
              <i className="fa-solid fa-user-plus"></i>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              ایجاد حساب کاربری جدید
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              مشخصات خود را جهت ساخت حساب کاربری وارد فرمایید
            </p>
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <i className="fa-solid fa-triangle-exclamation text-sm shrink-0"></i>
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-sm shrink-0"></i>
              <span>{success}</span>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                <i className="fa-solid fa-user text-blue-500 ml-1.5 text-xs"></i>
                <span>نام و نام خانوادگی</span>
              </label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="مثال: علی محمدی"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                <i className="fa-solid fa-envelope text-blue-500 ml-1.5 text-xs"></i>
                <span>پست الکترونیک (ایمیل)</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-left dir-ltr"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                <i className="fa-solid fa-phone text-blue-500 ml-1.5 text-xs"></i>
                <span>شماره همراه</span>
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 text-left dir-ltr"
              />
            </div>

            {/* Passwords row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  <i className="fa-solid fa-lock text-blue-500 ml-1.5 text-xs"></i>
                  <span>رمز عبور</span>
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="حداقل ۶ کاراکتر"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
                >
                  <i className="fa-solid fa-lock-open text-blue-500 ml-1.5 text-xs"></i>
                  <span>تکرار رمز عبور</span>
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="تکرار همان رمز عبور"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="pt-2">
              <label className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer leading-relaxed">
                <input
                  type="checkbox"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>
                  کلیه{" "}
                  <Link href="/rules" className="text-blue-600 dark:text-blue-400 font-semibold underline">
                    قوانین و شرایط استفاده
                  </Link>{" "}
                  ساده‌مارکت را مطالعه نموده و می‌پذیرم.
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-3"
            >
              <i className="fa-solid fa-user-check"></i>
              <span>تکمیل ثبت‌نام و ساخت حساب</span>
            </button>
          </form>

          {/* Switch to Login */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-xs text-slate-600 dark:text-slate-400">
            <span>قبلاً ثبت‌نام کرده‌اید؟</span>{" "}
            <Link
              href="/login"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1 mr-1"
            >
              <i className="fa-solid fa-right-to-bracket text-[11px]"></i>
              <span>ورود به حساب کاربری</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
