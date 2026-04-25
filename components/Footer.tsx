const footerLinks = {
  perusahaan: [
    { label: "Tentang Kami", href: "#hero" },
    { label: "Visi & Misi", href: "#why-us" },
    { label: "Sertifikasi", href: "#specs" },
    { label: "Kontak", href: "#contact" },
  ],
  produk: [
    { label: "Raw Rice Husk", href: "#products" },
    { label: "Rice Husk Pellets", href: "#products" },
    { label: "Husk Ash", href: "#products" },
    { label: "Custom Order", href: "#contact" },
  ],
  layanan: [
    { label: "Ekspor & Logistik", href: "#contact" },
    { label: "Quality Control", href: "#specs" },
    { label: "Konsultasi Produk", href: "#contact" },
    { label: "Download Katalog", href: "#contact" },
  ],
}

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/6285712345678",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0f2a1e] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <a href="#hero" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-full bg-[#D4A373] flex items-center justify-center">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
                  <path d="M20 4 C12 10 8 18 10 26 C12 32 16 36 20 38 C24 36 28 32 30 26 C32 18 28 10 20 4Z" fill="#1B4332" />
                  <path d="M20 8 C20 8 14 16 14 22 C14 28 17 33 20 36" stroke="#D4A373" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="block text-white font-heading font-bold text-base">Indo Blitz Agriculture</span>
                <span className="block text-[#D4A373] font-body font-light text-xs italic">Premium Rice Husk Exporter</span>
              </div>
            </a>
            <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs">
              Eksportir sekam padi terpercaya dari Pati, Jawa Tengah. Menghubungkan kualitas lokal dengan pasar global.
            </p>
            <p className="font-body font-light italic text-gray-500 text-xs leading-relaxed max-w-xs">
              Trusted rice husk exporter from Pati, Central Java. Connecting local quality with the global market.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-white/8 hover:bg-[#D4A373] rounded-xl flex items-center justify-center text-gray-400 hover:text-[#1B4332] transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {(
            [
              { title: "Perusahaan", titleEn: "Company", links: footerLinks.perusahaan },
              { title: "Produk", titleEn: "Products", links: footerLinks.produk },
              { title: "Layanan", titleEn: "Services", links: footerLinks.layanan },
            ] as const
          ).map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-bold text-white text-sm mb-1">{col.title}</h4>
              <p className="font-body font-light italic text-gray-500 text-xs mb-4">{col.titleEn}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-gray-400 hover:text-[#D4A373] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-gray-500 text-xs text-center sm:text-left">
            &copy; {year} Indo Blitz Agriculture. Hak Cipta Dilindungi.
            <em className="block sm:inline sm:ml-1 text-gray-600">All Rights Reserved.</em>
          </p>
          <div className="flex items-center gap-1 font-body text-gray-600 text-xs">
            <svg className="w-3.5 h-3.5 text-[#D4A373]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Pati, Jawa Tengah, Indonesia
          </div>
        </div>
      </div>
    </footer>
  )
}
