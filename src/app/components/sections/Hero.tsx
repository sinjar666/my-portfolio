import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "../../../assets/profile.png";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
              <img 
                src={profileImage} 
                alt="Srijan Mukherjee" 
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Srijan Mukherjee
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            Director of Engineering @ Visa
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Cloud Platform, Distributed Systems & AI | Scaling High-Throughput Infrastructure
          </p>

          {/* Glassmorphic Card */}
          <div className="inline-block p-6 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-xl mb-8">
            <p className="text-base text-gray-700 dark:text-gray-300 max-w-2xl">
              Engineering leader with <span className="font-semibold text-indigo-600 dark:text-indigo-400">14 years</span> of experience building mission-critical platforms that power{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">high-throughput, globally distributed systems</span>. 
              Driving the future of <span className="font-semibold text-pink-600 dark:text-pink-400">AI-powered infrastructure</span>.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Get In Touch
            </a>
            <a
              href="/src/imports/resume-srijan-director-txt-mar2026.pdf"
              download
              className="px-8 py-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 font-medium hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/sinjar666"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sinjar666"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:srijmukh070@gmail.com"
              className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}