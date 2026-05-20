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
    description: 'Ranked in the top 10 globally in an algorithmic coding competition solving complex data structure problems.Ranked in the top 10 globally in an algorithmic coding competition solving complex data structure problems.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=200&auto=format&fit=crop',
    link: '#'
  },
  {
    id: 3,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card flex flex-col overflow-hidden border-t-4 border-t-yellow-400 group hover:shadow-lg transition-all"
            >
              <div className="w-full h-48 shrink-0 bg-slate-50 relative overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-1 items-start">
                <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold rounded-full mb-3">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{item.title}</h3>
                <h4 className="text-md font-semibold text-slate-500 mb-4">{item.organization}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {item.description}
                </p>
                {item.link && (
                  <a href={item.link} className="inline-flex items-center gap-2 px-5 py-2.5 bg-yellow-50 text-yellow-700 font-semibold rounded-lg hover:bg-yellow-100 transition-colors w-full justify-center">
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
