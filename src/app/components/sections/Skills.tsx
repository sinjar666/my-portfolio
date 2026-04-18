import { motion } from "motion/react";
import { 
  Brain, 
  Cloud, 
  Code, 
  Database, 
  Globe, 
  Layout, 
  Cpu,
  Users
} from "lucide-react";
import { skillsContent } from "../../../content";

export function Skills() {
  const skillIconMap = {
    users: Users,
    brain: Brain,
    cloud: Cloud,
    code: Code,
    layout: Layout,
    database: Database,
    globe: Globe,
    cpu: Cpu,
  } as const;

  return (
    <section id="skills" className="relative px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
            {skillsContent.heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillsContent.categories.map((category, index) => {
              const Icon = skillIconMap[category.icon];

              return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card glass-card-interactive p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                  className={`p-2 rounded-xl ${category.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full btn-primary hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )})}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
