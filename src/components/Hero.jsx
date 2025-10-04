import { motion } from "framer-motion";

export default function Hero() {
  const stats = [
    { number: "2+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const floatingVariants = (y, rotate) => ({
    animate: { y: [0, y, 0], rotate: [0, rotate, 0] },
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  });

  const fadeIn = (delay = 0, y = 20) => ({
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.8, ease: "easeOut" },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden"
    >
      {/* === Background Decorative Elements === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-sky-300/10 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* === Text Section === */}
        <motion.div
          className="flex-1 text-center lg:text-left space-y-8 z-10"
          {...fadeIn(0, -50)}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 border border-sky-200 mb-4"
            {...fadeIn(0.2)}
          >
            <span className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-sky-700">
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight"
            {...fadeIn(0.3, 30)}
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">
              Lantera
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl lg:text-2xl text-slate-600 max-w-2xl leading-relaxed"
            {...fadeIn(0.5)}
          >
            A passionate{" "}
            <span className="font-semibold text-sky-600">Web Developer</span> &{" "}
            <span className="font-semibold text-blue-600">AI Enthusiast</span>,
            crafting intelligent and interactive digital experiences that make a
            difference.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            {...fadeIn(0.7)}
          >
            <motion.a
              href="#projects"
              className="group relative bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 View My Work
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>

            <motion.a
              href="#contact"
              className="group border-2 border-sky-500 text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💬 Let's Talk
            </motion.a>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-6 pt-8"
            {...fadeIn(0.9)}
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:text-left">
                <div className="text-2xl font-bold text-sky-600">
                  {s.number}
                </div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* === Profile Image Section === */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end relative"
          {...fadeIn(0.4, 50)}
        >
          <div className="relative">
            {/* Floating Backgrounds */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 bg-sky-200/40 rounded-2xl blur-xl"
              {...floatingVariants(-15, 5)}
            />
            <motion.div
              className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-200/30 rounded-3xl blur-xl"
              {...floatingVariants(15, -5)}
              transition={{ ...floatingVariants(15, -5).transition, delay: 1 }}
            />

            {/* Profile Image */}
            <motion.div
              className="relative z-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <motion.img
                  src="https://i.ibb.co/fxpFXd7/profile-sample.png"
                  alt="Lantera - Web Developer"
                  className="w-full h-full object-cover rounded-3xl shadow-2xl border-8 border-white"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/10 to-blue-600/10 mix-blend-overlay" />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine" />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border border-sky-100 flex items-center space-x-2 z-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-slate-700">
                Open for work
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* === Scroll Indicator === */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        {...fadeIn(1.5)}
      >
        <motion.div
          className="w-6 h-10 border-2 border-sky-400 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-sky-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
