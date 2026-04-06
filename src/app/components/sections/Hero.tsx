import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "../../../assets/profile.png";

export function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero__content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero__avatar">
            <div className="hero__avatar-frame">
              <img
                src={profileImage}
                alt="Srijan Mukherjee"
                className="hero__avatar-img"
              />
            </div>
          </div>

          <h1 className="hero__heading">Srijan Mukherjee</h1>

          <p className="hero__subtitle">Director of Engineering @ Visa</p>

          <p className="hero__description">
            Cloud Platform, Distributed Systems & AI | Scaling High-Throughput Infrastructure
          </p>

          <div className="hero__card glass-card">
            <p className="hero__card-text">
              Engineering leader with <strong>14 years</strong> of experience building mission-critical platforms that power{' '}
              <strong>high-throughput, globally distributed systems</strong>. Driving the future of <strong>AI-powered infrastructure</strong>.
            </p>
          </div>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get In Touch
            </a>
            <a
              href="/src/imports/resume-srijan-director-txt-mar2026.pdf"
              download
              className="btn btn--secondary"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="hero__socials">
            <a
              href="https://github.com/sinjar666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/sinjar666"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:srijmukh070@gmail.com"
              className="btn btn--icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="scroll-indicator">
            <div className="scroll-indicator__dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}