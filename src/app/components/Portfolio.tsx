import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";

export function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <div className="portfolio__background">
        <div className="portfolio__background-ring portfolio__background-ring--top" />
        <div className="portfolio__background-ring portfolio__background-ring--bottom" />
      </div>

      <Navigation scrolled={scrolled} />

      <main className="portfolio__main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="portfolio__footer">
        <div className="portfolio__footer-inner">
          <p className="portfolio__footer-text">
            © 2026 Srijan Mukherjee. Crafted with precision & passion.
          </p>
        </div>
      </footer>
    </div>
  );
}
