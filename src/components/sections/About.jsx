import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  // =========================
  // 🎯 Skill Emojis per Category
  // =========================
  const skillEmojis = {
    // 🔴 Security Skills
    "Network Security": "🛜",
    "Risk Assessment": "⚖️",
    "Risk Management": "📊",
    "Cloud Security": "☁️",
    "Cryptography": "🔐",
    "Intrusion Detection": "🚨",
    "Malware Analysis": "🧬",
    "Security Engineering": "🧱",
    "Compliance": "📋",
    "Database Security": "💾",
    "Linux (Ubuntu, Kali, Parrot)": "🐧",
    "Nmap": "🌐",
    "Nessus": "🕵️‍♂️",
    "Firewalls": "🔥",
    "OWASP Top 10": "🧱",
    "Splunk (SIEM)": "📈",
    "EDR Tools": "🧰",
    "IAM": "🧑‍💻",
    "Threat Management": "🚧",
    "Incident Response": "🚑",
    "Disaster Management": "🌪️",

    // 💚 Development Skills
    Java: "☕",
    Python: "🐍",
    "C/C++": "💻",
    JavaScript: "⚡",
    "HTML,CSS": "🎨",
    "Node.js": "🌿",
    "Spring Boot": "🌸",
    "C#": "🔷",
    ".NET": "🧩",
    Postgres: "🐘",
    MySQL: "🗄️",
    "Git / GitHub": "🐙",
    "Salesforce (Apex, Admin)": "☁️",
    Agile: "🏃‍♂️",
    Prometheus: "⏱️",
    Grafana: "📊",
    "OPC UA": "🛰️",
    ODBC: "🔗",

    // 💜 Additional Skills
    Databricks: "💎",
    "DataLake Gen2": "🌊",
    "Azure Data Lake": "☁️",
    "Operating Systems": "🖥️",
    "Code Optimization": "🧠",
    "Problem Solving": "🧩",
    OOP: "📘",
    "Critical Thinking": "💡",
    Collaboration: "🤝",
    "Analytical Thinking": "🧮",
    Adaptability: "🌱",
    Communication: "💬",
    Teamwork: "👥",
  };

  // =========================
  // 💾 Skill Lists
  // =========================
  const securitySkills = [
    "Network Security",
    "Risk Assessment",
    "Risk Management",
    "Cloud Security",
    "Cryptography",
    "Intrusion Detection",
    "Malware Analysis",
    "Security Engineering",
    "Compliance",
    "Database Security",
    "Linux (Ubuntu, Kali, Parrot)",
    "Nmap",
    "Nessus",
    "Firewalls",
    "OWASP Top 10",
    "Splunk (SIEM)",
    "EDR Tools",
    "IAM",
    "Threat Management",
    "Incident Response",
    "Disaster Management",
  ];

  const developmentSkills = [
    "Java",
    "Python",
    "C/C++",
    "JavaScript",
    "HTML,CSS",
    "Node.js",
    "Spring Boot",
    "C#",
    ".NET",
    "Postgres",
    "MySQL",
    "Git / GitHub",
    "Salesforce (Apex, Admin)",
    "Agile",
    "Prometheus",
    "Grafana",
    "OPC UA",
    "ODBC",
  ];

  const additionalSkills = [
    "Databricks",
    "DataLake Gen2",
    "Azure Data Lake",
    "Operating Systems",
    "Code Optimization",
    "Problem Solving",
    "OOP",
    "Critical Thinking",
    "Collaboration",
    "Analytical Thinking",
    "Adaptability",
    "Communication",
    "Teamwork",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* ====== Title ====== */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* ====== Bio ====== */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-8 leading-relaxed text-center">
              👋 Hi, I’m <strong>Rajesh Sharma</strong> — a{" "}
              <strong>Full-Stack & Cloud Security Engineer</strong> passionate
              about building secure, data-driven systems on Azure ☁️. I love
              blending <strong>DevOps automation</strong>,{" "}
              <strong>real-time data engineering</strong>, and{" "}
              <strong>cybersecurity</strong> to craft scalable, resilient
              solutions. Always curious, always improving — and{" "}
              <strong>ready to contribute immediately.</strong> 🚀
            </p>

            {/* ====== Centered Resume Button ====== */}
            <div className="w-full flex justify-center items-center mt-6 mb-12">
              <a
                href="https://www.overleaf.com/read/qrfspzjybcnc#54f363"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-8 rounded-lg font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300"
              >
                📄 View My Resume
              </a>
            </div>

            {/* ====== Skills Section ====== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              {/* 🔴 Security */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all relative">
                {/* Glowing Title Bar */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse"></div>

                <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center justify-center gap-2">
                  🔒 Security
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {securitySkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-red-500/10 text-red-300 py-1 px-3 rounded-full text-sm flex items-center gap-1 
                                 hover:bg-red-500/20 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition"
                    >
                      <span>{skillEmojis[skill] || "🔹"}</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 💚 Development */}
              <div className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all relative">
                {/* Glowing Title Bar */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>

                <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center justify-center gap-2">
                  💻 Development
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {developmentSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-green-500/10 text-green-300 py-1 px-3 rounded-full text-sm flex items-center gap-1 
                                 hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(34,197,94,0.2)] transition"
                    >
                      <span>{skillEmojis[skill] || "🔹"}</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 💜 Additional Skills */}
              <div className="md:col-span-2 rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all relative">
                {/* Glowing Title Bar */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse"></div>

                <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center justify-center gap-2">
                  ⚙️ Additional Skills
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {additionalSkills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/10 text-purple-300 py-1 px-3 rounded-full text-sm flex items-center gap-1 
                                 hover:bg-purple-500/20 hover:shadow-[0_2px_8px_rgba(147,51,234,0.2)] transition"
                    >
                      <span>{skillEmojis[skill] || "🔹"}</span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
