// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "E-commerce Dashboard",
  description: "Next.js + Tailwind E-commerce Admin Dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
       
        {/* Remix Icon */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
        />
        {/* ECharts */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js"
          defer
        ></script>
      </head>
      <body
        className={`${pacifico.className} font-sans bg-gray-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
