const specs = [
  {
    label: "Kadar Air (Moisture Content)",
    raw: "≤ 13%",
    pellet: "≤ 10%",
    ash: "≤ 5%",
  },
  {
    label: "Kebersihan (Purity)",
    raw: "≥ 95%",
    pellet: "≥ 98%",
    ash: "≥ 90%",
  },
  {
    label: "Kadar Abu (Ash Content)",
    raw: "15 – 20%",
    pellet: "12 – 18%",
    ash: "≥ 85% SiO₂",
  },
  {
    label: "Nilai Kalor (Calorific Value)",
    raw: "3,000 – 3,400 kcal/kg",
    pellet: "3,600 – 4,200 kcal/kg",
    ash: "N/A",
  },
  {
    label: "Ukuran / Size",
    raw: "5 – 10 mm",
    pellet: "Ø 6 – 8 mm",
    ash: "Fine / Coarse",
  },
  {
    label: "Kemasan (Packaging)",
    raw: "50kg Bag / Bulk",
    pellet: "15kg Bag / BigBag",
    ash: "25kg Bag / BigBag",
  },
  {
    label: "MOQ (Min. Order Qty)",
    raw: "1 x 20' FCL",
    pellet: "1 x 20' FCL",
    ash: "500 kg",
  },
]

const certs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Sertifikat Fitosanitari",
    titleEn: "Phytosanitary Certificate",
    desc: "Diterbitkan oleh Badan Karantina Pertanian RI untuk setiap pengiriman ekspor.",
    descEn: "Issued by Indonesian Agricultural Quarantine Agency for every export shipment.",
    status: "Tersedia",
    statusEn: "Available",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Laporan Surveyor",
    titleEn: "Surveyor Report",
    desc: "Pemeriksaan kualitas dan kuantitas oleh surveyor independen (SGS / Sucofindo).",
    descEn: "Quality and quantity inspection by independent surveyor (SGS / Sucofindo).",
    status: "Atas Permintaan",
    statusEn: "On Request",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Sertifikat Asal (COO)",
    titleEn: "Certificate of Origin",
    desc: "Form D (ASEAN), Surat Keterangan Asal dari Dinas Perdagangan setempat.",
    descEn: "Form D (ASEAN), Certificate of Origin from the local Trade Office.",
    status: "Tersedia",
    statusEn: "Available",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Analisis Laboratorium",
    titleEn: "Laboratory Analysis",
    desc: "Laporan uji kadar air, abu, dan nilai kalor dari laboratorium terakreditasi.",
    descEn: "Test report for moisture content, ash, and calorific value from accredited lab.",
    status: "Setiap Batch",
    statusEn: "Each Batch",
  },
]

export default function SpecsSection() {
  return (
    <section id="specs" className="py-20 bg-[#1B4332]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
            <span className="text-[#D4A373] font-body font-semibold text-xs tracking-widest uppercase">
              Spesifikasi & Sertifikasi
            </span>
          </div>
          <h2 className="font-heading font-black text-white text-3xl sm:text-4xl lg:text-5xl text-balance mb-3">
            Standar Produk & Dokumen
          </h2>
          <p className="font-body font-light italic text-gray-300 text-lg">
            Product Standards & Documentation
          </p>
        </div>

        {/* Specs Table */}
        <div className="overflow-x-auto rounded-2xl shadow-xl mb-14">
          <table className="w-full text-sm" role="table" aria-label="Tabel spesifikasi produk">
            <thead>
              <tr className="bg-[#0f2a1e]">
                <th className="text-left font-heading font-bold text-[#D4A373] px-5 py-4 text-sm">
                  Spesifikasi
                </th>
                <th className="text-center font-heading font-bold text-white px-5 py-4 text-sm">
                  Raw Rice Husk
                  <span className="block font-body font-light italic text-gray-400 text-xs normal-case">Sekam Mentah</span>
                </th>
                <th className="text-center font-heading font-bold text-[#D4A373] px-5 py-4 text-sm border-x border-[#D4A373]/20">
                  Rice Husk Pellets
                  <span className="block font-body font-light italic text-[#D4A373]/60 text-xs normal-case">Pelet Sekam</span>
                </th>
                <th className="text-center font-heading font-bold text-white px-5 py-4 text-sm">
                  Husk Ash
                  <span className="block font-body font-light italic text-gray-400 text-xs normal-case">Arang Sekam</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {specs.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-white/5 ${i % 2 === 0 ? "bg-white/5" : "bg-white/[0.02]"} hover:bg-white/10 transition-colors`}
                >
                  <td className="font-body font-medium text-gray-200 px-5 py-3.5">{row.label}</td>
                  <td className="font-heading font-semibold text-white text-center px-5 py-3.5">{row.raw}</td>
                  <td className="font-heading font-semibold text-[#D4A373] text-center px-5 py-3.5 border-x border-[#D4A373]/10">{row.pellet}</td>
                  <td className="font-heading font-semibold text-white text-center px-5 py-3.5">{row.ash}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="bg-white/8 border border-white/10 rounded-2xl p-5 flex flex-col gap-3 hover:bg-white/12 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4A373]/20 text-[#D4A373] flex items-center justify-center">
                {cert.icon}
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-sm">{cert.title}</h3>
                <p className="font-body font-light italic text-gray-400 text-xs">{cert.titleEn}</p>
              </div>
              <p className="font-body text-gray-300 text-xs leading-relaxed">{cert.desc}</p>
              <p className="font-body font-light italic text-gray-500 text-xs leading-relaxed">{cert.descEn}</p>
              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 bg-[#D4A373]/15 text-[#D4A373] text-xs font-heading font-semibold px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]" />
                  {cert.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
