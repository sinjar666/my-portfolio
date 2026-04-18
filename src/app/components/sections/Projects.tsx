import { motion } from "motion/react";
import { Code, Rocket, Zap, Cloud, Brain, Settings } from "lucide-react";
import { projectsContent } from "../../../content";

export function Projects() {
  const projectIconMap = {
    brain: Brain,
    code: Code,
    zap: Zap,
    cloud: Cloud,
    settings: Settings,
    rocket: Rocket,
  } as const;

  return (
    <section id="projects" className="relative px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-primary">
            {projectsContent.heading}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsContent.items.map((project, index) => {
              const Icon = projectIconMap[project.icon];

              return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-card glass-card-interactive p-6 hover:scale-[1.03]"
              >
                {/* Icon with gradient background */}
                <motion.div
                  className={`inline-flex p-3 rounded-2xl ${project.gradient} mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full chip border border-white/20 dark:border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )})}
          </div>

          {/* Publication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card-soft mt-12 p-8"
          >
            <h3 className="text-2xl font-bold mb-4">{projectsContent.publication.heading}</h3>
            <p className="text-foreground mb-2">
              <strong>{projectsContent.publication.title}</strong>
            </p>
            <p className="text-muted-foreground mb-2">
              {projectsContent.publication.authorsAndDate}
            </p>
            <a
              href={projectsContent.publication.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              {projectsContent.publication.link.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
