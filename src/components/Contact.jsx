import { FaInstagram, FaFacebook, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-primary to-dark text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-16">
          Contactez‑Nous
        </h2>

        {/* 3 Columns Layout */}
        <div className="grid md:grid-cols-3 gap-10 items-center">

          {/* LEFT - Social Media */}
          <div className="space-y-6 text-left">
            <a
              href="https://www.instagram.com/tifawin.gm202?igsh=eXJhNTU4MXJyOWk0"
              target="_blank"
              className="flex items-center gap-4 hover:text-secondary transition"
            >
              <FaInstagram size={22} />
              <span>@tifawin.gm202</span>
            </a>

            <a
              href="https://www.facebook.com/all.woorld"
              target="_blank"
              className="flex items-center gap-4 hover:text-secondary transition"
            >
              <FaFacebook size={22} />
              <span>Facebook Page</span>
            </a>
          </div>

          {/* CENTER - Gmail */}
          <div className="flex justify-center">
            <div className="flex items-center gap-4 hover:text-secondary transition">
              <FaEnvelope size={22} />
              <span>tifawin.gm202@gmail.com</span>
            </div>
          </div>

          {/* RIGHT - Phone Numbers */}
          <div className="space-y-6 text-right">
            <div className="flex items-center justify-end gap-4">
              <span>0652623903</span>
              <FaPhoneAlt size={20} />
            </div>

            <div className="flex items-center justify-end gap-4">
              <span>0663587871</span>
              <FaPhoneAlt size={20} />
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}