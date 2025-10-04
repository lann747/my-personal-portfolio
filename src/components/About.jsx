import { motion } from "framer-motion";
import { Code, Cpu, Palette, Rocket } from "lucide-react";

const skills = [
  { name: "React & Next.js", icon: Code, level: 90 },
  { name: "AI Integration", icon: Cpu, level: 85 },
  { name: "UI/UX Design", icon: Palette, level: 80 },
  { name: "Web Performance", icon: Rocket, level: 88 },
];

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "50+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "15+", label: "Technologies Mastered" },
];

// === Motion Variants ===
const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 20 : -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-sky-200/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-200/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-300/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("left", 0)}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Floating Backgrounds */}
              {[
                {
                  className:
                    "absolute -top-6 -left-6 w-24 h-24 bg-sky-200/40 rounded-2xl blur-xl",
                  anim: { y: [0, -15, 0], rotate: [0, 5, 0] },
                  dur: 6,
                },
                {
                  className:
                    "absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200/30 rounded-3xl blur-xl",
                  anim: { y: [0, 15, 0], rotate: [0, -5, 0] },
                  dur: 7,
                  delay: 1,
                },
              ].map((b, i) => (
                <motion.div
                  key={i}
                  className={b.className}
                  animate={b.anim}
                  transition={{
                    duration: b.dur,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: b.delay || 0,
                  }}
                />
              ))}

              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96"
              >
                <img
                  src="https://i.ibb.co/2KzMMLF/about-sample.png"
                  alt="Lantera - Web Developer & AI Enthusiast"
                  className="h-full w-full rounded-3xl border-8 border-white object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 mix-blend-overlay" />
                <div className="absolute inset-0 -skew-x-12 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -right-4 z-20 rounded-2xl border border-sky-100 bg-white px-6 py-3 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />
                  <span className="text-sm font-semibold text-slate-700">
                    Available for work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn("right", 0.2)}
            className="space-y-8"
          >
            {/* Header */}
            <motion.div variants={fadeIn("up", 0.1)} className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-100 px-4 py-2">
                <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-sky-500" />
                <span className="text-sm font-medium text-sky-700">
                  About Me
                </span>
              </div>
              <h2 className="text-4xl font-bold text-slate-800 sm:text-5xl lg:text-6xl">
                Crafting Digital{" "}
                <span className="bg-gradient-to-r from-sky-600 to-blue-500 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={fadeIn("up", 0.3)} className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                Hello! I'm{" "}
                <span className="font-semibold text-sky-600">Lantera</span>, a
                passionate third-year IT student specializing in modern web
                technologies and artificial intelligence. I bridge the gap
                between innovative design and technical execution.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                I specialize in building{" "}
                <span className="font-semibold text-sky-600">
                  responsive, intelligent web applications
                </span>{" "}
                using{" "}
                <span className="font-semibold text-blue-600">React.js</span>,{" "}
                <span className="font-semibold text-sky-600">Next.js</span>, and{" "}
                <span className="font-semibold text-blue-600">
                  AI integrations
                </span>{" "}
                that deliver exceptional user experiences and drive business
                growth.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {skills.map(({ name, icon: Icon, level }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-xl border border-sky-100 bg-white p-4 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className="h-4 w-4 text-sky-600" />
                      <span className="text-sm font-semibold text-slate-800">
                        {name}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-sky-600">
                      {level}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-sky-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      transition={{ duration: 1, delay: 0.8 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="grid grid-cols-2 gap-6 pt-6 sm:grid-cols-4"
            >
              {stats.map(({ number, label }, i) => (
                <div key={i} className="text-center">
                  <div className="mb-1 text-2xl font-bold text-sky-600">
                    {number}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
