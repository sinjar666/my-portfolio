import { motion } from "motion/react";
import { Code, Rocket, Zap, Cloud, Brain, Settings } from "lucide-react";

export function Projects() {
  const projects = [
    {
      icon: Brain,
      title: "Agentic Workflow Builder",
      description:
        "Multi-tenant platform enabling teams to build complex enterprise workflows using natural language prompts. Innovative agentic loop aimed at reducing context rot with large conversation histories.",
      tags: ["Generative AI", "LLM", "Multi-tenant", "Natural Language"],
      gradientClass: "gradient-blue-cyan",
    },
    {
      icon: Code,
      title: "vPlay - AI Native IDE",
      description:
        "Cloud-based AI native in-browser IDE aimed at left-shifting developer setup inertia, with projected annual savings exceeding $1M.",
      tags: ["AI", "Cloud", "Developer Tools", "Productivity"],
      gradientClass: "gradient-purple-pink",
    },
    {
      icon: Zap,
      title: "Active-Active Message Queue",
      description:
        "Designed and implemented Active-Active Message Queue Architecture for distributed enterprise job execution engine, resulting in 60% improvement in p95 SLAs and 30% reduction in resource utilization.",
      tags: ["Distributed Systems", "Kafka", "Performance", "Architecture"],
      gradientClass: "gradient-orange-red",
    },
    {
      icon: Cloud,
      title: "Active-Active Dual Region Writer",
      description:
        "Innovated application architecture with RDMS based on conflict avoidance strategy for split brain coupled with in-built Disaster Recovery state machine.",
      tags: ["High Availability", "RDMS", "Disaster Recovery", "Resilience"],
      gradientClass: "gradient-green-emerald",
    },
    {
      icon: Settings,
      title: "Infrastructure Lifecycle Orchestration",
      description:
        "Optimizing Compute Infrastructure Lifecycle Management to achieve decommissioning SLAs of <6 hours for virtualized assets and sub-week SLAs for physical hardware.",
      tags: ["Cloud Platform", "Automation", "SLA Optimization"],
      gradientClass: "gradient-indigo-blue",
    },
    {
      icon: Rocket,
      title: "Flight Management Systems",
      description:
        "Wrote safety and mission critical software for UI and Display Proxy layers of Next Gen FMS powering cockpits of Boeing, Airbus, Dassault, and Gulfstream aircraft.",
      tags: ["Aerospace", "Mission Critical", "C++", "Safety Systems"],
      gradientClass: "gradient-violet-purple",
    },
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Featured Projects</h2>

          <div className="projects__grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="project-card glass-card"
              >
                <div className={`project-card__icon ${project.gradientClass}`}>
                  <project.icon size={20} />
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                <div className="projects__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="projects__publication glass-card"
          >
            <h3 className="section__title">Publication</h3>
            <p className="project-card__description mb-2">
              <strong>System and method of locking and ranking the resource for utilization in a distributed scheduling system</strong>
            </p>
            <p className="project-card__description mb-2">
              S. Mukherjee, D. RC, N. Kumar, and A. P | April 6, 2022
            </p>
            <a href="https://www.tdcommons.org/dpubs_series/5048" target="_blank" rel="noopener noreferrer" className="contact__cta-link">
              View Publication →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
