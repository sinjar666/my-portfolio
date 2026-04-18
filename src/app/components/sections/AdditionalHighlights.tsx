import { motion } from "motion/react";

export function AdditionalHighlights() {
    return (
        <section id="highlights" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
            <div className="mt-12 grid md:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="p-6 rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center"
                >
                    <div className="text-4xl font-bold text-secondary mb-2">14+</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Years of Experience</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-6 rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center"
                >
                    <div className="text-4xl font-bold text-secondary mb-2">18</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Team Members Led</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="p-6 rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center"
                >
                    <div className="text-4xl font-bold text-secondary mb-2">$200M+</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Annual Cost Savings</p>
                </motion.div>
            </div>
        </div>
        </section>
    );
}
