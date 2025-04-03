import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MP-4",
  description: "Project using Harvard Art Museum API",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        </body>
        </html>
    );
}
