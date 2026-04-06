import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

interface NavigationProps {
  scrolled: boolean;
}

export function Navigation({ scrolled }: NavigationProps) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--transparent"}`}>
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          SM
        </a>

        <div className="navbar__links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </div>

        <div className="navbar__actions">
          <button
            onClick={toggleTheme}
            className="navbar__button"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="navbar__button navbar__mobile-trigger"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div className={`navbar__mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="navbar__mobile-link"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
