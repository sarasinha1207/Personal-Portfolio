import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add mock submission logic here
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading subtitle="Get In Touch" title="Contact Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Let's talk about your project!</h3>
            <p className="text-slate-600 mb-10 text-lg">
              Feel free to reach out for collaborations, freelance opportunities, or just to say hi. I'm always open to discussing new projects and creative ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase">Email Me At</h4>
                  <a href="mailto:contact@example.com" className="text-lg font-semibold text-slate-900 hover:text-blue-600 transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-500 uppercase">Location</h4>
                  <p className="text-lg font-semibold text-slate-900">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Project Inquiry"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-gradient-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
