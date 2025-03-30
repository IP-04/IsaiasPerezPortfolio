import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "EcoVision",
      type: "Hackathon Project",
      description: "A real-time recyclable item classification system leveraging machine learning and computer vision technology to identify whether items are recyclable, trash, or belong to other categories.",
      technologies: [
        "Python", "OpenCV", "TensorFlow", "Flask", "ONNX", "FastAPI", "Firebase", "Next.js"
      ],
      features: [
        "Real-time recyclable object detection using YOLOv8",
        "Optimized with ONNX quantization for AMD's NPU",
        "User-friendly interface for easy classification",
      ],
      icon: <FaPython className="text-4xl" />,
    },
    {
      title: "ML Fitness Tracker",
      type: "Personal Project",
      description: "A fitness tracking system using machine learning to analyze and model accelerometer and gyroscope data for classifying barbell exercises and counting repetitions.",
      technologies: [
        "Python", "Pandas", "Matplotlib", "NumPy", "Scikit-learn"
      ],
      features: [
        "Classification of different barbell exercises with high accuracy",
        "Automated repetition counting for workout tracking",
        "Data visualization for workout analysis",
      ],
      icon: <FaPython className="text-4xl" />,
    },
    {
      title: "BookHive",
      type: "Group Project",
      description: "A web-based book review platform with full-stack architecture, allowing users to discover, review, and share their favorite books with a community of readers.",
      technologies: [
        "HTML", "CSS", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Docker"
      ],
      features: [
        "User-friendly book discovery and review system",
        "Containerized application with Docker for easy deployment",
        "Robust database architecture for storing user and book data",
      ],
      icon: <FaNodeJs className="text-4xl" />,
    },
    {
      title: "YouTube Summarizer",
      type: "Personal Project",
      description: "An AI-powered tool that automatically extracts and summarizes key points from YouTube videos, saving users time while providing concise content summaries.",
      technologies: [
        "Python", "React", "Flask", "Hugging Face", "YouTube API"
      ],
      features: [
        "Automatic transcription of YouTube video content",
        "AI-powered summarization of key points and concepts",
        "User-friendly interface with copy and share functionality",
      ],
      icon: <FaReact className="text-4xl" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-black to-black z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-white text-center font-inter">Projects</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            Showcasing my technical work across various domains and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-md shadow-purple-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 h-full bg-black border border-purple-900/50">
                <div className="h-48 bg-gradient-to-r from-[#9d4edd]/40 to-[#9d4edd]/10 flex items-center justify-center">
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-white font-inter">{project.title}</h3>
                    <Badge className="bg-[#9d4edd]/10 text-[#9d4edd] hover:bg-[#9d4edd]/20">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-[#9d4edd]/10 text-[#9d4edd] hover:bg-[#9d4edd]/20 border-none"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-400">KEY FEATURES</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-300">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end">
                    <a href="#" className="text-[#9d4edd] hover:text-white transition-colors flex items-center">
                      <span className="mr-1">Project Details</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
