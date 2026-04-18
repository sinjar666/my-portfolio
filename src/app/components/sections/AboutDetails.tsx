import { motion } from "motion/react";
import { Target, Users, Zap } from "lucide-react";
import { aboutDetailsContent } from "../../../content";

const highlightIconMap = {
    target: Target,
    users: Users,
    zap: Zap,
} as const;

export function AboutDetails() {
    return (
        <>
            <section id="about-details" className="relative px-6 py-16 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="glass-card-soft p-8 mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-center">{aboutDetailsContent.leadershipPhilosophy.heading}</h3>
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
                            {aboutDetailsContent.leadershipPhilosophy.items.map((item) => (
                                <motion.div
                                    key={item.text}
                                    className="text-center"
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 },
                                    }}
                                >
                                    <div className="text-4xl mb-3">{item.emoji}</div>
                                    <p className="text-foreground">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {aboutDetailsContent.highlights.map((item, index) => {
                            const Icon = highlightIconMap[item.icon];

                            return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="glass-card glass-card-interactive p-6 hover:scale-[1.03]"
                            >
                                <Icon className="w-10 h-10 text-secondary mb-4" />
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-muted-foreground">{item.description}</p>
                            </motion.div>
                        )})}
                    </div>

                    <div className="glass-card mt-12 p-8 shadow-xl">
                        <h3 className="text-2xl font-bold mb-6 text-center">{aboutDetailsContent.areasOfInterest.heading}</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            {aboutDetailsContent.areasOfInterest.items.map((item) => (
                                <div key={item} className="interest-card">
                                    <p className="font-medium text-center">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
