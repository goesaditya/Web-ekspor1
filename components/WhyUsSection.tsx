const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Kualitas Terjamin",
    subtitle: "Quality Control",
    desc: "Setiap produk melewati proses seleksi ketat dengan standar kadar air & kebersihan internasional sebelum pengiriman.",
    descEn: "Every product undergoes a strict selection process with international moisture content & purity standards before shipment.",
    highlight: "ISO & Fitosanitari Certified",
    bg: "bg-gradient-to-br from-[#1B4332] to-[#2d6a4f]",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Pengiriman Global",
    subtitle: "Global Shipping",
    desc: "Jaringan logistik laut & udara ke Asia, Eropa, dan Timur Tengah. Pengurusan dokumen ekspor sepenuhnya ditangani.",
    descEn: "Sea & air logistics network to Asia, Europe, and the Middle East. Full export documentation handling included.",
    highlight: "20+ Countries Served",
    bg: "bg-gradient-to-br from-[#D4A373] to-[#b8834a]",
    textDark: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Harga Kompetitif",
    subtitle: "Competitive Pricing",
    desc: "Harga langsung dari sumbernya di Pati. Negosiasi untuk pembelian dalam jumlah besar sangat terbuka.",
    descEn: "Prices directly from the source in Pati. Negotiation for bulk purchases is very welcome.",
    highlight: "Best FOB/CIF Price",
    bg: "bg-gradient-to-br from-[#1B4332] to-[#2d6a4f]",
  },
]

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1B4332]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />
            <span className="text-[#1B4332] font-body font-semibold text-xs tracking-widest uppercase">
              Keunggulan Kami
            </span>
          </div>
          <h2 className="font-heading font-black text-[#1B4332] text-3xl sm:text-4xl lg:text-5xl text-balance mb-3">
            Mengapa Memilih Kami?
          </h2>
          <p className="font-body font-light italic text-gray-500 text-lg">
            Why Choose Indo Blitz Agriculture?
          </p>
          <p className="font-body text-gray-600 text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Kami bukan sekadar pemasok — kami adalah mitra bisnis yang dapat diandalkan untuk kebutuhan ekspor sekam padi Anda.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`${f.bg} rounded-3xl p-8 flex flex-col gap-5 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${f.textDark ? "bg-[#1B4332]/20 text-[#1B4332]" : "bg-white/15 text-[#D4A373]"}`}>
                {f.icon}
              </div>

              {/* Title */}
              <div>
                <h3 className={`font-heading font-bold text-xl ${f.textDark ? "text-[#1B4332]" : "text-white"}`}>
                  {f.title}
                </h3>
                <p className={`font-body font-light italic text-sm ${f.textDark ? "text-[#1B4332]/70" : "text-gray-300"}`}>
                  {f.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className={`font-body text-sm leading-relaxed ${f.textDark ? "text-[#1B4332]/80" : "text-gray-200"}`}>
                {f.desc}
              </p>
              <p className={`font-body font-light italic text-xs leading-relaxed ${f.textDark ? "text-[#1B4332]/60" : "text-gray-400"}`}>
                {f.descEn}
              </p>

              {/* Highlight Badge */}
              <div className={`mt-auto inline-flex items-center gap-1.5 text-xs font-heading font-bold rounded-full px-3 py-1.5 w-fit ${f.textDark ? "bg-[#1B4332]/15 text-[#1B4332]" : "bg-white/15 text-[#D4A373]"}`}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {f.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
