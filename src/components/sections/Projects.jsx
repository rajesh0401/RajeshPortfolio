import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Firewall Rule Optimization & Automation",
      description:
        "Python-based system that optimizes firewall rule sets by removing redundancies, detecting conflicts, and reordering entries to minimize packet filtering latency. Improved average rule-check efficiency by 25%.",
      tech: ["Python", "Networking", "Security Automation", "Nmap", "Wireshark"],
      details: `
      🔹 Automated redundant and conflicting rule detection using Python.
      🔹 Implemented dynamic rule reordering to enhance packet-matching speed.
      🔹 Validated efficiency via Nmap and Wireshark traffic testing.
      🔹 Result: 25% improvement in firewall throughput and maintainability.
      `,
      glowColor: "from-red-600 to-pink-500",
    },
    {
      title: "Network and Traffic Analysis Tool",
      description:
        "Real-time network traffic analysis tool using Snort, Nmap, and Wireshark to detect anomalies and optimize response time by 40%.",
      tech: ["Snort", "Wireshark", "Nmap", "Packet Analysis", "Cybersecurity"],
      details: `
      🔹 Integrated Snort for intrusion detection and real-time logging.
      🔹 Automated Nmap scans for port/service mapping.
      🔹 Enabled live visualization of packet flow and alerting via dashboards.
      🔹 Enhanced incident response by 40%.
      `,
      glowColor: "from-red-600 to-pink-500",
    },
    {
      title: "Hack The Box – Penetration Testing",
      description:
        "Completed 30+ real-world pentesting labs on HackTheBox using Burp Suite, Metasploit, and John the Ripper for exploit development and privilege escalation.",
      tech: ["Metasploit", "Burp Suite", "John the Ripper", "Linux", "Windows"],
      details: `
      🔹 Performed web, privilege, and post-exploitation challenges.
      🔹 Used Burp Suite for web proxy interception and testing.
      🔹 Applied John and Hydra for password cracking and brute-forcing.
      🔹 Strengthened OSINT and post-exploitation strategy design.
      `,
      glowColor: "from-red-600 to-pink-500",
    },
    {
      title: "Secure Online Voting System",
      description:
        "Built a secure Java-based online voting system ensuring encrypted storage, authentication, and tamper-proof verification using MySQL and Android Studio.",
      tech: ["Java", "MySQL", "Android Studio", "Cybersecurity"],
      details: `
      🔹 Implemented AES-based encryption for vote storage.
      🔹 Designed multi-factor authentication for voters.
      🔹 Enforced secure data transmission and verification logic.
      🔹 Ensured transparency and data confidentiality.
      `,
      glowColor: "from-purple-500 to-indigo-400",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden"
    >
      <RevealOnScroll>
        {/* subtle gradient background shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-black opacity-40 blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]`}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-cyan-400 hover:text-cyan-300 transition-all mt-2"
                >
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* === Dynamic Modal === */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg animate-fadeIn">
            <div
              className={`relative bg-gradient-to-br ${selectedProject.glowColor} p-[2px] rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.4)]`}
            >
              <div className="bg-black rounded-xl p-8 max-w-2xl w-[90%]">
                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-6 text-gray-400 hover:text-white text-3xl font-bold"
                >
                  ×
                </button>

                {/* Modal Content */}
                <h3
                  className={`text-2xl font-bold mb-4 bg-gradient-to-r ${selectedProject.glowColor} bg-clip-text text-transparent`}
                >
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-6 whitespace-pre-line">
                  {selectedProject.details}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className={`bg-gradient-to-r ${selectedProject.glowColor} text-white py-2 px-6 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all`}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </RevealOnScroll>
    </section>
  );
};
