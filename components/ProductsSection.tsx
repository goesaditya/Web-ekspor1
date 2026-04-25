const products = [
  {
    id: 1,
    name: "Raw Rice Husk",
    nameid: "Sekam Padi Mentah",
    tag: "Ekspor Langsung",
    tagEn: "Direct Export",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Tumpukan sekam padi mentah berwarna cokelat keemasan dalam karung di gudang",
    desc: "Sekam padi segar langsung dari penggilingan. Dikeringkan alami, bebas kontaminan, siap kirim dalam kemasan karung atau curah.",
    descEn: "Fresh rice husk directly from the mill. Naturally dried, contaminant-free, ready for shipment in bag or bulk packaging.",
    price: "$30 – $55",
    unit: "/ton FOB",
    specs: [
      { label: "Kadar Air", value: "≤ 13%" },
      { label: "Kebersihan", value: "≥ 95%" },
      { label: "Kemasan", value: "50kg Karung / Curah" },
    ],
    uses: ["Bahan Bakar Boiler", "Media Tanam", "Pakan Ternak"],
    usesEn: ["Boiler Fuel", "Growing Media", "Animal Feed"],
    color: "from-[#1B4332]",
  },
  {
    id: 2,
    name: "Rice Husk Pellets",
    nameid: "Pelet Sekam Padi",
    tag: "Energi Terbarukan",
    tagEn: "Renewable Energy",
    image:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Pelet biomassa silindris berwarna cokelat keemasan dalam tangan petani di lahan hijau",
    desc: "Sekam padi yang dipadatkan menjadi pelet biomassa berenergi tinggi. Ideal untuk pembangkit listrik dan pemanas industri.",
    descEn: "Rice husk compressed into high-energy biomass pellets. Ideal for power generation and industrial heating systems.",
    price: "$80 – $130",
    unit: "/ton FOB",
    specs: [
      { label: "Kadar Air", value: "≤ 10%" },
      { label: "Kalor", value: "≥ 3,800 kcal/kg" },
      { label: "Kemasan", value: "15kg Karung / BigBag" },
    ],
    uses: ["Pembangkit Listrik", "Industri Pemanas", "Biomass Energy"],
    usesEn: ["Power Generation", "Industrial Heating", "Biomass Energy"],
    color: "from-[#2d6a4f]",
    featured: true,
  },
  {
    id: 3,
    name: "Husk Ash",
    nameid: "Arang Sekam / Abu Sekam",
    tag: "Agrikultur & Industri",
    tagEn: "Agriculture & Industry",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Media tanam arang sekam padi hitam dihamburkan di lahan pertanian organik hijau",
    desc: "Hasil pembakaran terkontrol sekam padi. Mengandung SiO₂ tinggi, sangat baik untuk media tanam organik dan bahan baku industri.",
    descEn: "Result of controlled combustion of rice husk. High SiO₂ content, excellent for organic growing media and industrial raw materials.",
    price: "$25 – $45",
    unit: "/ton FOB",
    specs: [
      { label: "Kadar SiO₂", value: "≥ 85%" },
      { label: "Ukuran", value: "Fine / Coarse" },
      { label: "Kemasan", value: "25kg Karung / BigBag" },
    ],
    uses: ["Media Tanam Organik", "Campuran Semen", "Industri Silika"],
    usesEn: ["Organic Growing Media", "Cement Additive", "Silica Industry"],
    color: "from-[#40916c]",
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D4A373]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
            <span className="text-[#b8834a] font-body font-semibold text-xs tracking-widest uppercase">
              Katalog Produk
            </span>
          </div>
          <h2 className="font-heading font-black text-[#1B4332] text-3xl sm:text-4xl lg:text-5xl text-balance mb-3">
            Produk Unggulan Kami
          </h2>
          <p className="font-body font-light italic text-gray-500 text-lg">
            Our Featured Products
          </p>
          <p className="font-body text-gray-600 text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Tiga produk andalan kami siap memenuhi kebutuhan industri, energi, dan pertanian Anda di seluruh dunia.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100 ${product.featured ? "ring-2 ring-[#D4A373]" : ""}`}
            >
              {/* Featured Badge */}
              {product.featured && (
                <div className="absolute top-4 right-4 z-20 bg-[#D4A373] text-[#1B4332] font-heading font-bold text-xs px-3 py-1 rounded-full shadow-md">
                  Terlaris
                </div>
              )}

              {/* Product Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} to-transparent opacity-60`} />
                {/* Tag */}
                <div className="absolute bottom-3 left-4">
                  <span className="bg-white/90 text-[#1B4332] font-body font-semibold text-xs px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                  <span className="block font-body font-light italic text-white/80 text-xs mt-0.5 pl-1">
                    {product.tagEn}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                {/* Name */}
                <div>
                  <h3 className="font-heading font-bold text-[#1B4332] text-xl">{product.name}</h3>
                  <p className="font-body font-light italic text-gray-500 text-sm">{product.nameid}</p>
                </div>

                {/* Description */}
                <p className="font-body text-gray-600 text-sm leading-relaxed">{product.desc}</p>
                <p className="font-body font-light italic text-gray-400 text-xs leading-relaxed">{product.descEn}</p>

                {/* Quick Specs */}
                <div className="bg-gray-50 rounded-2xl p-3 flex flex-col gap-1.5">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex items-center justify-between text-xs">
                      <span className="font-body text-gray-500">{s.label}</span>
                      <span className="font-heading font-semibold text-[#1B4332]">{s.value}</span>
                    </div>
                  ))}
                </div>

                {/* Use Cases */}
                <div className="flex flex-wrap gap-1.5">
                  {product.uses.map((use, i) => (
                    <span
                      key={use}
                      className="text-xs font-body bg-[#1B4332]/8 text-[#1B4332] px-2.5 py-1 rounded-full border border-[#1B4332]/15"
                      title={product.usesEn[i]}
                    >
                      {use}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
                  <div>
                    <p className="font-body text-gray-400 text-xs">Estimasi Harga</p>
                    <p className="font-heading font-black text-[#D4A373] text-xl">
                      {product.price}
                      <span className="text-gray-400 font-body font-normal text-xs ml-1">{product.unit}</span>
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="bg-[#1B4332] hover:bg-[#2d6a4f] text-white font-heading font-semibold text-xs px-4 py-2.5 rounded-full transition-colors"
                  >
                    Minta Penawaran
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-gray-500 text-sm mb-4">
            Butuh spesifikasi detail atau custom order?{" "}
            <em className="text-gray-400">Need detailed specs or custom orders?</em>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1B4332] hover:bg-[#2d6a4f] text-white font-heading font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Hubungi Tim Penjualan Kami
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
