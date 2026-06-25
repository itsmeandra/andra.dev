import { motion } from "framer-motion";
import { Section, SectionHeader } from "../layouts/MainLayout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const projectsData = [
  {
    title: "LostnFound App",
    description:
      "A community-driven mobile platform for reporting and finding lost items with real-time notifications and location tracking.",
    image: "/projects/lostnfound.jpg",
    link: "https://github.com/itsmeandra/LostnFound-App",
    tech: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
      },
    ],
  },
  {
    title: "Smart Blind Stick IoT",
    description:
      "Assistive technology using ultrasonic sensors and GPS to help visually impaired individuals navigate safely with haptic feedback.",
    image: "/projects/blindstick.jpg",
    link: "https://github.com/itsmeandra/Smart-Blind-Stick-IoT",
    tech: [
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
  {
    title: "Smart Bell ESP32-CAM",
    description:
      "A security IoT doorbell featuring face detection and remote monitoring via a dedicated web interface.",
    image: "/projects/smartbell.jpg",
    link: "https://github.com/itsmeandra/Smart-bell-ESP32-CAM",
    tech: [
      {
        name: "C++",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  },
  {
    title: "BeresIn App",
    description:
      "A task management system designed for collaborative teams to streamline workflows and track project milestones efficiently.",
    image: "/projects/beresin.jpg",
    link: "https://github.com/itsmeandra/BeresIn-App",
    tech: [
      {
        name: "Flutter",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      },
      {
        name: "Firebase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
      },
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionHeader title="Featured Projects" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--color-bg-elevated)",
                border: "1px solid var(--color-border-base)",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              {/* 1. Bagian Gambar */}
              <div
                style={{
                  width: "100%",
                  height: "200px",
                  backgroundColor: "var(--color-bg-subtle)",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  loading="lazy"
                />
              </div>

              {/* 2. Bagian Konten/Teks */}
              <div
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                {/* Judul & Ikon Panah (SEKARANG MENJADI LINK) */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ color: "var(--color-accent)" }} // Teks & icon berubah cyan saat di-hover
                  style={{
                    display: "flex",
                    gap: "0.313rem",
                    alignItems: "center",
                    marginBottom: "1rem",
                    textDecoration: "none",
                    color: "var(--color-text-primary)",
                    cursor: "pointer", // Kursor telunjuk hanya aktif di area ini
                    transition: "color 0.2s ease",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontFamily: "var(--font-mono)",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "inherit", // Mewarisi warna dari parent <a> agar ikut berubah saat di-hover
                    }}
                  >
                    {project.title}
                  </h3>
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
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </motion.a>

                {/* Tech Stack project */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                    marginBottom: "1rem",
                  }}
                >
                  {project.tech.map((t) => (
                    <motion.span
                      key={t.name}
                      whileHover={{
                        y: -2,
                        borderColor: "var(--color-text-secondary)",
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.375rem",
                        padding: "0.25rem 0.625rem",
                        border: "1px solid var(--color-border-muted)",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--color-text-secondary)",
                        cursor: "default", // Kursor standar (panah biasa) untuk card
                      }}
                    >
                      <img
                        src={t.icon}
                        alt={t.name}
                        style={{ width: "14px", height: "14px" }}
                        loading="lazy"
                      />
                      {t.name}
                    </motion.span>
                  ))}
                </div>

                {/* Deskripsi */}
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.875rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    textAlign: "justify",
                    hyphens: "auto",
                  }}
                >
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
