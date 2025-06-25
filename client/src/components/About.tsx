import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBrain, FaLanguage, FaUsers } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";
import seniorPicture from "@/assets/senior_picture.jpg";

export default function About() {
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
    <section id="about" className="py-20 bg-black text-white scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-black to-black z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-2/5 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg shadow-lg shadow-purple-500/20 w-full max-w-md mx-auto bg-gradient-to-br from-[#9d4edd]/50 to-black border border-purple-900/50 h-[400px] flex items-center justify-center">
              <div className="text-white text-8xl font-bold">IP</div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-3/5 md:pl-16"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white font-inter">About Me</h2>
            
            <div className="bg-[#9d4edd]/10 border border-purple-900/50 p-4 rounded-md mb-8">
              <div className="flex items-center mb-2">
                <FaGraduationCap className="text-[#9d4edd] mr-3 text-xl" />
                <h3 className="text-xl font-semibold font-inter text-white">Education</h3>
              </div>
              <div className="ml-9">
                <div className="flex justify-between items-start mb-1">
                  <p className="font-medium text-white">University of Colorado Boulder</p>
                  <p className="text-[#9d4edd] font-semibold">GPA: 3.78</p>
                </div>
                <p className="text-gray-300">BS in Computer Science (Expected May 2027)</p>
                <p className="text-sm text-gray-400 mb-2">Double Minor: Business and Applied Mathematics</p>
                <div className="text-sm text-gray-400">
                  <p><span className="text-white font-medium">Courses:</span> Data Structures, AI, OOP, Databases, Software Engineering, Finance</p>
                  <p><span className="text-white font-medium">Affiliations:</span> Society of Hispanic Professional Engineers (SHPE)</p>
                </div>
              </div>
            </div>
            
            <p className="mb-6 text-lg text-gray-300">
              I'm a passionate Computer Science student with a focus on machine learning and software engineering. Currently researching LLM interpretability at CU Boulder, I'm dedicated to developing innovative technological solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black rounded-lg p-4 shadow-md shadow-purple-500/10 border border-purple-900/50">
                <div className="flex items-center mb-2">
                  <FaCode className="text-[#9d4edd] mr-2" />
                  <h4 className="font-semibold text-white">Software Development</h4>
                </div>
                <p className="text-gray-300">Full-stack development with experience in React, Node.js, and various databases.</p>
              </div>
              
              <div className="bg-black rounded-lg p-4 shadow-md shadow-purple-500/10 border border-purple-900/50">
                <div className="flex items-center mb-2">
                  <FaBrain className="text-[#9d4edd] mr-2" />
                  <h4 className="font-semibold text-white">Machine Learning</h4>
                </div>
                <p className="text-gray-300">Experienced with TensorFlow, PyTorch, and research in LLM interpretability.</p>
              </div>
              
              <div className="bg-black rounded-lg p-4 shadow-md shadow-purple-500/10 border border-purple-900/50">
                <div className="flex items-center mb-2">
                  <FaLanguage className="text-[#9d4edd] mr-2" />
                  <h4 className="font-semibold text-white">Bilingual</h4>
                </div>
                <p className="text-gray-300">Native Spanish speaker, fluent in English, with excellent cross-cultural communication skills.</p>
              </div>
              
              <div className="bg-black rounded-lg p-4 shadow-md shadow-purple-500/10 border border-purple-900/50">
                <div className="flex items-center mb-2">
                  <FaUsers className="text-[#9d4edd] mr-2" />
                  <h4 className="font-semibold text-white">Leadership</h4>
                </div>
                <p className="text-gray-300">Active member of SHPE, promoting diversity and engagement within the engineering community.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              <Button 
                className="bg-[#9d4edd] hover:bg-[#9d4edd]/80 text-white mr-4 mb-4"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-[#9d4edd] text-[#9d4edd] hover:bg-[#9d4edd]/20 mb-4"
                onClick={handleDownload}
              >
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
