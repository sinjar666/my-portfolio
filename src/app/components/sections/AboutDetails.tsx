import { motion } from "motion/react";
import { Target, Users, Zap } from "lucide-react";

const highlights = [
    {
        icon: Target,
        title: "Engineering Maturity",
        description: ">15% developer productivity using AI across multiple orgs",
    },
    {
        icon: Users,
        title: "Manager Effectiveness",
        description: "100% effectiveness score from FY-23 to FY-26",
    },
    {
        icon: Zap,
        title: "Exponential Growth",
        description: ">10M job runs in FY-23-24 with <1.5% churn rate",
    },
];

export function AboutDetails() {
    return (
        <>
            <section id="about-details" className="relative py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-500/5 dark:to-purple-500/5 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-center">Leadership Philosophy</h3>
                        <motion.div
                            className="grid md:grid-cols-3 gap-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.2,
                                    },
                                },
                            }}
                        >
                            <motion.div
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <div className="text-4xl mb-3">🏗️</div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Build systems that scale without fragility
                                </p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <div className="text-4xl mb-3">👥</div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Build teams that operate with ownership and clarity
                                </p>
                            </motion.div>
                            <motion.div
                                className="text-center"
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8 },
                                    visible: { opacity: 1, scale: 1 },
                                }}
                            >
                                <div className="text-4xl mb-3">🤖</div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Use automation and AI to eliminate operational toil
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="p-6 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                            >
                                <item.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-center">Areas of Interest</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/20">
                                <p className="font-medium text-center">AI-assisted platform engineering</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/20">
                                <p className="font-medium text-center">Autonomous infrastructure & self-healing systems</p>
                            </div>
                            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/20">
                                <p className="font-medium text-center">Developer experience as a competitive advantage</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
