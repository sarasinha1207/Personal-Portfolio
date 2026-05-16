import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Trophy } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: '1st Place - National Hackathon',
    organization: 'InnovateX 2023',
    date: 'Nov 2023',
    description: 'Built a real-time smart stadium assistant application that won out of 200+ participating teams.',
  },
  {
    id: 2,
    title: 'Top 10 - Global Coding Challenge',
    organization: 'CodeFest',
    date: 'Jul 2023',
    description: 'Ranked in the top 10 globally in an algorithmic coding competition solving complex data structure problems.',
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Milestones" title="Achievements" />

        <div className="space-y-8 mt-12">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 flex flex-col md:flex-row gap-6 items-start border-l-4 border-l-yellow-400"
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center">
                <Trophy size={28} />
              </div>
              <div>
                <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full mb-3">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                <h4 className="text-md font-semibold text-slate-500 mb-4">{item.organization}</h4>
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
