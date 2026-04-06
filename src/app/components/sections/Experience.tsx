import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Director, Software Development",
      company: "VISA Cloud Platform",
      period: "September 2023 – Present",
      location: "Bengaluru, IN",
      highlights: [
        "Leading 18-member org (2 Managers + 16 Engineers) with >80% YoY retention rate",
        "Portfolio of 18 microservices, frontends, and 5 libraries delivering ~$200M annual cost savings",
        "Uplifted Gen AI competency resulting in 30% increase in developer productivity",
        "Active mentor in VISA Bengaluru Mentorship program on Technology, Architecture & Leadership",
      ],
    },
    {
      title: "Senior Engineering Manager",
      company: "VISA Cloud Platform IaaS",
      period: "August 2021 – August 2023",
      location: "Bengaluru, IN",
      highlights: [
        "Led ~11 full-stack engineers driving design for 10+ services automating cloud infrastructure lifecycle",
        "Boosted adoption of Job Execution Engine by 400% from FY-21 to FY-23",
        "Reduced hotfix frequency by 45% achieving >98% success rates and >95% SLA adherence",
        "Co-authored Intellectual Property with the team",
      ],
    },
    {
      title: "Staff Full Stack Developer",
      company: "VISA Cloud Platform IaaS",
      period: "January 2019 – July 2021",
      location: "Bengaluru, IN",
      highlights: [
        "Key owner of Core Platform for CloudView portal",
        "Led VISA's hybrid cloud initiative focusing on ESB and Enterprise Gateway Automation",
        "Introduced HTTP/2 'SPDY' streams and Server-Sent Events as alternatives to REST",
        "Mentored junior team members in enterprise coding practices",
      ],
    },
    {
      title: "Senior SW Developer",
      company: "VISA Cloud Platform UI",
      period: "February 2017 – January 2019",
      location: "Bengaluru, IN",
      highlights: [
        "Developed essential features for self-service cloud provisioning with Kubernetes",
        "Enforced enterprise design patterns including Redux and RxJS",
        "Designed enterprise rapid application framework using Node.js, Express, and TypeScript",
        "Created in-house SPA agnostic micro-frontend framework",
      ],
    },
    {
      title: "Project Trainee ... Senior Engineer",
      company: "Honeywell Technology Solutions",
      period: "December 2012 – January 2017",
      location: "Bengaluru, IN",
      highlights: [
        "Wrote safety and mission critical software for Next Gen Flight Management Systems",
        "Software powers cockpits of major aircraft from Boeing, Airbus, Dassault, and Gulfstream",
        "Developed software tools for productivity in Avionics Software",
        "Built asynchronous network services in C# .NET for Build Server infrastructure",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 transform md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto md:text-left"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className={`absolute top-6 ${index % 2 === 0 ? "md:right-0" : "left-0 md:left-0"} md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border-4 border-white dark:border-gray-900 z-10`} style={{ left: index % 2 === 0 ? 'auto' : '-8px', right: index % 2 === 0 ? '-8px' : 'auto' }} />

                <div className="ml-8 md:ml-0 p-6 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-2 mb-2 justify-start md:justify-inherit">
                    <Briefcase className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4 justify-start md:justify-inherit">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start gap-2">
                        <span className="text-indigo-600 dark:text-indigo-400 mt-1.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
