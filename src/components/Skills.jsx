import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Monitor, Database, Palette, Wrench, BrainCircuit, Layers } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Monitor,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion", "React Native", "SaaS UI", "Shadcn/ui", "GSAP"]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Python", "REST APIs", "Authentication", "JWT", "PHP"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "Responsive Design", "Design Systems"]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Testing Library"]
    },
    {
      title: "Generative AI",
      icon: BrainCircuit,
      skills: ["Prompt Engineering", "LangChain", "RAG Pipelines", "OpenAI API", "Gemini", "Pinecone", "FAISS", "LLMs (GPT, LLaMA)", "Vector DBs", "Transformers", "MCP Servers"]
    },
    {
      title: "Other Technologies",
      icon: Layers,
      skills: ["Firebase", "MongoDB", "PostgreSQL", "Supabase"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Technologies I work with" title="Technical Expertise" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-blue-50/70 text-blue-700 rounded-md text-sm font-medium border border-blue-100"
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
