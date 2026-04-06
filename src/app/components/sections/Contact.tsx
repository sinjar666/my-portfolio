import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "srijmukh070@gmail.com",
      href: "mailto:srijmukh070@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8660685187",
      href: "tel:+918660685187",
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
      colorClass: "gradient-indigo-blue",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/sinjar666",
      colorClass: "gradient-gray-black",
    },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section__title">Get In Touch</h2>

          <p className="contact__text contact__intro">
            Open to conversations around platform engineering, cloud infrastructure, and AI-driven systems.
          </p>

          <div className="contact__grid">
            <div className="contact-card glass-card">
              <h3 className="contact-card__title">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="contact__info-card"
                >
                  <div className="contact__icon gradient-indigo-blue">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="contact__info-label">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="contact__info-value">
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__info-value">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}

              <div className="contact__social-section">
                <h4 className="contact__section-title">Connect on Social</h4>
                <div className="contact__socials">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`contact__social-button ${social.colorClass}`}
                    >
                      <social.icon size={24} />
                      <p>{social.label}</p>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="contact-card glass-card contact__form"
            >
              <h3 className="contact-card__title">Send a Message</h3>
              <form>
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="contact__input"
                    placeholder="Your name"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="contact__input"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="contact__textarea"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="contact__submit contact__submit-button">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          <div className="contact__cta glass-card">
            <h3 className="contact__cta-title">Looking for Leadership Talent?</h3>
            <p className="contact__cta-text">
              I'm passionate about building high-performing teams, driving technical excellence, and delivering business impact through scalable platform engineering and AI-powered infrastructure.
            </p>
            <a href="mailto:srijmukh070@gmail.com" className="contact__cta-link">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
