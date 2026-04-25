export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1920&auto=format&fit=crop"
          alt="Lahan padi hijau luas di Jawa Tengah dengan langit cerah"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/90 via-[#1B4332]/75 to-[#0f2a1e]/85" />
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #D4A373 0, #D4A373 1px, transparent 0, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#D4A373]/20 border border-[#D4A373]/40 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#D4A373] animate-pulse" />
          <span className="text-[#D4A373] font-body font-medium text-sm tracking-wide">
            Pati, Jawa Tengah — Est. 2018
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-heading font-black text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-balance mb-4">
          Pasokan Global
          <span className="text-[#D4A373] block">Sekam Padi Premium</span>
          dari Pati
        </h1>
        <p className="font-body font-light italic text-gray-300 text-lg sm:text-xl mb-6 text-balance">
          Global Supply of Premium Rice Husk from Pati, Central Java
        </p>

        {/* Sub-headline */}
        <p className="font-body text-gray-200 text-base sm:text-lg max-w-2xl mx-auto mb-3 text-pretty leading-relaxed">
          Kapasitas produksi <strong className="text-[#D4A373]">10.000+ ton/bulan</strong> dengan
          pengiriman tepat waktu ke lebih dari <strong className="text-[#D4A373]">20 negara</strong>.
          Standar kualitas internasional, harga kompetitif.
        </p>
        <p className="font-body font-light italic text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Production capacity of 10,000+ tons/month with on-time delivery to more than 20 countries.
          International quality standards, competitive pricing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="bg-[#D4A373] hover:bg-[#b8834a] text-[#1B4332] font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Lihat Katalog Produk
          </a>
          <a
            href="#contact"
            className="border-2 border-white/60 hover:border-[#D4A373] text-white hover:text-[#D4A373] font-heading font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Hubungi Kami
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "10K+", label: "Ton/Bulan", sub: "Tons/Month" },
            { value: "20+", label: "Negara Tujuan", sub: "Countries" },
            { value: "5+", label: "Tahun Pengalaman", sub: "Years Experience" },
            { value: "100%", label: "Bersertifikat", sub: "Certified" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
            >
              <div className="font-heading font-black text-[#D4A373] text-2xl sm:text-3xl">{stat.value}</div>
              <div className="font-body font-medium text-white text-xs mt-1">{stat.label}</div>
              <div className="font-body font-light italic text-gray-400 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50">
        <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  )
}
