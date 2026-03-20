import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Button } from '../Button';
import { toast } from 'sonner';

interface ContactSectionProps {
  preview?: boolean;
}

export function ContactSection({ preview = false }: ContactSectionProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'rashmitharuka2004@gmail.com',
      link: 'mailto:rashmitharuka2004@gmail.com',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      content: 'rashmitharuka2004-hash',
      link: 'https://github.com/rashmitharuka2004-hash',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      label: 'GitHub',
      link: 'https://github.com/rashmitharuka2004-hash',
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/tharuka-jayaweera-82b057288',
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      link: 'https://www.instagram.com/_tharukaa_?igsh=MWNpN3Bqa2Q4aTFrcA%3D%3D&utm_source=qr',
    },
  ];

  return (
    <section
      id="contact"
      className={`${preview ? 'py-20' : 'min-h-screen py-20 pt-24'} px-4 md:px-8 lg:px-16 ${
        preview ? 'bg-white dark:bg-gray-900' : 'bg-gray-50 dark:bg-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={preview ? 3 : 5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {preview ? (
                <Button type="button" onClick={() => navigate('/contact')} className="w-full">
                  View Full Contact Page
                </Button>
              ) : (
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-gray-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="text-blue-600 dark:text-blue-400 text-2xl mt-1 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {info.title}
                      </p>
                      <p className="text-gray-900 dark:text-white break-all">
                        {info.content}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-gray-900 dark:text-white mb-4">
                  Follow Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
