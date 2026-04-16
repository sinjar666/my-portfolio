import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { config } from "../../../config";

interface ContactProps {
  isMobile?: boolean;
}

export function Contact({ isMobile }: ContactProps) {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srijmukh070@gmail.com",
      href: "mailto:srijmukh070@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sinjar666",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sinjar666",
      color: "from-gray-700 to-gray-900",
    },
  ];

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={isMobile ? undefined : { opacity: 0, y: 30 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={isMobile ? undefined : { duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Open to conversations around platform engineering, cloud infrastructure, and AI-driven systems.
          </p>

          <div className={`mb-12 ${config.showContactForm ? 'grid md:grid-cols-2 gap-8' : 'flex flex-col items-center'}`}>
            {/* Contact Information */}
            <div className={`space-y-4 ${!config.showContactForm ? 'w-full max-w-lg' : ''}`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={isMobile ? undefined : { opacity: 0, x: -20 }}
                  whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={isMobile ? undefined : { duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 md:backdrop-blur-xl border border-white/20 dark:border-gray-800/50 hover:shadow-lg transition-all"
                >
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500"
                    whileHover={isMobile ? undefined : { scale: 1.1, rotate: 5 }}
                    transition={isMobile ? undefined : { duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900 dark:text-gray-100">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* Social Links */}
              <div className={`mt-12 ${!config.showContactForm ? 'w-full max-w-md flex flex-col' : ''}`}>
                <h3 className={`text-2xl font-bold mb-6`}>
                  Connect on Social
                </h3>
                <div className={`flex gap-4`}>
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={isMobile ? undefined : { opacity: 0, y: 20 }}
                      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={isMobile ? undefined : { duration: 0.6, delay: index * 0.1 }}
                      className={`${config.showContactForm ? 'flex-1' : ''} p-4 rounded-2xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg md:hover:scale-105 transition-all text-center`}
                    >
                      <social.icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="font-medium">{social.label}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {config.showContactForm && (
              <motion.div
                initial={isMobile ? undefined : { opacity: 0, x: 20 }}
                whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={isMobile ? undefined : { duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 md:backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </motion.div>
            )}
          </div>

          {/* Additional CTA */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/5 dark:via-purple-500/5 dark:to-pink-500/5 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center">
            <h3 className="text-2xl font-bold mb-4">Want to buy me a coffee?</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm passionate about building high-performing teams, driving technical excellence, and delivering
              business impact through scalable platform engineering and AI-powered infrastructure.
            </p>
            <a
              href="https://calendly.com/srijmukh070"
              target="_blank"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Let's Talk
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
