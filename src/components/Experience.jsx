import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Briefcase, ExternalLink } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    organization: 'Tech Innovations Ltd.',
    date: 'Jun 2024 - Present',
    description: 'Developing modern React applications, improving performance by 30%, and collaborating with UI/UX designers to implement pixel-perfect interfaces. Participated in daily stand-ups and code reviews to maintain high code quality standards across the entire development team.',
    link: '#'
  },
  {
    id: 2,
    title: 'Campus Ambassador',
    organization: 'Global Tech Community',
    date: 'Jan 2023 - May 2024',
    description: 'Organized 5+ coding bootcamps and hackathons for 500+ students. Fostered a strong developer community on campus by conducting weekly technical workshops and bringing in industry experts for guest lectures.',
    link: '#'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading subtitle="Professional" title="Experience" />

        <div className="relative mt-12">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-100 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] transform -translate-x-1/2 flex items-center justify-center z-10">
                    <Briefcase size={16} className="text-blue-600" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="glass-card p-6 relative group hover:border-blue-300 bg-white">
                      {/* Arrow pointer */}
                      <div className={`hidden md:block absolute top-5 w-4 h-4 bg-white border-t border-l border-white/40 transform rotate-45 ${
                        isEven ? '-left-2 -border-l' : '-right-2 border-r border-t-0'
                      }`}></div>
                      
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-3">
                        {item.date}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                      <h4 className="text-md font-semibold text-slate-500 mb-4">{item.organization}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.link && (
                        <a href={item.link} className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                          View Details <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
