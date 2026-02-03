// src/app/layout.tsx
import Footer from "@/components/layout/Footer";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Survey Teknologi Indonesia",
  description:
    "Advanced drone mapping and survey solutions using LiDAR, photogrammetry, and bathymetry.",

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        {/* <Footer /> */}
        <Footer />
      </body>
    </html>
  );
}
