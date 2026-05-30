import { motion } from "framer-motion";
import { Section, SectionHeader } from "../layouts/MainLayout";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const techStackData = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "TailwindCSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    name: "CodeIgniter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain-wordmark.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  },
];

export default function TechStack() {
  return (
    <Section id="tech-stack">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionHeader title="Tech Stack" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.875rem",
            marginTop: "1.5rem",
          }}
        >
          {techStackData.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                y: -3,
                borderColor: "var(--color-text-secondary)",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
              }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.625rem",
                padding: "0.5rem 0.875rem",
                border: "1px solid var(--color-border-muted)",
                borderRadius: "4px",
                backgroundColor: "transparent",
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                cursor: "default",
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  style={{ width: "20px", height: "20px" }}
                  loading="lazy"
                />
              </span>
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
