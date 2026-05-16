import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ShieldCheck, ExternalLink } from 'lucide-react';

const certificationsData = [
  {
    id: 1,
    title: 'Meta Frontend Developer Professional Certificate',
    organization: 'Coursera',
    date: 'Dec 2023',
    description: 'Completed comprehensive training on React, Advanced UI, and Capstone projects.',
    link: '#'
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional Certificate',
    organization: 'Coursera',
    date: 'Aug 2023',
    description: 'Learned data cleaning, analysis, and visualization using SQL and R.',
    link: '#'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Verified Skills" title="Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {certificationsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-blue-200"
            >
              <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={32} />
              </div>
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-3">
                {item.date}
              </span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <h4 className="text-sm font-semibold text-slate-500 mb-4">{item.organization}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mt-auto mb-6">
                {item.description}
              </p>
              {item.link && (
                <a href={item.link} className="flex items-center justify-center gap-2 px-6 py-2.5 bg-indigo-50 text-indigo-700 font-medium rounded-lg hover:bg-indigo-100 transition-colors w-full">
                  View Credential <ExternalLink size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
