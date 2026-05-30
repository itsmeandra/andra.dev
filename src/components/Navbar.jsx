import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  /* Deteksi scroll untuk efek border bawah */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Tutup menu mobile otomatis saat dilonggarkan ke desktop */
  useEffect(() => {
    const handleResize = () => {
      // 480px adalah standar ukuran tablet (iPad vertikal)
      if (window.innerWidth >= 480) setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Prevent body scroll saat menu mobile terbuka (Mencegah scroll ganda) */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLinkClick = (href) => {
    setActiveLink(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)", // Support untuk Safari
          backgroundColor: "rgba(18, 19, 21, 0.85)",
          borderBottom: isScrolled
            ? "1px solid var(--color-border-base)"
            : "1px solid transparent",
          transition: "border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 1.5rem",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <motion.a
            href="#"
            onClick={() => handleLinkClick("")}
            whileHover={{ opacity: 0.8 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                fontWeight: 400,
                fontSize: "18px",
                fontFamily: "var(--font-pixel)",
                letterSpacing: "-0.3px",
                color: "var(--color-text-primary)",
              }}
            >
              Andra
            </span>
          </motion.a>

          {/* NAV LINKS — DESKTOP (Diatur oleh CSS Class) */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={activeLink === link.href}
                onClick={() => handleLinkClick(link.href)}
              />
            ))}
          </nav>

          {/* HAMBURGER — MOBILE (Diatur oleh CSS Class) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            aria-expanded={isMenuOpen}
            className="mobile-menu-btn"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "var(--color-text-primary)",
              borderRadius: "var(--radius-sm)",
            }}
          >
            <HamburgerIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              position: "fixed",
              top: "64px", // Tepat di bawah navbar
              left: 0,
              right: 0,
              bottom: 0, // Mengambil seluruh sisa layar
              zIndex: 40,
              backgroundColor: "var(--color-bg-base)",
              borderTop: "1px solid var(--color-border-base)",
              padding: "2rem 1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
                style={{
                  display: "block",
                  padding: "0.875rem 1rem",
                  fontSize: "16px",
                  fontWeight: 500,
                  color:
                    activeLink === link.href
                      ? "var(--color-accent)"
                      : "var(--color-text-secondary)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-md)",
                  backgroundColor:
                    activeLink === link.href
                      ? "var(--color-accent-hover)"
                      : "transparent",
                  borderBottom: "1px solid var(--color-border-base)",
                  transition: "all 0.15s ease",
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS LOGIC UNTUK MEDIA QUERIES */}
      <style>{`
        /* Default: Mobile-First (HP Kecil) */
        .desktop-nav { 
          display: none; 
        }
        .mobile-menu-btn { 
          display: flex; 
        }

        /* Jika layar tablet ke atas (>= 480px) */
        @media (min-width: 480px) {
          .desktop-nav { 
            display: flex; 
            align-items: center; 
            gap: 1.5rem; 
          }
          .mobile-menu-btn { 
            display: none; 
          }
        }
      `}</style>
    </>
  );
}

/* ── Sub-komponen ── */
function NavLink({ href, label, isActive, onClick }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ color: "var(--color-text-primary)" }}
      style={{
        padding: "0.375rem 0.25rem", // Padding horizontal diperkecil agar garis pas di bawah teks
        fontSize: "14px",
        fontWeight: 450,
        color: isActive
          ? "var(--color-text-primary)"
          : "var(--color-text-muted)",
        textDecoration: "none",
        backgroundColor: "transparent", // Mengunci background tetap transparan saat aktif
        position: "relative",
        transition: "color 0.15s ease",
      }}
    >
      {label}

      {/* Garis bawah aktif */}
      {isActive && (
        <motion.span
          layoutId="nav-indicator"
          style={{
            position: "absolute",
            bottom: "2px", // Diturunkan sedikit agar tidak terlalu menempel dengan teks
            left: 0, // Membuat garis membentang penuh selebar teks
            right: 0, // Membuat garis membentang penuh selebar teks
            height: "2px",
            backgroundColor: "var(--color-accent)",
            borderRadius: "1px",
          }}
        />
      )}
    </motion.a>
  );
}

function HamburgerIcon({ isOpen }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <motion.line
        x1="3"
        y1="7"
        x2="19"
        y2="7"
        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        style={{ transformOrigin: "center" }}
      />
      <motion.line
        x1="3"
        y1="11"
        x2="19"
        y2="11"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.line
        x1="3"
        y1="15"
        x2="19"
        y2="15"
        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        style={{ transformOrigin: "center" }}
      />
    </svg>
  );
}
