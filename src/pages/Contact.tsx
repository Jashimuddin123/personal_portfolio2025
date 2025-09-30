import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Banner from '../components/Banner';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "adnanmahmud3394@gmail.com",
      link: "mailto:adnanmahmud3394@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "WhatsApp",
      value: "+880 1820 339433",
      link: "https://wa.me/8801820339433",
      color: "green"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Rangunia, Chittagong, Bangladesh",
      link: null,
      color: "red"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      url: "#",
      color: "gray"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn", 
      url: "#",
      color: "blue"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      url: "mailto:adnanmahmud3394@gmail.com",
      color: "red"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: "WhatsApp",
      url: "https://wa.me/8801820339433",
      color: "green"
    }
  ];

  return (
    <div className="min-h-screen">
      <Banner
        title="Get In Touch"
        description="Ready to start your project? Let's discuss how I can help bring your ideas to life. Whether you need a custom web application, Shopify store, or want to discuss a unique idea, I'd love to hear from you."
        image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        imageAlt="Contact and get in touch"
      />

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    I'm always excited to take on new challenges and collaborate on innovative projects. 
                    Whether you need a custom web application, Shopify store, or want to discuss a unique idea, 
                    I'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className={`w-14 h-14 bg-${info.color}-100 text-${info.color}-600 rounded-xl flex items-center justify-center`}>
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{info.title}</h4>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className={`text-${info.color}-600 hover:text-${info.color}-700 transition-colors duration-300 text-lg`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-lg">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="pt-8 border-t border-gray-200"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Follow Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-14 h-14 bg-${social.color}-100 text-${social.color}-600 rounded-xl flex items-center justify-center hover:bg-${social.color}-200 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        title={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 bg-white"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 bg-white"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 bg-white"
                      placeholder="Project discussion"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-blue-300 resize-none bg-white"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-red-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <div className="flex items-center text-green-800">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span>Thank you! Your message has been sent successfully.</span>
                      </div>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Contact</h2>
              <p className="text-gray-600">Choose your preferred way to get in touch</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Email Me",
                  description: "Send a detailed message",
                  icon: <Mail className="w-8 h-8" />,
                  link: "mailto:jashim.yourmail@example.com",
                  color: "blue"
                },
                {
                  title: "WhatsApp",
                  description: "Quick chat and discussion",
                  icon: <MessageCircle className="w-8 h-8" />,
                  link: "#",
                  color: "green"
                },
                {
                  title: "LinkedIn",
                  description: "Professional networking",
                  icon: <Linkedin className="w-8 h-8" />,
                  link: "#",
                  color: "blue"
                }
              ].map((option, index) => (
                <motion.a
                  key={index}
                  href={option.link}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="block bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-${option.color}-100 text-${option.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600">{option.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;