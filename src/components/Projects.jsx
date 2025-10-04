import { motion } from "framer-motion";

// === Data Projects ===
const projects = [
  {
    title: "AI Chat Assistant",
    desc: "Intelligent chatbot powered by React and OpenAI API with natural language processing and real-time responses.",
    img: "https://i.ibb.co/kcnCW6r/ai-chat.jpg",
    link: "#",
    tags: ["React", "OpenAI", "Node.js", "WebSocket"],
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    img: "https://i.ibb.co/TvRr5Zk/dashboard.jpg",
    link: "#",
    tags: ["Next.js", "MongoDB", "Stripe", "Tailwind"],
    featured: true,
  },
  {
    title: "React Portfolio",
    desc: "Modern, responsive portfolio website with smooth animations and optimized performance.",
    img: "https://i.ibb.co/7yvRHWp/portfolio.jpg",
    link: "#",
    tags: ["React", "Framer Motion", "Tailwind", "Vite"],
  },
  {
    title: "Music Streaming App",
    desc: "Spotify-inspired music player with playlist management, audio visualization, and social features.",
    img: "https://i.ibb.co/d4Jm7tW/music-app.jpg",
    link: "#",
    tags: ["React", "Audio API", "Firebase", "PWA"],
  },
  {
    title: "Task Management Tool",
    desc: "Collaborative project management application with real-time updates and team collaboration features.",
    img: "https://i.ibb.co/kcnCW6r/ai-chat.jpg",
    link: "#",
    tags: ["Vue.js", "Socket.io", "PostgreSQL", "Redis"],
  },
  {
    title: "Data Analytics Dashboard",
    desc: "Comprehensive analytics platform with interactive charts, data export, and custom reporting.",
    img: "https://i.ibb.co/TvRr5Zk/dashboard.jpg",
    link: "#",
    tags: ["React", "D3.js", "Python", "FastAPI"],
  },
];

// === Animations Variants ===
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  },
});

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

// === Component ===
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Blur Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-blue-200/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* === Header === */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(0)}
          className="mb-20 text-center"
        >
          <motion.div
            variants={fadeIn(0.1)}
            className="mb-6 inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-2"
          >
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-sky-500" />
            <span className="text-sm font-medium text-sky-700">
              Portfolio Showcase
            </span>
          </motion.div>

          <h2 className="mb-6 text-4xl font-bold text-slate-800 sm:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <motion.p
            variants={fadeIn(0.2)}
            className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600"
          >
            A curated collection of my latest work showcasing expertise in
            modern web technologies, user experience design, and innovative
            solutions.
          </motion.p>
        </motion.div>

        {/* === Projects Grid === */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp(i * 0.1)}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Featured Badge */}
              {project.featured && (
                <span className="absolute top-4 left-4 z-20 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-3 py-1 text-xs font-semibold text-white shadow-lg">
                  ⭐ Featured
                </span>
              )}

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-sky-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-slate-800 transition-colors duration-300 group-hover:text-sky-700">
                  {project.title}
                </h3>
                <p className="mb-4 leading-relaxed text-slate-600">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-200 bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <motion.a
                  href={project.link}
                  className="group/btn inline-flex w-full items-center justify-center rounded-xl border border-sky-200 bg-sky-50 px-4 py-3 font-semibold text-sky-700 transition-all duration-300 hover:bg-sky-100"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="mr-2">View Project</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>

              {/* Hover Outline */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent transition-all duration-500 group-hover:border-sky-200" />
            </motion.div>
          ))}
        </div>

        {/* === Call To Action === */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp(0.3)}
          className="mt-16 border-t border-sky-100 pt-12 text-center"
        >
          <p className="mb-6 text-lg text-slate-600">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">💼</span>
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
