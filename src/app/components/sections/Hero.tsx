import { motion } from "motion/react";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../../../assets/profile.png";
import { config } from "../../../config";
import { heroContent } from "../../../content";

type HeroProps = {
  hasScrolled: boolean;
};

export function Hero({ hasScrolled }: HeroProps) {
  const socialIconMap = {
    github: Github,
    linkedin: Linkedin,
    mail: Mail,
  } as const;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8 inline-block"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-40 h-40 rounded-full p-1 shadow-2xl hero-ring">
              <img
                src={profileImage}
                alt={heroContent.profileImageAlt}
                className="w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-900"
              />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
            {heroContent.name}
          </h1>

          <p className="text-xl md:text-2xl text-foreground mb-4">
            {heroContent.role}
          </p>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            {heroContent.summary}
          </p>

          {/* Glassmorphic Card */}
          <div className="inline-block p-6 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-xl mb-8">
            <p className="text-base text-foreground max-w-2xl">
              {heroContent.introCard.segments.map((segment, index) => (
                segment.emphasis ? (
                  <span key={index} className="semibold-accent">
                    {segment.text}
                  </span>
                ) : (
                  <span key={index}>{segment.text}</span>
                )
              ))}
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.a
              href={heroContent.cta.primary.href}
              className="px-8 py-3 rounded-full btn-primary font-medium hover:shadow-lg hover:scale-105 transition-all"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              {heroContent.cta.primary.label}
            </motion.a>
            <motion.a
              href={config.resumeUrl}
              download
              className="px-8 py-3 rounded-full btn-secondary backdrop-blur-sm border border-white/20 dark:border-gray-700/50 font-medium hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
            >
              <Download className="w-4 h-4" />
              {heroContent.cta.resume.label}
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {heroContent.socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];

              return (
                <motion.a
                  key={social.ariaLabel}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full btn-secondary backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all hover:scale-110"
                  aria-label={social.ariaLabel}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator (full-width glass footer) */}
        <motion.div
          className="pointer-events-none fixed bottom-0 left-0 w-full z-10"
          initial={{ opacity: 0, y: 16 }}
          animate={hasScrolled ? { opacity: 0, y: 16 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          aria-hidden="true"
        >
          <div className="w-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-t border-white/10 dark:border-gray-800/50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-center">
              <motion.div
                className="hidden md:flex flex-col items-center gap-2"
                animate={hasScrolled ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-10 rounded-full bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm border-2 border-secondary flex items-start justify-center p-2 shadow-sm">
                  <motion.div
                    className="w-1 h-2 bg-secondary rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                <motion.span
                  className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  {heroContent.scrollIndicator.desktopLabel ?? "Scroll down"}
                </motion.span>
              </motion.div>

              <motion.div
                className="flex md:hidden flex-col items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground"
                animate={hasScrolled ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="inline-flex flex-col items-center gap-2 px-3 py-2 rounded-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm border border-white/20 dark:border-gray-800/50 shadow-sm">
                  <span>{heroContent.scrollIndicator.mobileLabel}</span>

                  <motion.div
                    className="flex flex-col items-center"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDown className="h-4 w-4" />
                    <ArrowDown className="-mt-1 h-4 w-4" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
