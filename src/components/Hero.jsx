import { motion } from "framer-motion";
import { Section } from "../layouts/MainLayout";
import avatar from "../assets/avatar.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <Section id="home" style={{ paddingTop: "6rem", paddingBottom: "6rem" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.div
          variants={fadeUp}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
            marginBottom: "6.25rem",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src={avatar}
              alt="Juliandra Saputra"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <h1
              style={{
                fontSize: "clamp(1rem, 3vw, 1.5rem)",
                fontWeight: 400,
                color: "var(--color-text-primary)",
                fontFamily: "var(--font-pixel)",
                lineHeight: 1,
                marginBottom: "1.5rem",
                margin: 0,
              }}
            >
              Juliandra Saputra
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.25rem",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(0.875rem, 3vw, 1rem)",
                  fontWeight: 500,
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-mono)",
                  letterSpacing: "-0.04em",
                }}
              >
                CS Student • Frontend Developer
              </span>

              <span
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                }}
              >
                {/* Button LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/juliandra-saputra/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileHover={{
                    borderColor: "var(--color-accent)",
                    color: "var(--color-text-primary)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.375rem 0.75rem",
                    border: "1px dashed var(--color-border-muted)",
                    borderRadius: "4px",
                    color: "var(--color-text-primary)",
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-mono)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Linkedin
                </motion.a>

                {/* Button GitHub */}
                <motion.a
                  href="https://github.com/itsmeandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileHover={{
                    borderColor: "var(--color-accent)",
                    color: "var(--color-text-primary)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.375rem 0.75rem",
                    border: "1px dashed var(--color-border-muted)",
                    borderRadius: "4px",
                    color: "var(--color-text-primary)",
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-mono)",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  GitHub
                </motion.a>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: "16px",
            textAlign: "justify",
            color: "var(--color-text-primary)",
            lineHeight: 1.7,
            maxWidth: "800px",
          }}
        >
          I’m a Computer Science student focused on creating clean, performant,
          and accessible user interfaces. With a strong interest in frontend
          development and UI/UX, I transform complex ideas into intuitive,
          responsive, and meaningful digital products.
        </motion.p>
      </motion.div>
    </Section>
  );
}
