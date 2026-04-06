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
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Experience</h2>

          <div className="experience__timeline">
            <div className="experience__line" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`timeline-entry ${index % 2 === 0 ? "timeline-entry--left" : "timeline-entry--right"}`}
              >
                <div className="timeline-dot" />

                <div className="experience__card glass-card">
                  <div className="experience__header">
                    <Briefcase size={20} />
                    <h3>{exp.title}</h3>
                  </div>
                  <p className="project-card__title">{exp.company}</p>
                  <div className="experience__meta">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                  <div className="experience__highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <p key={idx}>{highlight}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
