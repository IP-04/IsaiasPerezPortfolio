import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
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
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
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
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
      imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#F5F7FA] scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-[#2D3E50] text-center font-inter">Projects</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
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
              <Card className="shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full">
                <div className="h-48 bg-gradient-to-r from-[#2D3E50] to-[#3498DB] flex items-center justify-center">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="h-24 w-24 object-contain" 
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-[#2D3E50] font-inter">{project.title}</h3>
                    <Badge className="bg-[#E74C3C]/10 text-[#E74C3C] hover:bg-[#E74C3C]/20">
                      {project.type}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-600">TECHNOLOGIES USED</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-[#2D3E50]/10 text-[#2D3E50] hover:bg-[#2D3E50]/20 border-none"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 text-gray-600">KEY FEATURES</h4>
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-700">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-end">
                    <a href="#" className="text-[#3498DB] hover:text-[#2D3E50] transition-colors flex items-center">
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
