import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Download, Calendar, Award } from "lucide-react";

export default function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCertificates = async () => {
      try {
        const res = await fetch("/certificates/list.json");
        const data = await res.json();
        setCertificates(data || []);
      } catch (error) {
        console.error("Failed to load certificates:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadCertificates();
  }, []);

  const skeletons = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 animate-pulse"
        >
          <div className="bg-slate-200 h-48 rounded-xl mb-4" />
          <div className="bg-slate-200 h-4 rounded mb-3" />
          <div className="bg-slate-200 h-3 rounded w-2/3" />
        </motion.div>
      )),
    []
  );

  return (
    <section
      id="certificates"
      className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* === Decorative Background === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* === Section Header === */}
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
            <Award className="w-4 h-4 text-sky-600 mr-2" />
            <span className="text-sm font-medium text-sky-700">
              Professional Credentials
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">
              Certifications
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Validating my expertise through continuous learning in{" "}
            <span className="font-semibold text-sky-600">
              Modern Technologies
            </span>
            ,{" "}
            <span className="font-semibold text-blue-600">AI Development</span>,
            and{" "}
            <span className="font-semibold text-sky-600">Web Innovation</span>.
          </motion.p>
        </motion.div>

        {/* === Certificates Grid === */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skeletons}
          </div>
        ) : certificates.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-700 mb-2">
                No Certificates Found
              </h3>
              <p className="text-slate-500">
                Certificates will be displayed here once available.
              </p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-sky-100"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={`/certificates/${cert.file}`}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-sky-700 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cert.year}</span>
                    <span className="mx-2">•</span>
                    <span className="text-slate-600 font-medium">
                      {cert.issuer}
                    </span>
                  </div>

                  {cert.category && (
                    <span className="inline-flex items-center px-3 py-1 mb-4 bg-sky-100 text-sky-700 rounded-full text-xs font-medium border border-sky-200">
                      {cert.category}
                    </span>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-sky-100">
                    <motion.a
                      href={`/certificates/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-lg font-medium hover:bg-sky-100 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </motion.a>

                    <motion.a
                      href={`/certificates/${cert.file}`}
                      download
                      className="flex-1 flex items-center justify-center gap-2 border border-sky-200 text-slate-700 px-4 py-2 rounded-lg font-medium hover:bg-sky-50 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </motion.a>
                  </div>
                </div>

                {/* Border hover effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-200 rounded-2xl transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        )}

        {/* === Call to Action === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-sky-100"
        >
          <p className="text-slate-600 mb-6 text-lg">
            Interested in verifying my credentials?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Award className="w-5 h-5 mr-2" />
            Request Verification
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
