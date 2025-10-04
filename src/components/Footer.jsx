import { useEffect, useState } from "react";
import {
  ArrowUp,
  Heart,
  Code,
  Mail,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowButton(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:lantera@example.com", label: "Email" },
  ];

  const quickLinks = [
    "Home",
    "About",
    "Projects",
    "Certificates",
    "Contact",
  ].map((name) => ({ name, href: `#${name.toLowerCase()}` }));

  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[
          { class: "-top-32 -right-32", color: "bg-sky-500/10" },
          { class: "-bottom-32 -left-32", color: "bg-blue-600/10" },
          {
            class: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
            color: "bg-sky-400/5",
          },
        ].map((bg, i) => (
          <div
            key={i}
            className={`absolute ${bg.class} w-64 h-64 rounded-full blur-3xl ${bg.color}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Brand Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center font-bold">
                L
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-blue-200 bg-clip-text text-transparent">
                Lantera
                <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  M
                </span>
              </span>
            </div>

            <p className="text-slate-300 leading-relaxed max-w-md text-lg">
              Crafting digital experiences that blend{" "}
              <span className="text-sky-300 font-medium">innovation</span> and{" "}
              <span className="text-sky-300 font-medium">functionality</span>.
              Let’s build something amazing together.
            </p>

            <div className="flex space-x-4 pt-4">
              // eslint-disable-next-line no-unused-vars
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 bg-slate-700/50 hover:bg-sky-500/20 rounded-lg border border-slate-600 hover:border-sky-400/30 text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ name, href }, i) => (
                <li key={i}>
                  <motion.a
                    href={href}
                    className="flex items-center text-slate-300 hover:text-sky-300 transition-all duration-300 group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="w-1 h-1 bg-sky-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <motion.a
                href="mailto:lantera@example.com"
                className="flex items-center space-x-3 text-slate-300 hover:text-sky-300 transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-4 h-4" />
                <span>alanlann575@gmail.com</span>
              </motion.a>

              <div className="flex items-center space-x-3 text-slate-300">
                <Code className="w-4 h-4" />
                <span>Available for Freelance</span>
              </div>

              <div className="flex items-center space-x-2 pt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-slate-400">Available now</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-slate-700/50 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4"
        >
          <p>
            © {new Date().getFullYear()} Lantera Portfolio. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Made with using</span>
            <span className="text-sky-300 font-medium">React</span>
            <span>&</span>
            <span className="text-sky-300 font-medium">Tailwind CSS</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showButton && (
          <motion.button
            key="scrollTop"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-br from-sky-500 to-blue-600 border border-sky-400/30 text-white p-3 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowUp className="w-5 h-5 group-hover:text-white" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
