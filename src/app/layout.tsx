// src/app/layout.tsx
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Survey Teknologi Indonesia | Drone Mapping & LiDAR Solutions",
  description:
    "Advanced drone mapping and survey solutions using LiDAR, photogrammetry, bathymetry, and SLAM technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="bg-dark-bg font-sans antialiased text-gray-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

