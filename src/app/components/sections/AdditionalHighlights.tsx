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
                    className="p-6 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center"
                >
                    <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">14+</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Years of Experience</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="p-6 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-500/5 dark:to-pink-500/5 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center"
                >
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">18</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Team Members Led</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="p-6 rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-500/5 dark:to-emerald-500/5 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center"
                >
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">$200M+</div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">Annual Cost Savings</p>
                </motion.div>
            </div>
        </div>
        </section>
    );
}
