import { motion } from "motion/react";
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react";
import { config } from "../../../config";
import { contactContent } from "../../../content";

export function Contact() {
  const contactIconMap = {
    mail: Mail,
    mapPin: MapPin,
  } as const;

  const socialIconMap = {
    linkedin: Linkedin,
    github: Github,
  } as const;

  return (
    <section id="contact" className="relative px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-primary">
            {contactContent.heading}
          </h2>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            {contactContent.intro}
          </p>

          <div className={`mb-12 ${config.showContactForm ? 'grid md:grid-cols-2 gap-8' : 'flex flex-col items-center'}`}>
            {/* Contact Information */}
            <div className={`space-y-4 ${!config.showContactForm ? 'w-full max-w-lg' : ''}`}>
              <h3 className="text-2xl font-bold mb-6 text-center">{contactContent.contactInformationHeading}</h3>
              {contactContent.contactInfo.map((item, index) => {
                const Icon = contactIconMap[item.icon];

                return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 hover:shadow-lg transition-all"
                >
                  <motion.div
                    className="p-3 rounded-xl icon-bg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-medium text-gray-900 dark:text-gray-100 hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-900 dark:text-gray-100">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              )})}

              {/* Social Links */}
              <div className={`mt-12 ${!config.showContactForm ? 'w-full max-w-md flex flex-col' : ''}`}>
                <h3 className={`text-2xl font-bold mb-6 text-center`}>
                  {contactContent.socialSectionHeading}
                </h3>
                {/* Align Center */}
                <div className={`flex gap-4 justify-center`}>
                  {contactContent.socialLinks.map((social, index) => {
                    const Icon = socialIconMap[social.icon];

                    return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`${config.showContactForm ? 'flex-1' : ''} p-4 rounded-2xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg hover:scale-105 transition-all text-center`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2" />
                      <p className="font-medium">{social.label}</p>
                    </motion.a>
                  )})}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            {config.showContactForm && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-3xl bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-xl"
              >
                <h3 className="text-2xl font-bold mb-6">{contactContent.form.heading}</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      {contactContent.form.nameLabel}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder={contactContent.form.namePlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      {contactContent.form.emailLabel}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                      placeholder={contactContent.form.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      {contactContent.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-800/50 border border-white/20 dark:border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                      placeholder={contactContent.form.messagePlaceholder}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-xl btn-primary font-medium hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    {contactContent.form.submitLabel}
                  </button>
                </form>
              </motion.div>
            )}
          </div>

          {/* Additional CTA */}
          <div className="p-8 rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 text-center">
            <h3 className="text-2xl font-bold mb-4">{contactContent.cta.heading}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              {contactContent.cta.description}
            </p>
            <a
              href={contactContent.cta.buttonHref}
              target="_blank"
              className="inline-block px-8 py-3 rounded-full btn-primary font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              {contactContent.cta.buttonLabel}
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
