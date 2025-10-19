import { RevealOnScroll } from "../RevealOnScroll";

export const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
    
      link: "https://learn.microsoft.com/en-us/certifications/azure-fundamentals/",
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      /*year: "2024",*/
      link: "https://www.comptia.org/certifications/security",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      /*year: "2024",*/
      link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html",
    },
    {
      title: "Network Security and Database Vulnerabilities Badge",
      issuer: "IBM Skills Network",
      /*year: "2024",*/
      link: "https://www.ibm.com/training/badge",
    },
  ];

  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Certifications
          </h2>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-md p-5 hover:border-blue-500/40 hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition text-left"
              >
                <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-gray-400 text-sm mb-2">
                  {cert.issuer} &nbsp;&nbsp; {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
