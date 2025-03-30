import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#2D3E50] text-white"
    >
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#3498DB] font-medium mb-4">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-inter">
              Isaias Perez
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-300 font-inter">
              Computer Science Student & ML Researcher
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
              Aspiring software engineer and machine learning enthusiast with a
              passion for creating innovative solutions at the University of
              Colorado Boulder.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button
                className="bg-[#3498DB] hover:bg-[#3498DB]/90 text-white"
                size="lg"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2D3E50]"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
            </div>
            <div className="flex mt-8 space-x-6 justify-center md:justify-start">
              <a
                href="https://linkedin.com/in/isaias-perez21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#3498DB] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/IP-04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#3498DB] transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:isaiasxl21@gmail.com"
                className="text-white hover:text-[#3498DB] transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-full w-64 h-64 md:w-80 md:h-80 bg-[#3498DB]/20 border-4 border-[#3498DB] shadow-xl flex items-center justify-center text-6xl text-[#3498DB]">
              IP
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
