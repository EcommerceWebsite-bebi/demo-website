"use client";

import ProductCard from "./ProductCard";

const products = [
  {
    title: "Nike Running - Neon",
    price: "$ 210.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC73OxiTh6PCBda9-sxAR8uUwbyQEr5i4AKAY2Z-yhkduMVJuIeaSme7UKCWvhwLYOYagWpOaW0J3Akh5lDXxDikAV0xH2skxSMPQSVmi5Fu_EJFKoI3Dj8DT3DnpI4H5LzTqVX7gTjut1jywrFis39cRCJEzp6eQKsJDoV4HjObQDxHUJbYffKjEG__HSeTq9jIF0RaUhxicCKaBawByxBI8iNEe7JR2YfToHn9VTz5KaiHQ4Fx7JFCUllW2poQJqCyFYcNATUVGg",
  },
  {
    title: "Nike Sport - Phantom",
    price: "$ 185.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlvn5cqrzXONRejRv4HdNtElwNc3oChLYMsUuTN_MbnxFV0Tz6SYzZVBlhi-kngcHV8OfP5NRusFJ6P4ONHXtTYNlaShWuhIJvArIM1IUV6C9LmoL3RBITfWc_Ah6wzLppV9mIREFYb9MkNc7Hyb4-H4m-C0zkrYjI0-gdCbzRuQRJiS6nAqldLX7BAXMx2l6taMHs9JfUH1Edi-5yO04o5uZtQe2h3u2ZRVv745RiOXlNGKBkFHhtu3MMNAVUL7YF6gYTVAlv5wI",
  },
  {
    title: "Nike Air - Prism",
    price: "$ 245.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6BcqsWBgKSc4WVsW8LDHOi-3-RhpYL60ok7TztseKVlKSu2Rmb5QkF8-RJl79NxMQoIhO8IzNwZztijfS4TbA3XQmwPPPcmaHKZPQTG5Y_Z6_vN6DrtLj4433xyqShkAB6zdsq4Hq3uTCVh6yzT6s2adWO6zg6qw15hzFyxfbI9vLmu1_68BlLNttIf6BSc6i5bUrueTwHUp1EdkRpNUOUd_uX4_8MsBzIQS0eEozsB4YTeNzcu_zhzi_lEZ-cuwa2zHA6phtJlM",
  },
  {
    title: "Nike High - Legacy",
    price: "$ 220.00",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN1uowtMBLbkxCxeo1Nfhf7whBiqi1jHRsvQcJBtKh6Rd2PmqmGIHq41wNfJdWDRKi7B-W_jEJ5u4dME4qMbK8S0IAwL3OTixnZuOaptHlTbOJOBS4cSaVxtDRKVx5PtxNfn_eM2Yq8otw4XzSY4xm84wL28C5yXxI-_47NdD6aaKnFpssZKGShLyWpiCP8WeQ6RJV6irMv6DUlkN9z3O7RBJ0X84BLsvg6iihI9JbiRxq2kokIbUU1AvPwRunIqs8yy3PU1mdcR0",
  },
];

export default function ProductGrid() {
  return (
    <section className="py-stack-xl px-margin-x">
      <div className="flex flex-col items-center gap-4 mb-16 sm:relative sm:flex-row sm:items-end sm:justify-center">
        <span className="text-xs text-gray-500 uppercase sm:absolute sm:left-0">NEW ARRIVALS</span>
        <h2 className="text-3xl font-semibold text-center">Tất cả sản phẩm</h2>
        <a className="text-sm border-b border-black pb-1 hover:opacity-50 sm:absolute sm:right-0" href="#">XEM TẤT CẢ</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
        {products.map((p) => (
          <ProductCard key={p.title} title={p.title} price={p.price} img={p.img} />
        ))}
      </div>
    </section>
  );
}
