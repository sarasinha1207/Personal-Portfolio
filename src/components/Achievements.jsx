import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink } from 'lucide-react';

const achievementsData = [
  {
    id: 1,
    title: '1st Place - National Hackathon',
    organization: 'InnovateX 2023',
    date: 'Nov 2023',
    description: 'Built a real-time smart stadium assistant application that won out of 200+ participating teams.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=200&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 2,
    title: 'Top 10 - Global Coding Challenge',
    organization: 'CodeFest',
    date: 'Jul 2023',
    description: 'Ranked in the top 10 globally in an algorithmic coding competition solving complex data structure problems.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&auto=format&fit=crop',
    link: '#'
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
              <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col items-start">
                <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full mb-3">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                <h4 className="text-md font-semibold text-slate-500 mb-4">{item.organization}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                {item.link && (
                  <a href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mt-auto">
                    View Details <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
