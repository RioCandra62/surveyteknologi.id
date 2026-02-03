import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + description */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/assets/image/logo.jpeg"
            width={120}
            height={120}
            alt="Survey Teknologi Indonesia Logo"
            className="rounded-xl mb-4"
            unoptimized
          />
          <p className="text-slate-400 max-w-xs text-center md:text-left">
            Survey Teknologi Indonesia delivers precise geospatial data and mapping solutions using LiDAR, photogrammetry, bathymetry, and spatial camera technologies.
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex justify-around md:justify-between">
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-amber-400">Company</h4>
            <Link href="/" className="hover:text-amber-300">Home</Link>
            <Link href="/about" className="hover:text-amber-300">About Us</Link>
            <Link href="/contact" className="hover:text-amber-300">Contact</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-semibold text-amber-400">Services</h4>
            <Link href="/solutions/lidar" className="hover:text-amber-300">LiDAR</Link>
            <Link href="/solutions/photogrammetry" className="hover:text-amber-300">Photogrammetry</Link>
            <Link href="/solutions/bathymetry" className="hover:text-amber-300">Bathymetry</Link>
            <Link href="/solutions/spatial-camera" className="hover:text-amber-300">Spatial Camera</Link>
          </div>
        </div>

        {/* Contact info / social */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          <h4 className="font-semibold text-amber-400">Contact Us</h4>
          <p className="text-slate-400">info@surveyteknologi.id</p>
          <p className="text-slate-400">+62 812 3456 7890</p>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="hover:text-amber-300">Facebook</Link>
            <Link href="#" className="hover:text-amber-300">LinkedIn</Link>
            <Link href="#" className="hover:text-amber-300">Instagram</Link>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-white/10 pt-4 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Survey Teknologi Indonesia. All rights reserved.
      </div>
    </footer>
  );
}
