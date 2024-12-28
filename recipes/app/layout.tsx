import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/header";

const montserrat = Montserrat({
  subsets: ['cyrillic'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})


export const metadata: Metadata = {
  title: "Resipes | Главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.variable}
      >
        <main className="min-h-screen bg-[url('/bg.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
          <div className="relative z-10">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
