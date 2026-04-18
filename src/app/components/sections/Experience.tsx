import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { experienceContent } from "../../../content";

export function Experience() {
  const experiences = experienceContent.entries;

  return (
    <section id="experience" className="relative px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
            {experienceContent.heading}
          </h2>

          <div className="relative space-y-8 md:hidden">
            <div className="absolute bottom-4 left-2 top-4 w-px timeline-line" />
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.title}-mobile`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative pl-8"
              >
                <div className="absolute left-2 top-5 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 border-white dark:border-gray-900 timeline-dot" />
                <div className="absolute left-2 top-5 -translate-y-1/2 h-px w-4 timeline-line" />
                <div className="mb-3 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-secondary backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/30">
                  {exp.period}
                </div>
                <div className="glass-card p-6">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="mt-1 rounded-xl bg-white/10 p-2.5 dark:bg-gray-800/40">
                      <Briefcase className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold leading-tight">{exp.title}</h3>
                      <p className="mt-2 text-lg font-medium text-secondary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="mb-5 flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3 text-left">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-foreground">
                        <span className="mt-1.5 text-secondary">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:ml-auto md:pl-8 md:text-left"
                }`}
              >
                <div
                  className={`absolute top-6 z-10 h-4 w-4 rounded-full border-4 border-white dark:border-gray-900 timeline-dot ${
                    index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                  }`}
                />

                <motion.div
                  className="glass-card glass-card-interactive p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`mb-2 flex items-center gap-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <Briefcase className="w-5 h-5 text-secondary" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-lg text-secondary font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className={`mb-4 flex items-center gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-foreground flex items-start gap-2">
                        <span className="text-secondary mt-1.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
