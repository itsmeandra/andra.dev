import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
  withFooter = true,
  fullWidth = false,
  className = "",
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        backgroundColor: "var(--color-bg-base)",
        color: "var(--color-text-primary)",
      }}
    >
      <Navbar />

      {/* Spacer untuk fixed navbar */}
      <div style={{ height: "64px", flexShrink: 0 }} aria-hidden="true" />

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        style={{ flex: 1 }}
        className={className}
      >
        {fullWidth ? children : <PageContainer>{children}</PageContainer>}
      </motion.main>

      {withFooter && <Footer />}
    </div>
  );
}

export function PageContainer({ children, style = {}, className = "" }) {
  return (
    <div
      className={className}
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 1.5rem",
        width: "100%",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
  tight = false,
  style = {},
}) {
  return (
    <section
      id={id}
      className={className}
      style={{
        paddingTop: tight ? "3rem" : "5rem",
        paddingBottom: tight ? "3rem" : "5rem",
        ...style,
      }}
    >
      {children}
    </section>
  );
}

export function SectionHeader({ title, center = false }) {
  return (
    <div
      style={{
        marginBottom: "3rem",
        textAlign: center ? "center" : "left",
      }}
    >
      <h2
        style={{
          fontSize: "0.875rem",
          textTransform: "uppercase",
          fontWeight: "bold",
          lineHeight: 1.15,
          color: "var(--color-text-primary)",
        }}
      >
        {title}
      </h2>
    </div>
  );
}
