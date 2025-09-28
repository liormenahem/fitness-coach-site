import type { Metadata } from "next";
import "./globals.css";
import { Heebo } from "next/font/google";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "מדריכת כושר - אתר שיווקי",
  description: "אתר מהיר ונגיש למדריכת כושר + בסיס למערכת אדמין",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "מדריכת כושר",
    description: "אתר שיווקי מהיר + אדמין לעריכה ויצירת לידים",
    type: "website",
    url: "https://example.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} font-sans`}>{children}</body>
    </html>
  );
}
