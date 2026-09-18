"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/85 dark:bg-slate-900/85 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <i className="fa-solid fa-bag-shopping text-xl"></i>
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                ساده‌مارکت
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                پروژه فروشگاهی دانشجویی
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fa-solid fa-house text-blue-500"></i>
            <span>صفحه اصلی</span>
          </Link>
          <Link
            href="/#products"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fa-solid fa-box-open text-blue-500"></i>
            <span>محصولات</span>
          </Link>
          <Link
            href="/rules"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <i className="fa-solid fa-file-contract text-blue-500"></i>
            <span>قوانین و شرایط</span>
          </Link>
        </nav>

        {/* Actions (Login / Register / Theme) */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1" />
          <Link
            href="/login"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
          >
            <i className="fa-solid fa-right-to-bracket text-slate-500 dark:text-slate-400"></i>
            <span>ورود</span>
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-500/20 transition-all hover:shadow-md hover:shadow-blue-500/30"
          >
            <i className="fa-solid fa-user-plus"></i>
            <span>ثبت‌نام</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="منوی اصلی"
          >
            {mobileMenuOpen ? (
              <i className="fa-solid fa-xmark text-xl"></i>
            ) : (
              <i className="fa-solid fa-bars text-xl"></i>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
            >
              <i className="fa-solid fa-house text-blue-500"></i>
              <span>صفحه اصلی</span>
            </Link>
            <Link
              href="/#products"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
            >
              <i className="fa-solid fa-box-open text-blue-500"></i>
              <span>محصولات</span>
            </Link>
            <Link
              href="/rules"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm font-medium"
            >
              <i className="fa-solid fa-file-contract text-blue-500"></i>
              <span>قوانین و شرایط</span>
            </Link>
          </div>
          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl"
            >
              <i className="fa-solid fa-right-to-bracket text-slate-500 dark:text-slate-400"></i>
              <span>ورود به حساب</span>
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl shadow-sm"
            >
              <i className="fa-solid fa-user-plus"></i>
              <span>ایجاد حساب کاربری</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
