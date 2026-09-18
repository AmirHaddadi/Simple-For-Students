import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ساده‌مارکت — فروشگاه اینترنتی ساده و مینیمال",
  description: "فروشگاه اینترنتی مدرن، سریع و مینیمال با رابط کاربری فارسی و طراحی استاندارد",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
