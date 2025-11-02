import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const ExperienceEducationRoadmap = () => {
  const timeline = [
    { type: "education", title: "Bachelor’s in Computer Science", place: "Osmania University", date: "Aug 2018 – Jun 2022" },
    { type: "experience", title: "Cybersecurity & Ethical Hacking Intern", place: "Inmovidu", date: "Apr 2020 – Sep 2020" },
    { type: "experience", title: "Network & Security Engineer", place: "Netzwerk Academy", date: "Feb 2021 – Feb 2022" },
    { type: "experience", title: "Cybersecurity Intern", place: "Persistent Systems", date: "Feb 2022 – Jul 2022" },
    { type: "experience", title: "Software Engineer", place: "Persistent Systems", date: "Jul 2022 – Jul 2023" },
    { type: "education", title: "Master’s in Cybersecurity, Computer Engineering", place: "Iowa State University", date: "Aug 2023 – Aug 2025" },
    { type: "experience", title: "Software / Network Security Co-Op", place: "Corteva Agriscience", date: "May 2025 – Present" },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-gray-950 to-gray-900 scroll-mt-24"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>

          <div className="relative">
            {/* Center Line */}
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500 rounded-full"
            />

            {/* Timeline */}
            <div className="space-y-16">
              {timeline.map((item, i) => {
                const isLeft = item.type === "education";
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center justify-between w-full"
                  >
                    {isLeft ? (
                      <>
                        <div className="w-5/12 text-right">
                          <div className="inline-block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all">
                            <h3 className="text-xl font-semibold text-cyan-400">{item.title}</h3>
                            <p className="text-gray-300">{item.place}</p>
                            <p className="text-gray-400 text-sm mt-1">{item.date}</p>
                          </div>
                        </div>
                        <div className="relative flex items-center justify-center w-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg ring-4 ring-cyan-400/30" />
                        </div>
                        <div className="w-5/12" />
                      </>
                    ) : (
                      <>
                        <div className="w-5/12" />
                        <div className="relative flex items-center justify-center w-2">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg ring-4 ring-blue-500/30" />
                        </div>
                        <div className="w-5/12 text-left">
                          <div className="inline-block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                            <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
                            <p className="text-gray-300">{item.place}</p>
                            <p className="text-gray-400 text-sm mt-1">{item.date}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
