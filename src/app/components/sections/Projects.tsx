import { motion } from "motion/react";
import { Code, Rocket, Zap, Cloud, Brain, Settings } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: Brain,
      title: "Agentic Workflow Builder",
      description: "Multi-tenant platform enabling teams to build complex enterprise workflows using natural language prompts. Innovative agentic loop aimed at reducing context rot with large conversation histories.",
      tags: ["Generative AI", "LLM", "Multi-tenant", "Natural Language"],
      gradient: "icon-color-6",
    },
    {
      icon: Code,
      title: "vPlay - AI Native IDE",
      description: "Cloud-based AI native in-browser IDE aimed at left-shifting developer setup inertia, with projected annual savings exceeding $1M.",
      tags: ["AI", "Cloud", "Developer Tools", "Productivity"],
      gradient: "icon-color-2",
    },
    {
      icon: Zap,
      title: "Active-Active Message Queue",
      description: "Designed and implemented Active-Active Message Queue Architecture for distributed enterprise job execution engine, resulting in 60% improvement in p95 SLAs and 30% reduction in resource utilization.",
      tags: ["Distributed Systems", "Kafka", "Performance", "Architecture"],
      gradient: "icon-color-1",
    },
    {
      icon: Cloud,
      title: "Active-Active Dual Region Writer",
      description: "Innovated application architecture with RDMS based on conflict avoidance strategy for split brain coupled with in-built Disaster Recovery state machine.",
      tags: ["High Availability", "RDMS", "Disaster Recovery", "Resilience"],
      gradient: "icon-color-3",
    },
    {
      icon: Settings,
      title: "Infrastructure Lifecycle Orchestration",
      description: "Optimizing Compute Infrastructure Lifecycle Management to achieve decommissioning SLAs of <6 hours for virtualized assets and sub-week SLAs for physical hardware.",
      tags: ["Cloud Platform", "Automation", "SLA Optimization"],
      gradient: "icon-color-8",
    },
    {
      icon: Rocket,
      title: "Flight Management Systems",
      description: "Wrote safety and mission critical software for UI and Display Proxy layers of Next Gen FMS powering cockpits of Boeing, Airbus, Dassault, and Gulfstream aircraft.",
      tags: ["Aerospace", "Mission Critical", "C++", "Safety Systems"],
      gradient: "icon-color-7",
    },
  ];

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
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                {/* Icon with gradient background */}
                <motion.div
                  className={`inline-flex p-3 rounded-2xl ${project.gradient} mb-4`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <project.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary dark:group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Publication */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 p-8 rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/50"
          >
            <h3 className="text-2xl font-bold mb-4">Publication</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>System and method of locking and ranking the resource for utilization in a distributed scheduling system</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              S. Mukherjee, D. RC, N. Kumar, and A. P | April 6, 2022
            </p>
            <a
              href="https://www.tdcommons.org/dpubs_series/5048"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:underline"
            >
              View Publication →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
