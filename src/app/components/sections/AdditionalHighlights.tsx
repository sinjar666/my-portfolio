import { motion } from "motion/react";
import { additionalHighlightsContent } from "../../../content";

export function AdditionalHighlights() {
    return (
        <section id="highlights" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                {additionalHighlightsContent.stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                        className="glass-card-soft glass-card-interactive p-6 text-center"
                    >
                        <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                        <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
        </section>
    );
}
