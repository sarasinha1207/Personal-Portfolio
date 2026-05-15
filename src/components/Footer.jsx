import { Code, Briefcase, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-white mb-2">Portfolio.</h2>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <Code size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <Briefcase size={20} />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="mailto:contact@example.com" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
