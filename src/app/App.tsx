import { ThemeProvider } from "./components/ThemeProvider";
import { Portfolio } from "./components/Portfolio";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <Portfolio />
    </ThemeProvider>
  );
}
