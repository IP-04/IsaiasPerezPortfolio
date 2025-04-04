import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-black text-white py-8 border-t border-purple-900/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-black to-black z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold font-inter">
              Isaias<span className="text-[#9d4edd]">.dev</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Computer Science Student & ML Researcher
            </p>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-400 hover:text-[#9d4edd] transition-colors py-1"
                onClick={(e) => {
                  e.preventDefault();
                  if (item.id === "home") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    scrollToSection(item.id);
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-purple-900/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Isaias Perez. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://linkedin.com/in/isaias-perez21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#9d4edd] transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/IP-04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#9d4edd] transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:isaiasxl21@gmail.com"
              className="text-gray-400 hover:text-[#9d4edd] transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
