import { motion } from "motion/react";
import { aboutContent } from "../../../content";

export function About() {
  return (
    <section id="about" className="relative px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
            {aboutContent.heading}
          </h2>

          <div className="glass-card p-8 shadow-xl mb-12">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg text-foreground leading-relaxed ${
                  index !== aboutContent.paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
