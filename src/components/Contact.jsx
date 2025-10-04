// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:alanlann575@gmail.com",
      label: "Email",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      text: "alanlann575@gmail.com",
      href: "mailto:alanlann575@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "+62 8963 3867 225",
      href: "tel:+6289633867225",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      text: "Bengkulu, Indonesia",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-6"
          >
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-sky-700">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">
              Work Together
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's discuss your project and
            create something amazing together. I'm always open to new
            opportunities and collaborations.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg border border-sky-100 p-8 lg:p-10"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-2">
              Send Me a Message
            </h3>
            <p className="text-slate-600 mb-8">
              I'll get back to you within 24 hours
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 bg-slate-50/50"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 bg-slate-50/50"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-all duration-300 resize-none bg-slate-50/50"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 border border-sky-100 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center space-x-4 p-4 rounded-xl bg-white/50 hover:bg-white transition-all duration-300 group border border-sky-100"
                    whileHover={{ x: 8 }}
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-sky-100 rounded-xl text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-slate-700 group-hover:text-slate-900 font-medium">
                      {item.text}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">
                Follow My Journey
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-sky-50 transition-all duration-300 group border border-slate-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex items-center justify-center w-10 h-10 bg-sky-100 rounded-lg text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-medium text-slate-700 group-hover:text-slate-900">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-green-100 shadow-lg"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="font-semibold text-slate-800">
                    Available for work
                  </h4>
                  <p className="text-sm text-slate-600">
                    Response time: within 24 hours
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-12 border-t border-sky-100"
        >
          <p className="text-slate-600 mb-6 text-lg">
            Have an urgent project? Let's schedule a call
          </p>
          <motion.a
            href="mailto:lantera@example.com"
            className="inline-flex items-center border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Schedule a Call
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
