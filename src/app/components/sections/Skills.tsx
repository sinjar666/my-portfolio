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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-purple-500 to-pink-500",
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
      color: "from-green-500 to-emerald-500",
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
      color: "from-orange-500 to-red-500",
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
      color: "from-indigo-500 to-blue-500",
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
      color: "from-violet-500 to-purple-500",
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
      color: "from-pink-500 to-rose-500",
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
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="skills" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-2 rounded-xl bg-gradient-to-r ${category.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <category.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Highlights */}
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
        </motion.div>
      </div>
    </section>
  );
}
