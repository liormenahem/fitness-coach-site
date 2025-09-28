import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  display: "swap",
  weight: ["300", "400", "500", "700", "800"],
});

export const metadata: Metadata = {
  title: "YuviFit | מאמן הכושר הדיגיטלי שלך",
  description:
    "פלטפורמת אימוני כושר מותאמת אישית ב-RTL, עם כלי תיעוד, תזכורות וקהילה תומכת.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans antialiased bg-surface text-body`}>{children}</body>
    </html>
  );
}
