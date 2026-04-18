import { motion } from "motion/react";
import { AboutDetails } from "./AboutDetails";

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
            About Me
          </h2>

          <div className="p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-xl mb-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              AI is redefining how software is built. I work on the systems that make that future possible.
              I build and scale mission-critical platforms that power high-throughput, globally distributed systems.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Currently, I lead engineering for Visa's private cloud platform, driving the design and evolution of
              infrastructure that underpins secure, resilient, and scalable financial systems. My focus is on
              transforming infrastructure into a product—enabling developer velocity, operational excellence,
              and cost efficiency at scale.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Over the past decade, I've operated across the stack—from low-level systems in aerospace software
              at Honeywell to cloud-native platforms in fintech—giving me a deep appreciation for reliability,
              performance, and real-world constraints.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
