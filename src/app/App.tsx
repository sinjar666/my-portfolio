import { ThemeProvider } from "./components/ThemeProvider";
import { Portfolio } from "./components/Portfolio";
import { MotionConfig } from "motion/react";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <MotionConfig reducedMotion="user">
        <Portfolio />
      </MotionConfig>
    </ThemeProvider>
  );
}
