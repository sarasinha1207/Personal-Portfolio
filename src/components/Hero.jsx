import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 z-10">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-blue-600 font-medium tracking-wide uppercase mb-3">Hello, I am</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-900 leading-tight">
              Creative <br className="hidden md:block"/>
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto md:mx-0">
              Computer Science Student | Web Developer | Graphic Designer. <br/>
              I build modern, interactive, and premium web experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                className="bg-gradient-primary px-8 py-3.5 rounded-full font-medium flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              >
                View Projects
                <ArrowRight size={18} />
              </Link>
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-full font-medium flex items-center gap-2 border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-colors w-full sm:w-auto justify-center text-slate-700"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5">
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-slate-500 hover:text-blue-600 transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Image/Graphic */}
        <div className="flex-1 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-600 to-indigo-600">
              <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden border-4 border-white flex items-center justify-center">
                {/* Placeholder graphic, can be replaced with img */}
                <div className="text-6xl text-slate-300 font-heading font-bold">You</div>
              </div>
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass-card p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">UI</div>
              <div className="text-sm font-bold text-slate-800">Design</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">&lt;/&gt;</div>
              <div className="text-sm font-bold text-slate-800">Code</div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
