import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "../layouts/MainLayout";

// Animasi muncul dari bawah
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ state: "loading", message: "" });

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(() => {
        setStatus({
          state: "success",
          message: "Message sent! I'll get back to you soon.",
        });
        form.current.reset();

        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus({
          state: "error",
          message: "Something went wrong, please try again.",
        });
      });
  };
  return (
    <Section id="contact">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionHeader title="CONTACT" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // Responsif: 2 kolom di desktop, 1 kolom di HP
            gap: "3rem",
            marginTop: "1.5rem",
          }}
        >
          {/* ── KOLOM KIRI: Teks & Info Kontak ── */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <h3
              style={{
                margin: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
                lineHeight: 1.4,
              }}
            >
              Let's build something
              <br />
              useful
            </h3>

            <p
              style={{
                margin: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.8,
                textAlign: "justify", // Rata kiri-kanan
              }}
            >
              I'm currently looking for new opportunities or collaborations on
              interesting projects. Whether you have a question or just want to
              say hi, I'll try my best to get back to you!
            </p>

            {/* List Info Kontak */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {/* Email */}
              <a
                href="mailto:juliandra.saputra23@gmail.com"
                // target="_blank"
                // rel="noopener noreferrer"
                className="contact-link"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  cursor: "pointer",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                  }}
                >
                  juliandra.saputra23@gmail.com
                </span>
              </a>

              {/* Lokasi */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--color-text-muted)",
                }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                  }}
                >
                  Indonesia
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── KOLOM KANAN: Form Input ── */}
          <motion.div variants={fadeUp}>
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Input Nama */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="contact-input"
                autoComplete="name"
                required
              />

              {/* Input Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="contact-input"
                autoComplete="email"
                required
              />

              {/* Textarea Pesan */}
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                className="contact-input"
                style={{ resize: "vertical", minHeight: "120px" }}
                required
              ></textarea>

              {/* Tombol Submit */}
              <motion.button
                type="submit"
                disabled={status.state === "loading"}
                whileHover={{ opacity: 0.9, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: "100%",
                  padding: "0.875rem",
                  marginTop: "0.5rem",
                  backgroundColor: "var(--color-accent)", // Warna Cyan
                  color: "#0a0a0a", // Teks gelap agar kontras
                  border: "none",
                  borderRadius: "6px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  cursor:
                    status.state === "loading" ? "not-allowed" : "pointer",
                  transition: "background-color 0.2s ease",
                  opacity: status.state === "loading" ? 0.6 : 1,
                }}
              >
                {status.state === "loading" ? "SENDING..." : "SEND MESSAGE"}
              </motion.button>
              {status.message && (
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    color:
                      status.state === "success"
                        ? "var(--color-accent)"
                        : "#ff6b6b",
                    margin: 0,
                  }}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </motion.div>

        {/* ── CSS KHUSUS UNTUK FORM INPUT ── */}
        <style>{`
          .contact-input {
            width: 100%;
            padding: 0.875rem 1rem;
            background-color: transparent;
            border: 1px solid var(--color-border-muted);
            border-radius: 6px;
            color: var(--color-text-primary);
            font-family: var(--font-mono);
            font-size: 0.875rem;
            outline: none;
            transition: border-color 0.2s ease, box-shadow 0.2s ease;
          }
          
          .contact-input::placeholder {
            color: var(--color-text-muted);
          }

          /* Efek menyala saat input diklik/difokuskan */
          .contact-input:focus {
            border-color: var(--color-accent);
            box-shadow: 0 0 0 1px var(--color-accent-dim);
          }

          .contact-link {
            color: var(--color-text-muted);
            text-decoration: none;
            transition: color 0.2s ease, gap 0.2s ease;
            width: fit-content;
          }

          .contact-link:hover {
            color: var(--color-text-primary);
            gap: 1rem;
          }
        `}</style>
      </div>
    </Section>
  );
}
