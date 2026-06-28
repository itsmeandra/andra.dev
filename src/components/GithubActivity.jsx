import { useState } from "react";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "../layouts/MainLayout";
import { GitHubCalendar } from "react-github-calendar";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function GithubActivity() {
  // 2. Buat state untuk menyimpan jumlah streak secara live
  const [streak, setStreak] = useState(0);

  const explicitTheme = {
    light: ["#1a1c1d", "#133747", "#175975", "#1c7da6", "#61dafb"],
    dark: ["#1a1c1d", "#133747", "#175975", "#1c7da6", "#61dafb"],
  };

  // 3. Fungsi untuk menghitung streak dari data mentah kalender
  const calculateStreak = (data) => {
    let currentStreak = 0;
    const lastIndex = data.length - 1; // Index hari ini (paling akhir di array)

    // Looping mundur dari hari ini ke hari-hari sebelumnya
    for (let i = lastIndex; i >= 0; i--) {
      if (data[i].count > 0) {
        currentStreak++; // Jika ada kontribusi, tambah streak
      } else {
        // Jika hari ini belum ada kontribusi, jangan putus streak kemarin
        if (i === lastIndex) continue;
        // Jika hari sebelumnya 0 kontribusi, streak benar-benar putus
        break;
      }
    }

    // 4. Update state jika angkanya berbeda (dibungkus setTimeout agar React tidak error "too many re-renders")
    if (streak !== currentStreak) {
      setTimeout(() => setStreak(currentStreak), 0);
    }

    // Wajib me-return data agar kalender tetap bisa dirender oleh library
    return data;
  };

  return (
    <Section id="github-activity">
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionHeader title="GitHub Activity" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="github-activity-wrapper"
          style={{
            backgroundColor: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border-base)",
            borderRadius: "12px",
            padding: "1.5rem",
          }}
        >
          {/* ── Profil & Streak Dinamis ── */}
          <div
            className="streak-card"
            style={{
              backgroundColor: "var(--color-bg-surface)",
              borderRadius: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-text-primary)",
              }}
            >
              @itsmeandra
            </span>

            <div style={{ position: "relative", marginTop: "0.5rem" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: streak > 0 ? "#ff5a00" : "var(--color-text-muted)", // Api menyala jika ada streak
                  backgroundColor: "var(--color-bg-surface)",
                  padding: "0 4px",
                  transition: "color 0.3s ease",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 15.8 5.61 17.12 6.47 18.2C8.11 20.24 10.93 21.32 13.62 20.89C16.92 20.36 19.53 17.6 19.92 14.31C20.1 12.72 19.26 11.23 17.66 11.2ZM13.06 17.55C12.42 17.81 11.66 17.81 11.02 17.55C10.61 17.39 10.24 17.1 9.94 16.74C10.5 16.5 10.95 16 11.16 15.42C11.39 14.77 11.18 13.96 10.64 13.43C11.53 13.64 12.44 14.37 12.71 15.35C12.87 15.93 12.73 16.64 12.24 17.06C12.56 17.21 12.91 17.28 13.26 17.28C13.68 17.28 14.09 17.16 14.45 16.93C14.13 17.27 13.63 17.55 13.06 17.55Z" />
                </svg>
              </div>

              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  border: "3px solid var(--color-border-muted)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {streak}
                </span>
              </div>
            </div>
          </div>

          {/* ── GitHub Calendar ── */}
          <div className="github-calendar-container">
            <GitHubCalendar
              username="itsmeandra"
              theme={explicitTheme}
              colorScheme="dark"
              blockSize={10}
              blockMargin={4}
              fontSize={12}
              transformData={calculateStreak}
            />
          </div>
        </motion.div>

        <style>{`
          .github-activity-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            width: 100%;
          }

          .streak-card {
            width: 100%;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
          }
          .github-calendar-container {
            width: 100%;
            overflow-x: auto;
            display: flex;
            justify-content: center;
            padding-bottom: 0.5rem;
          }

          .github-calendar-container text {
            font-family: var(--font-mono) !important;
            fill: var(--color-text-secondary) !important;
          }

          @media (min-width: 660px) {
            .github-activity-wrapper {
              flex-direction: row; /* Berjejer dari kiri ke kanan */
              align-items: center;
              justify-content: flex-start;
            }

            .streak-card {
              width: auto;
              min-width: 120px;
              flex-shrink: 0;
            }

            .calendar-container {
              flex: 1;
              justify-content: center;
            }
          }
        `}</style>
      </div>
    </Section>
  );
}
