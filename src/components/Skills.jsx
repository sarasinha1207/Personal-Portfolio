import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Monitor, Server, BrainCircuit, PenTool } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Monitor,
      color: "text-blue-600",
      bg: "bg-blue-50",
      skills: ["React.js", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "HTML5/CSS3", "Framer Motion"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      skills: ["Node.js", "Express", "Python", "MongoDB", "SQL", "RESTful APIs"]
    },
    {
      title: "AI/ML",
      icon: BrainCircuit,
      color: "text-purple-600",
      bg: "bg-purple-50",
      skills: ["TensorFlow", "PyTorch", "Data Analysis", "NLP Basics", "Prompt Engineering"]
    },
    {
      title: "Design & Tools",
      icon: PenTool,
      color: "text-pink-600",
      bg: "bg-pink-50",
      skills: ["Figma", "Adobe XD", "Git & GitHub", "Vercel", "Postman", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="What I Do" title="My Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 h-full flex flex-col group hover:border-blue-200"
            >
              <div className={`w-14 h-14 rounded-2xl ${category.bg} ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
