import Image from "next/image";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg px-4">
      <div className="flex flex-col md:flex-row items-center justify-evenly text-xl">
        
        {/* Left menu */}
        <div className="md:flex flex-row justify-evenly w-full md:w-1/3 py-2 md:py-0 hidden">
          <p className="hover:font-semibold cursor-pointer">Home</p>
          <p className="hover:font-semibold cursor-pointer">Solutions</p>
        </div>

        {/* Logo */}
        <Image
          src="/assets/image/logo.jpeg"
          width={110}
          height={110}
          alt="logo"
          className="my-2 md:my-0"
          unoptimized
        />

        {/* Right menu */}
        <div className="md:flex hidden flex-row justify-evenly w-full md:w-1/3 py-2 md:py-0">
          <p className="hover:font-semibold cursor-pointer">About Us</p>
          <p className="hover:font-semibold cursor-pointer">Contact</p>
        </div>
      </div>
    </div>
  );
}
