"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const navItems = [
    { href: "/shop", label: "SHOP" },
    { href: "/custom", label: "CUSTOM" },
    { href: "/daily", label: "DAILY" },
    { href: "/contact", label: "CONTACT" },
    { href: "/about", label: "ABOUT US" },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200 flex justify-between items-center w-full px-margin-x h-24">
      <Link href="/" aria-label="Home" className="text-2xl font-bold tracking-tight">MOUSEEE</Link>
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => {
          const active = pathname?.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm ${
                active ? "text-black border-b border-black pb-1" : "text-gray-600 hover:text-black"
              } hover:border-b hover:border-black pb-0 hover:pb-1 transition-all duration-150`}
            >
              {item.label}
            </Link>
          );
        })}
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
