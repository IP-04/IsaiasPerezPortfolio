import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaLanguage, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

export default function Contact() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/assets/Technical_Resume_Isaias_Perez_2025.pdf";
    link.download = "Technical_Resume_Isaias_Perez_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-black text-white scroll-mt-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-center font-inter">Get In Touch</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-purple-900/50 shadow-lg shadow-purple-500/10 p-8 rounded-lg h-full">
              <h3 className="text-2xl font-semibold mb-6 font-inter">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#9d4edd] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a
                      href="mailto:isaiasxl21@gmail.com"
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      isaiasxl21@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#9d4edd] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-300">Boulder, Colorado</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#9d4edd] rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                    <FaLanguage />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Languages</h4>
                    <p className="text-gray-300">English & Spanish (Bilingual)</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium mb-4">Connect With Me</h4>
                <div className="flex space-x-6">
                  <a
                    href="https://linkedin.com/in/isaias-perez21"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#9d4edd] to-purple-900 text-white hover:from-purple-900 hover:to-[#9d4edd] transition-all w-12 h-12 rounded-full flex items-center justify-center shadow-md shadow-purple-500/20"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a
                    href="https://github.com/IP-04"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-[#9d4edd] to-purple-900 text-white hover:from-purple-900 hover:to-[#9d4edd] transition-all w-12 h-12 rounded-full flex items-center justify-center shadow-md shadow-purple-500/20"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="mailto:isaiasxl21@gmail.com"
                    className="bg-gradient-to-br from-[#9d4edd] to-purple-900 text-white hover:from-purple-900 hover:to-[#9d4edd] transition-all w-12 h-12 rounded-full flex items-center justify-center shadow-md shadow-purple-500/20"
                  >
                    <FaEnvelope className="text-xl" />
                  </a>
                </div>
              </div>

              <div className="mt-10">
                <Button
                  className="bg-[#9d4edd] hover:bg-[#9d4edd]/80 text-white flex items-center shadow-md shadow-purple-500/20"
                  onClick={handleDownload}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
