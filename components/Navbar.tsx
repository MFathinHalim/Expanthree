"use client"

export default function Navbar() {
  return (
    <nav className="w-full px-4 pt-5 md:pb-5 md:pt-0 md:max-w-2/3 mx-auto flex font-bold justify-between items-center pb-12 rounded-xl">
        <div className="flex items-center gap-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="/Images/logo.png"
          alt="Logo"
          className="w-12 h-12 rounded-full"
        />
      </div>

      {/* Menu tengah */}
      <div className="flex gap-6 font-bold text-2xl">
        <a href="#gallery"><p>Gallery</p></a>
        <a href="#students"><p>Students</p></a>
      </div>
      </div>

      {/* Tombol kanan */}
      <button className="border bg-[#EDDCCE] font-bold px-4 py-1 rounded-full  transition">
        Send NGL
      </button>
    </nav>
  );
}
