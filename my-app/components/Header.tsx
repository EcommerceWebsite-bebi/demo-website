"use client";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200 flex justify-between items-center w-full px-margin-x h-24">
      <div className="text-2xl font-bold tracking-tight">Bí Be Bé Bi Hihi</div>
      <nav className="hidden md:flex items-center space-x-8">
        <a className="font-semibold text-sm border-b-2 border-black pb-1" href="#">Trang chủ</a>
        <a className="text-sm text-gray-600 hover:text-black" href="#">Thử áo AI</a>
        <a className="text-sm text-gray-600 hover:text-black" href="#">QR Cá nhân hóa</a>
        <a className="text-sm text-gray-600 hover:text-black" href="#">Về chúng tôi</a>
      </nav>
      <div className="flex items-center space-x-6">
        <div className="relative hidden sm:block">
          <input className="bg-gray-100 border-none py-2 pl-4 pr-10 rounded-full w-48 focus:ring-1 focus:ring-black" placeholder="Search" type="text" />
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 scale-75">search</span>
        </div>
        <button className="hover:opacity-70 transition-opacity duration-300 scale-95">
          <span className="material-symbols-outlined">person</span>
        </button>
        <button className="hover:opacity-70 transition-opacity duration-300 scale-95">
          <span className="material-symbols-outlined">shopping_bag</span>
        </button>
      </div>
    </header>
  );
}
