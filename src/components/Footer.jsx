export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border-base)",
        backgroundColor: "var(--color-bg-elevated)",
        marginTop: "3.75rem"
      }}
    >
      <div
        style={{
          borderTop: "1px solid var(--color-border-base)",
          padding: "1rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-text-muted)",
            }}
          >
            © {year} Juliandra Saputra. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "var(--color-text-muted)",
            }}
          >
            Built with a cup of{" "}
            <span style={{ color: "var(--color-accent)" }}>coffee</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
