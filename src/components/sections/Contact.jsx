import { useState } from "react";
import emailjs from "emailjs-com";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,     // ✅ from .env
        import.meta.env.VITE_TEMPLATE_ID,    // ✅ from .env
        e.target,                            // ✅ your form element
        import.meta.env.VITE_PUBLIC_KEY      // ✅ from .env
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("❌ Failed to send. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-lg w-full px-6">
          <h2 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
            Get In Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:border-cyan-400 focus:shadow-[0_0_10px_rgba(6,182,212,0.4)] transition"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-white focus:border-blue-500 focus:shadow-[0_0_10px_rgba(59,130,246,0.4)] transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 rounded-md font-semibold text-white hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
