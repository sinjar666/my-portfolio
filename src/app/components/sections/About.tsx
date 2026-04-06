import { motion } from "motion/react";
import { Target, Users, Zap } from "lucide-react";

export function About() {
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

  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">About Me</h2>

          <div className="glass-card about__card card-padding">
            <p className="about__text mb-6">
              AI is redefining how software is built. I work on the systems that make that future possible.
              I build and scale mission-critical platforms that power high-throughput, globally distributed systems.
            </p>
            <p className="about__text mb-6">
              Currently, I lead engineering for Visa's private cloud platform, driving the design and evolution of
              infrastructure that underpins secure, resilient, and scalable financial systems. My focus is on
              transforming infrastructure into a product—enabling developer velocity, operational excellence,
              and cost efficiency at scale.
            </p>
            <p className="about__text">
              Over the past decade, I've operated across the stack—from low-level systems in aerospace software
              at Honeywell to cloud-native platforms in fintech—giving me a deep appreciation for reliability,
              performance, and real-world constraints.
            </p>
          </div>

          <div className="gradient-panel about__philosophy">
            <h3 className="section__title">Leadership Philosophy</h3>
            <div className="about__features">
              <div className="about__feature about__feature-card">
                <div className="about__feature-icon">🏗️</div>
                <p className="about__feature-text">
                  Build systems that scale without fragility
                </p>
              </div>
              <div className="about__feature about__feature-card">
                <div className="about__feature-icon">👥</div>
                <p className="about__feature-text">
                  Build teams that operate with ownership and clarity
                </p>
              </div>
              <div className="about__feature about__feature-card">
                <div className="about__feature-icon">🤖</div>
                <p className="about__feature-text">
                  Use automation and AI to eliminate operational toil
                </p>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card about__highlight-card about__highlight"
              >
                <item.icon size={40} className="project-card__icon gradient-indigo-blue" />
                <h4 className="project-card__title">{item.title}</h4>
                <p className="about__feature-text">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="about__interests">
            <div className="about__interest-card about__interest gradient-blue-cyan">
              <p className="about__interest-text">AI-assisted platform engineering</p>
            </div>
            <div className="about__interest-card about__interest gradient-purple-pink">
              <p className="about__interest-text">Autonomous infrastructure & self-healing systems</p>
            </div>
            <div className="about__interest-card about__interest gradient-pink-rose">
              <p className="about__interest-text">Developer experience as a competitive advantage</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
