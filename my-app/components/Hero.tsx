"use client";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden border-b border-gray-200">
      <div className="absolute inset-0 z-0">
        <img
          alt="Cinematic Water Texture"
          className="w-full h-full object-cover grayscale brightness-50"
          src="/stitch-assets/c6dae015a3284253aad7df13837fc940.png"
        />
      </div>
      <div className="relative z-10 px-margin-x max-w-4xl text-white">
        <h1 className="text-[56px] md:text-[80px] leading-tight font-serif mb-6">Trải nghiệm thử áo online bằng AI</h1>
        <p className="text-lg max-w-xl mb-12 opacity-90">Chính bạn, chính form áo. Không cần ra cửa hàng. Không còn chọn sai size. Công nghệ tương lai cho tủ đồ của bạn.</p>
        <button className="bg-white text-black px-10 py-4 font-semibold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-500">Xem cách hoạt động</button>
      </div>
    </section>
  );
}
