import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const fullText = "🔍 Scanning for vulnerabilities...";

  const messages = [
    "Initializing security modules...",
    "Scanning open ports (1–65535)...",
    "Checking for misconfigurations...",
    "Analyzing network packets...",
    "Verifying SSL/TLS certificates...",
    "Enumerating endpoints...",
    "Checking for OWASP Top 10 issues...",
    "Running SQL injection tests...",
    "Inspecting authentication tokens...",
    "Correlating logs and event data...",
    "Cross-verifying vulnerability signatures...",
    "Finalizing report...",
    "✅ No critical threats detected."
  ];

  useEffect(() => {
    // Typing animation for header text
    let index = 0;
    const textInterval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) clearInterval(textInterval);
    }, 50);

    // Rotate scanning messages
    let msgIndex = 0;
    const messageInterval = setInterval(() => {
      setMessage(messages[msgIndex]);
      msgIndex = (msgIndex + 1) % messages.length;
    }, 1200);

    // Progress bar simulation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setMessage("✅ Scan complete. Generating report...");
          setTimeout(() => onComplete(), 1500);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 5) + 1, 100);
      });
    }, 100);

    return () => {
      clearInterval(textInterval);
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      {/* Header Text */}
      <div className="mb-6 text-2xl md:text-3xl font-mono font-bold text-red-400">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>

      {/* Loading Bar */}
      <div className="w-[300px] h-[6px] bg-gray-800 rounded relative overflow-hidden">
        <div
          className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Progress + Messages */}
      <div className="mt-3 text-sm text-gray-400 font-mono text-center">
        {progress}% — {message}
      </div>
    </div>
  );
};
