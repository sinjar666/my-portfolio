import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { AboutDetails } from "./sections/AboutDetails";
import { footerContent } from "../../content";

export function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 50);
      setHasScrolled(currentScrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-page text-foreground">
      <Navigation scrolled={scrolled} />

      <main className="relative">
        <Hero hasScrolled={hasScrolled} />
        <About />
        <Projects />
        <Experience />
        <AboutDetails />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/20 dark:border-gray-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            {footerContent.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
