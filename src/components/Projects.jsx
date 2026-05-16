import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink, Code2, CheckCircle2 } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'ElectionGuide AI',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop',
    description: 'A smart assistant for first-time voters using React and TailwindCSS. Features a decision-based chatbot flow to simplify the voting process.',
    features: [
      'Interactive chatbot for personalized voting guidance.',
      'Decision-making engine for voter eligibility.',
      'Real-time progress tracking dashboard.'
    ],
    tech: ['React', 'Tailwind', 'Gemini API'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'HabitArc Productivity',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
    description: 'A gamified habit tracker with a 12-month timeline heatmap and mercy system logic to keep users motivated and productive.',
    features: [
      '12-month heatmap visualization for habit tracking.',
      'Mercy system logic for streak preservation.',
      'Global state management for synced counters.'
    ],
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Smart Stadium Assistant',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=800&auto=format&fit=crop',
    description: 'Real-time crowd management and optimal route navigation dashboard for large stadiums, providing live telemetry data.',
    features: [
      'Real-time crowd management and analytics.',
      'AI-driven optimal route navigation.',
      'Live waiting time tracking and alerts.'
    ],
    tech: ['React', 'Tailwind', 'Vite'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'AI/ML', 'Full Stack', 'Frontend', 'Travel', 'EdTech'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="A showcase of innovative solutions and technical excellence" title="Featured Projects" />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                filter === cat 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/30' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute inset-0 bg-blue-100 rounded-2xl transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-white">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto aspect-video object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                      <div className="absolute top-4 right-4">
                        <span className="bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                    <p className="text-slate-600 text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      <a 
                        href={project.github} 
                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
                      >
                        <Code2 size={18} /> GitHub
                      </a>
                      <a 
                        href={project.live} 
                        className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-700 font-medium rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-700 transition-colors shadow-sm"
                      >
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-20 text-slate-500"
              >
                No projects found in this category.
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
