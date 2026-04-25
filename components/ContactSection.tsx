"use client"

import { useState } from "react"

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    // Simulate async submit
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setStatus("success")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-[#fefae0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#1B4332]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1B4332]" />
            <span className="text-[#1B4332] font-body font-semibold text-xs tracking-widest uppercase">
              Hubungi Kami
            </span>
          </div>
          <h2 className="font-heading font-black text-[#1B4332] text-3xl sm:text-4xl lg:text-5xl text-balance mb-3">
            Mari Berdiskusi
          </h2>
          <p className="font-body font-light italic text-gray-500 text-lg">
            {"Let's Talk Business"}
          </p>
          <p className="font-body text-gray-600 text-base max-w-xl mx-auto mt-3 leading-relaxed">
            Tim kami siap merespons pertanyaan Anda dalam 1×24 jam kerja.
            <em className="text-gray-400 block text-sm mt-1">Our team is ready to respond within 1×24 working hours.</em>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="font-heading font-bold text-[#1B4332] text-xl mb-1">Kirim Pesan</h3>
            <p className="font-body font-light italic text-gray-400 text-sm mb-6">Send Us a Message</p>

            {status === "success" ? (
              <div className="bg-[#1B4332]/8 border border-[#1B4332]/20 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 bg-[#1B4332] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="font-heading font-bold text-[#1B4332] text-lg">Pesan Terkirim!</p>
                <p className="font-body font-light italic text-gray-500 text-sm mt-1">Message Sent Successfully!</p>
                <p className="font-body text-gray-600 text-sm mt-2">Kami akan menghubungi Anda segera.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-[#1B4332] font-body font-medium text-sm underline"
                >
                  Kirim pesan lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-body font-medium text-gray-700 text-sm mb-1.5">
                    Nama Lengkap <span className="text-red-500" aria-hidden="true">*</span>
                    <span className="font-light italic text-gray-400 ml-2 text-xs">Full Name</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332] transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-body font-medium text-gray-700 text-sm mb-1.5">
                    Alamat Email <span className="text-red-500" aria-hidden="true">*</span>
                    <span className="font-light italic text-gray-400 ml-2 text-xs">Email Address</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="budi@perusahaan.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332] transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-body font-medium text-gray-700 text-sm mb-1.5">
                    Pesan / Pertanyaan <span className="text-red-500" aria-hidden="true">*</span>
                    <span className="font-light italic text-gray-400 ml-2 text-xs">Message</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Sebutkan produk yang diminati, volume kebutuhan, tujuan negara, dll..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 font-body text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1B4332]/30 focus:border-[#1B4332] transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#1B4332] hover:bg-[#2d6a4f] disabled:opacity-70 text-white font-heading font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Company Info */}
          <div className="flex flex-col gap-6">
            {/* Address Card */}
            <div className="bg-white rounded-3xl shadow-lg p-7">
              <h3 className="font-heading font-bold text-[#1B4332] text-lg mb-1">Alamat Operasional</h3>
              <p className="font-body font-light italic text-gray-400 text-sm mb-5">Operational Address</p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    label: "Lokasi",
                    labelEn: "Location",
                    value: "Jl. Raya Pati–Kudus No. 88, Pati, Jawa Tengah 59111",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    label: "Email",
                    labelEn: "Email",
                    value: "export@indoblitzagriculture.com",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    label: "Telepon",
                    labelEn: "Phone",
                    value: "+62 857-1234-5678",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    label: "Jam Operasional",
                    labelEn: "Business Hours",
                    value: "Senin – Jumat: 08.00 – 17.00 WIB",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <span className="font-heading font-semibold text-gray-800 text-sm block">
                        {item.label}
                        <span className="font-body font-light italic text-gray-400 text-xs ml-1">/ {item.labelEn}</span>
                      </span>
                      <span className="font-body text-gray-600 text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#1B4332] to-[#2d6a4f] rounded-3xl p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/15 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">Chat via WhatsApp</h3>
                  <p className="font-body font-light italic text-gray-300 text-xs">Quick Response Guaranteed</p>
                </div>
              </div>
              <p className="font-body text-gray-200 text-sm leading-relaxed">
                Respon lebih cepat melalui WhatsApp Business kami. Tim sales siap melayani 6 hari seminggu.
              </p>
              <a
                href="https://wa.me/6285712345678?text=Halo%20Indo%20Blitz%20Agriculture%2C%20saya%20ingin%20menanyakan%20tentang%20produk%20sekam%20padi."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#D4A373] text-[#1B4332] hover:text-white font-heading font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat Sekarang di WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
