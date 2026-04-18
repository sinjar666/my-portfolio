import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import { motion } from "motion/react";
import { navigationContent } from "../../content";

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg shadow-lg border-b border-white/20 dark:border-gray-800/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-logo">
            {navigationContent.logoText}
          </a>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {navigationContent.items.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all"
            aria-label={navigationContent.themeToggleAriaLabel}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-secondary" />
            ) : (
              <Moon className="w-5 h-5 text-secondary" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
            aria-label={navigationContent.menuToggleAriaLabel}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border border-white/20 dark:border-gray-800/50">
            {navigationContent.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
