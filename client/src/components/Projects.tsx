import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Smartphone, TrendingUp } from "lucide-react";
import { FaPython, FaReact, FaNodeJs, FaRobot, FaMicrochip, FaChartLine } from "react-icons/fa";
import { SiOpenai, SiPytorch, SiCplusplus } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "FlowExec++",
      type: "Reinforcement Learning for Trade Execution",
      description: "An advanced quantitative trading system using reinforcement learning agents for optimal trade execution with market simulation and real-world data evaluation.",
      technologies: [
        "C++", "PyTorch", "Reinforcement Learning", "Gemini API", "XGBoost", "LSTM", "LOBSTER Data"
      ],
      features: [
        "Built market simulator with Heston stochastic volatility and market impact models",
        "Trained PPO and Flow Matching agents for optimal execution strategies",
        "Integrated meta-strategy selection via XGBoost and LSTM models",
        "Added Gemini-powered NLP dashboard for trade analytics"
      ],
      icon: <SiCplusplus className="text-4xl text-blue-500" />,
      gradient: "from-blue-500/20 to-purple-600/20",
    },
    {
      title: "PulsePlan (AI Scheduler)",
      type: "Multimodal LLM Agent for Task Automation",
      description: "An intelligent productivity planner that leverages multimodal AI to automate scheduling, task management, and habit tracking across platforms.",
      technologies: [
        "React Native", "Node.js", "OpenAI GPT-4o", "Gemini", "Canvas LMS", "Stripe", "Chrome Extension"
      ],
      features: [
        "AI productivity planner using GPT-4o and Gemini for intelligent scheduling",
        "Cross-platform web scraping engine for LMS integration (Canvas, Moodle)",
        "Chrome extension with auto-sync and Stripe billing integration",
        "Full-stack authentication pipeline with real-time synchronization"
      ],
      icon: <Smartphone className="text-4xl text-green-500" />,
      gradient: "from-green-500/20 to-blue-600/20",
    },
    {
      title: "EcoVision",
      type: "Edge-AI for Smart Waste Sorting",
      description: "A real-time waste classification system using computer vision and edge AI to identify recyclable materials with high accuracy and efficiency.",
      technologies: [
        "Python", "YOLOv8", "ONNX", "FastAPI", "Computer Vision", "Edge Computing"
      ],
      features: [
        "Engineered real-time waste classification system using YOLOv8",
        "Custom labeled dataset for improved recognition accuracy",
        "Quantized and exported models to ONNX for NPU-accelerated inference",
        "Optimized for low-power edge devices with real-time processing"
      ],
      icon: <FaMicrochip className="text-4xl text-orange-500" />,
      gradient: "from-orange-500/20 to-green-600/20",
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
      icon: <FaChartLine className="text-4xl text-purple-500" />,
      gradient: "from-purple-500/20 to-pink-600/20",
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
      icon: <FaNodeJs className="text-4xl text-green-600" />,
      gradient: "from-green-600/20 to-blue-600/20",
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
      icon: <FaReact className="text-4xl text-blue-400" />,
      gradient: "from-blue-400/20 to-red-600/20",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="shadow-md shadow-purple-500/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-2 h-full bg-gradient-to-br from-black via-purple-900/5 to-black border border-purple-900/50 group">
                <div className={`h-48 bg-gradient-to-r ${project.gradient || 'from-[#9d4edd]/40 to-[#9d4edd]/10'} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <motion.div 
                    className="text-white z-10 transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-black/50 text-white border-none backdrop-blur-sm">
                      {project.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-white font-inter group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
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
