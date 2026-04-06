import { motion } from "motion/react";
import {
  Brain,
  Cloud,
  Code,
  Database,
  Globe,
  Layout,
  Cpu,
  Users,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Users,
      title: "Leadership & Management",
      skills: [
        "Engineering Leadership",
        "Team Collaboration",
        "People Management",
        "Project Management",
        "Mentorship",
        "Strategic Thinking",
        "Conflict Resolution",
      ],
      colorClass: "gradient-blue-cyan",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        "Generative AI",
        "LLM",
        "RAG",
        "Prompt Engineering",
        "Knowledge Graphs",
        "Agentic Workflows",
      ],
      colorClass: "gradient-purple-pink",
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      skills: [
        "Distributed Computing",
        "Virtualization",
        "Kubernetes",
        "Kafka",
        "ElasticSearch",
        "Hazelcast",
      ],
      colorClass: "gradient-green-emerald",
    },
    {
      icon: Code,
      title: "Backend Development",
      skills: [
        "NodeJS",
        "Java",
        "Spring",
        "GoLang",
        "C++",
        "C# .NET",
        "Python",
        "Multithreading",
      ],
      colorClass: "gradient-orange-red",
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        "Angular",
        "React",
        "TypeScript",
        "HTML/CSS",
        "Redux",
        "RxJS",
        "Micro-frontends",
      ],
      colorClass: "gradient-indigo-blue",
    },
    {
      icon: Database,
      title: "Data & Storage",
      skills: [
        "MySQL",
        "MongoDB",
        "ElasticSearch",
        "Redis",
        "Data Architecture",
      ],
      colorClass: "gradient-violet-purple",
    },
    {
      icon: Globe,
      title: "Protocols & APIs",
      skills: [
        "HTTP/REST",
        "HTTP/2 SPDY",
        "Server-Sent Events",
        "WebSockets",
        "gRPC",
      ],
      colorClass: "gradient-pink-rose",
    },
    {
      icon: Cpu,
      title: "Systems & Tools",
      skills: [
        "Linux",
        "Qt",
        "Erlang",
        "Software Architecture",
        "Design Patterns",
      ],
      colorClass: "gradient-teal-cyan",
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Skills & Expertise</h2>

          <div className="skills__grid">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="skill-card glass-card"
              >
                <div className="skill-card__top">
                  <div className={`skill-card__icon ${category.colorClass}`}>
                    <category.icon size={20} />
                  </div>
                  <h3 className="skill-card__title">{category.title}</h3>
                </div>

                <div className="skills__chips">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="skills__stats">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="skills__stat gradient-blue-cyan"
            >
              <div className="project-card__title">14+</div>
              <p className="skill-card__text">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="skills__stat gradient-purple-pink"
            >
              <div className="project-card__title">18</div>
              <p className="skill-card__text">Team Members Led</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="skills__stat gradient-green-emerald"
            >
              <div className="project-card__title">$200M+</div>
              <p className="skill-card__text">Annual Cost Savings</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
