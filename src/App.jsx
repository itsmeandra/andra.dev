import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import GithubActivity from "./components/GithubActivity";

export default function App() {
  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
          }
          `}</style>

      <MainLayout>
        {/* ── Hero ── */}
        <Hero />

        {/* Tech Stack */}
        <TechStack />

        {/* Tech Stack */}
        <GithubActivity />
        
      </MainLayout>
    </>
  );
}
