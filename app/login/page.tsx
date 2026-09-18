"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStatusMessage(null);

    if (!identifier.trim()) {
      setError("لطفاً ایمیل یا شماره موبایل خود را وارد نمایید.");
      return;
    }

    if (!password) {
      setError("لطفاً کلمه عبور را وارد کنید.");
      return;
    }

    if (password.length < 6) {
      setError("کلمه عبور باید حداقل ۶ کاراکتر باشد.");
      return;
    }

    // Client-side simulated success (no real backend as required)
    setStatusMessage("ورود شما با موفقیت شبیه‌سازی شد! به سامانه خوش آمدید.");
  };

  return (
    <>
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12 bg-slate-50 dark:bg-slate-900/50">
        <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
          {/* Header */}
          <div className="text-center space-y-2 mb-6">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-2xl">
              <i className="fa-solid fa-right-to-bracket"></i>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              ورود به حساب کاربری
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              برای دسترسی به سوابق و سفارش‌ها اطلاعات خود را وارد کنید
            </p>
          </div>

          {/* Feedback messages */}
          {error && (
            <div className="mb-5 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-300 text-xs flex items-center gap-2">
              <i className="fa-solid fa-triangle-exclamation text-sm shrink-0"></i>
              <span>{error}</span>
            </div>
          )}

          {statusMessage && (
            <div className="mb-5 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-sm shrink-0"></i>
              <span>{statusMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="identifier"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                <i className="fa-solid fa-envelope text-blue-500 ml-1.5 text-xs"></i>
                <span>ایمیل یا شماره موبایل</span>
              </label>
              <div className="relative">
                <input
                  id="identifier"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="example@mail.com یا ۰۹۱۲۳۴۵۶۷۸۹"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5"
              >
                <i className="fa-solid fa-lock text-blue-500 ml-1.5 text-xs"></i>
                <span>رمز عبور</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="حداقل ۶ کاراکتر"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900/60 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                  aria-label="نمایش کلمه عبور"
                >
                  <i className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"} text-xs`}></i>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-1.5 text-slate-600 dark:text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                />
                <span>مرا به خاطر بسپار</span>
              </label>
              <span className="text-slate-400 cursor-not-allowed hover:underline flex items-center gap-1">
                <i className="fa-solid fa-key text-[10px]"></i>
                فراموشی رمز؟
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
              <span>ورود به سامانه</span>
            </button>
          </form>

          {/* Switch to Register */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-xs text-slate-600 dark:text-slate-400">
            <span>حساب کاربری ندارید؟</span>{" "}
            <Link
              href="/register"
              className="text-blue-600 dark:text-blue-400 font-bold hover:underline inline-flex items-center gap-1 mr-1"
            >
              <i className="fa-solid fa-user-plus text-[11px]"></i>
              <span>ثبت‌نام کنید</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
