import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaTools, FaBook } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      category: "Languages",
      icon: <FaCode />,
      items: ["C/C++", "Python", "JavaScript", "SQL", "HTML/CSS"],
    },
    {
      category: "Frameworks",
      icon: <FaLayerGroup />,
      items: ["React", "Node.js", "Flask", "FastAPI", "Express.js", "Bootstrap"],
    },
    {
      category: "Developer Tools",
      icon: <FaTools />,
      items: ["Git", "Docker", "Google Colab", "Firebase", "VS Code", "Jupyter"],
    },
    {
      category: "Libraries",
      icon: <FaBook />,
      items: ["TensorFlow", "PyTorch", "OpenCV", "ONNX", "pandas", "NumPy", "Scikit-learn"],
    },
  ];

  const proficiencies = [
    { name: "Machine Learning & AI", percentage: 90 },
    { name: "Web Development", percentage: 85 },
    { name: "Data Analysis", percentage: 80 },
    { name: "Software Architecture", percentage: 75 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-[#F5F7FA] scroll-mt-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-[#2D3E50] text-center font-inter">Technical Skills</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            A comprehensive set of skills I've developed through academic studies, research work, and personal projects.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={item}>
              <Card className="shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-[#3498DB] text-2xl mb-4 flex justify-center">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center font-inter">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {skill.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="bg-[#3498DB]/10 text-[#3498DB] px-3 py-1 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 bg-white p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center font-inter">Technical Proficiency</h3>
          <div className="space-y-6">
            {proficiencies.map((proficiency, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{proficiency.name}</span>
                  <span>{proficiency.percentage}%</span>
                </div>
                <Progress value={proficiency.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
