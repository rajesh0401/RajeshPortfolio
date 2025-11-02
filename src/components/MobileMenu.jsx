import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] backdrop-blur-lg z-40 flex flex-col items-center justify-center
        transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
        ${
          menuOpen
            ? "h-screen opacity-100 pointer-events-auto animate-slideDown"
            : "h-0 opacity-0 pointer-events-none animate-fadeUp"
        }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Animated Menu Links */}
      {links.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transition-transform duration-500 ease-out
            ${
              menuOpen
                ? `opacity-100 translate-y-0 animate-linkIn delay-[${idx * 150}ms]`
                : "opacity-0 translate-y-5"
            }`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
