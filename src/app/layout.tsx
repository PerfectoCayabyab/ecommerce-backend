// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "E-commerce Dashboard",
  description: "Next.js + Tailwind E-commerce Admin Dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
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
      <body className="font-sans bg-gray-50 min-h-screen">{children}</body>
    </html>
  );
}
