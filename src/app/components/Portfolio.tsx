import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import { Navigation } from "./Navigation";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AboutDetails } from "./sections/AboutDetails";
import { useIsMobile } from "./ui/use-mobile";

export function Portfolio() {
  const isMobile = useIsMobile();
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledDown = currentScrollY > lastScrollY;
      const scrolledPastThreshold = currentScrollY > 100;

      if (scrolledDown && scrolledPastThreshold) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950">
      {/* Animated background */}
      {!isMobile ? (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-400/20 to-indigo-400/20 dark:from-pink-600/10 dark:to-indigo-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>
      ) : (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-400/20 to-indigo-400/20 dark:from-pink-600/10 dark:to-indigo-600/10 rounded-full blur-3xl" />
        </div>
      )}

      <Navigation scrolled={scrolled} isVisible={isVisible} />

      <main className="relative">
        <Hero isMobile={isMobile} />
        <About isMobile={isMobile} />
        <Projects isMobile={isMobile} />
        <Experience isMobile={isMobile} />
        <AboutDetails isMobile={isMobile} />
        <Skills isMobile={isMobile} />
        <Contact isMobile={isMobile} />
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
