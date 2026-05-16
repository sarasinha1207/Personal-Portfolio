import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: 'B.Tech in Computer Science',
    institution: 'University Name',
    date: '2022 - 2026',
    description: 'Focusing on Software Engineering, Data Structures, and Artificial Intelligence.',
  },
  {
    id: 2,
    degree: 'High School',
    institution: 'School Name',
    date: '2020 - 2022',
    description: 'Science and Mathematics stream. Graduated with honors.',
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Academic" title="Education" />

        <div className="space-y-8 mt-12">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.degree}</h3>
                <h4 className="text-md font-semibold text-slate-500 mb-4">{item.institution}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
