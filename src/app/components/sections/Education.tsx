import { motion } from "motion/react";
import { Calendar, GraduationCap, MapPin } from "lucide-react";
import { educationContent } from "../../../content";

export function Education() {
  return (
    <section id="education" className="relative px-6 py-8 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
            {educationContent.heading}
          </h2>

          <div className="grid gap-6">
            {educationContent.entries.map((entry, index) => (
              <motion.article
                key={`${entry.program}-${entry.institution}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card glass-card-interactive p-6"
              >
                <div className="mb-2 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-secondary" />
                  <h3 className="text-2xl font-bold">{entry.program}</h3>
                </div>

                <p className="text-lg text-secondary font-medium mb-3">{entry.institution}</p>

                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {entry.period}
                  </span>
                  <span className="hidden sm:inline">•</span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" />
                    {entry.location}
                  </span>
                </div>

                <p className="text-foreground mb-4">{entry.description}</p>

                <ul className="space-y-2 text-left">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight} className="text-foreground flex items-start gap-2">
                      <span className="text-secondary mt-1.5">▹</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}