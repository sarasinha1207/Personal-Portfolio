import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { ExternalLink, Code2 } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: 'ElectionGuide AI',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?q=80&w=800&auto=format&fit=crop',
    description: 'A smart assistant for first-time voters using React and TailwindCSS. Features a decision-based chatbot flow.',
    tech: ['React', 'Tailwind', 'AI'],
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'HabitArc Productivity',
    category: 'Full Stack',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop',
    description: 'A gamified habit tracker with a 12-month timeline heatmap and mercy system logic.',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Smart Stadium Assistant',
    category: 'Frontend',
    image: 'https://images.unsplash.com/photo-1508344928928-7165b67de128?q=80&w=800&auto=format&fit=crop',
    description: 'Real-time crowd management and optimal route navigation dashboard for large stadiums.',
    tech: ['React', 'Tailwind', 'Vite'],
    github: '#',
    live: '#'
  },
  {
    id: 4,
    title: 'AI Image Generator',
    category: 'AI/ML',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
    description: 'Text-to-image generation app using deep learning models with a modern UI.',
    tech: ['Python', 'TensorFlow', 'React'],
    github: '#',
    live: '#'
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Frontend', 'Full Stack', 'AI/ML'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Portfolio" title="Featured Projects" />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' 
                  : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="glass-card overflow-hidden group rounded-2xl"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-6 h-12 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                    <a href={project.github} className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                      <Code2 size={18} /> Code
                    </a>
                    <a href={project.live} className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
