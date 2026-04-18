import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { AdditionalHighlights } from "./sections/AdditionalHighlights";
import { Contact } from "./sections/Contact";
import { Navigation } from "./Navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { AboutDetails } from "./sections/AboutDetails";

export function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDown = currentScrollY > lastScrollY.current;
      const scrolledPastThreshold = currentScrollY > 100;

      if (scrolledDown && scrolledPastThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setHasScrolled(currentScrollY > 24);
      lastScrollY.current = currentScrollY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-page text-foreground">
      <Navigation scrolled={scrolled} isVisible={isVisible} />

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
            © 2026 Srijan Mukherjee. Crafted with precision & passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
