import { motion } from "framer-motion";
import { FaMicroscope, FaLaptopCode, FaUsers } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
  const experiences = [
    {
      title: "Undergraduate Machine Learning Research Assistant",
      company: "University of Colorado Boulder",
      period: "March 2025 – Present",
      icon: <FaMicroscope />,
      logo: "/assets/CU-Boulder-Buffalo-logo.avif",
      responsibilities: [
        "Conducting research on Large Language Model (LLM) interpretability and evaluation under PhD student Amit Kiran Rege",
        "Designing structured tasks to assess model reasoning and decision-making processes",
        "Exploring methods to reduce AI hallucinations and improve explainability in LLMs",
        "Working with Hugging Face libraries and OpenAI models for NLP analysis",
      ],
      tags: ["LLM Research", "NLP", "Hugging Face", "OpenAI"],
    },
    {
      title: "Software Engineer Intern",
      company: "Ryno Industries LLC, Erie, CO",
      period: "April 2023 – August 2023",
      icon: <FaLaptopCode />,
      logo: "/assets/RynoIndustriesLogo_PNG.png",
      responsibilities: [
        "Increased System Scalability for Equipment Orders by 27%",
        "Reduced Data Retrieval Latency for Equipment Specifications by 12.3%",
        "Improved usability and enhanced content related to conveying equipment",
        "Collaborated with cross-functional teams to implement system improvements",
      ],
      tags: ["System Optimization", "Database Performance", "UI/UX Improvements"],
    },
    {
      title: "Member, Society of Professional Hispanic Engineers",
      company: "University of Colorado Boulder",
      period: "September 2023 – Present",
      icon: <FaUsers />,
      logo: "/assets/SHPELeadingHispanicsinSTEM_Sticker1_530x@2x.webp",
      responsibilities: [
        "Enhanced group interactions and proposed new activities to foster engagement",
        "Promoted cultural diversity within the group",
        "Participated in community outreach programs to encourage STEM education",
        "Collaborated with peers on engineering challenges and projects",
      ],
      tags: ["Leadership", "Cultural Diversity", "STEM Education"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black text-white scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/5 via-black to-black z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-white text-center font-inter">Experience</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-gray-300">
            My professional journey in research and industry roles.
          </p>
        </motion.div>

        <div className="relative border-l-2 border-[#9d4edd] pl-8 ml-4 space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-12 mt-2 w-6 h-6 rounded-full bg-[#9d4edd] flex items-center justify-center">
                <span className="text-white text-xs">{experience.icon}</span>
              </div>
              
              <div className="bg-black border border-purple-900/50 rounded-lg shadow-md shadow-purple-500/10 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div className="flex items-start">
                    {experience.logo && (
                      <div className="mr-4 flex-shrink-0">
                        <img 
                          src={experience.logo} 
                          alt={experience.company} 
                          className="w-12 h-auto object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-white font-inter">{experience.title}</h3>
                      <p className="text-gray-400">{experience.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-2 md:mt-0">{experience.period}</p>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-[#9d4edd]/10 text-[#9d4edd] hover:bg-[#9d4edd]/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
