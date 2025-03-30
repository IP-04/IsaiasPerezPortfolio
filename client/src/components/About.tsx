import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaBrain, FaLanguage, FaUsers } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

export default function About() {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/attached_assets/Technical_Resume_Isaias_Perez_2025.pdf";
    link.download = "Technical_Resume_Isaias_Perez_2025.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-2/5 mb-10 md:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg shadow-lg w-full max-w-md mx-auto bg-gradient-to-br from-[#2D3E50] to-[#3498DB] h-[400px] flex items-center justify-center">
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
            <h2 className="text-3xl font-bold mb-6 text-[#2D3E50] font-inter">About Me</h2>
            
            <div className="bg-[#3498DB]/10 p-4 rounded-md mb-8">
              <div className="flex items-center mb-2">
                <FaGraduationCap className="text-[#3498DB] mr-3 text-xl" />
                <h3 className="text-xl font-semibold font-inter">Education</h3>
              </div>
              <div className="ml-9">
                <p className="font-medium">University of Colorado Boulder</p>
                <p>BS in Computer Science (Expected May 2027)</p>
                <p className="text-sm text-gray-600">Double Minor: Business and Applied Mathematics</p>
              </div>
            </div>
            
            <p className="mb-6 text-lg">
              I'm a passionate Computer Science student with a focus on machine learning and software engineering. Currently researching LLM interpretability at CU Boulder, I'm dedicated to developing innovative technological solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#F5F7FA] rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <FaCode className="text-[#3498DB] mr-2" />
                  <h4 className="font-semibold">Software Development</h4>
                </div>
                <p>Full-stack development with experience in React, Node.js, and various databases.</p>
              </div>
              
              <div className="bg-[#F5F7FA] rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <FaBrain className="text-[#3498DB] mr-2" />
                  <h4 className="font-semibold">Machine Learning</h4>
                </div>
                <p>Experienced with TensorFlow, PyTorch, and research in LLM interpretability.</p>
              </div>
              
              <div className="bg-[#F5F7FA] rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <FaLanguage className="text-[#3498DB] mr-2" />
                  <h4 className="font-semibold">Bilingual</h4>
                </div>
                <p>Native Spanish speaker, fluent in English, with excellent cross-cultural communication skills.</p>
              </div>
              
              <div className="bg-[#F5F7FA] rounded-lg p-4 shadow-sm">
                <div className="flex items-center mb-2">
                  <FaUsers className="text-[#3498DB] mr-2" />
                  <h4 className="font-semibold">Leadership</h4>
                </div>
                <p>Active member of SHPE, promoting diversity and engagement within the engineering community.</p>
              </div>
            </div>
            
            <div className="flex flex-wrap">
              <Button 
                className="bg-[#2D3E50] hover:bg-[#2D3E50]/90 text-white mr-4 mb-4"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-[#2D3E50] text-[#2D3E50] hover:bg-[#2D3E50] hover:text-white mb-4"
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
