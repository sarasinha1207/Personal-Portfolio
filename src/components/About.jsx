import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { BookOpen, Code, Trophy, GraduationCap } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '15+', icon: Code },
    { label: 'Certifications', value: '5+', icon: BookOpen },
    { label: 'Hackathons', value: '3', icon: Trophy },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading subtitle="Discover" title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I am a passionate Computer Science student with a strong foundation in web development,
              AI/ML, and UI/UX design. I love bridging the gap between engineering and design—combining
              my technical knowledge with my keen eye for design to create beautiful, scalable products.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              When I'm not coding or designing, I enjoy exploring new technologies, participating in
              hackathons, and contributing to open-source communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="glass-card p-6 text-center hover:border-blue-200 transition-colors">
                  <div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    <stat.icon size={24} />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 hover:border-blue-200 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <GraduationCap className="text-blue-600" />
                Education
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-white shadow-sm flex items-center justify-center p-0.5">
                    {/* Replace src with your university logo */}
                    <img src="/images/IITP_logo.png" alt="University Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-slate-800">B.Sc (Hons.) in Computer Science</h5>
                    <p className="text-blue-600 font-medium text-sm mb-1">IIT Patna • 2024 - 2027</p>
                    <p className="text-slate-700 font-semibold text-sm mb-2">CGPA: 9.57 / 10</p>
                    <p className="text-slate-600 text-sm">Focusing on Software Engineering, Data Structures, and AI.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-white shadow-sm flex items-center justify-center p-0.5">
                    {/* Replace src with your school logo */}
                    <img src="/images/School_logo.png" alt="School Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-slate-800">Class XII (Senior Secondary)</h5>
                    <p className="text-indigo-500 font-medium text-sm mb-1">Bal Bharati Public School, Brij Vihar • 2022 - 2023</p>
                    <p className="text-slate-700 font-semibold text-sm mb-2">Percentage: 87.6%</p>
                    <p className="text-slate-600 text-sm">Science and Mathematics stream.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-white shadow-sm flex items-center justify-center p-0.5">
                    {/* Replace src with your high school logo */}
                    <img src="/images/School_logo.png" alt="High School Logo" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg text-slate-800">Class X (High School)</h5>
                    <p className="text-sky-500 font-medium text-sm mb-1">Bal Bharati Public School, Brij Vihar • 2019 - 2020</p>
                    <p className="text-slate-700 font-semibold text-sm mb-2">Percentage: 93.2%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100/50 hover:border-blue-200 transition-colors">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Core Interests</h4>
              <div className="flex flex-wrap gap-3">
                {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Full-stack Web Dev', 'UI/UX Design', 'Cloud Computing'].map((interest, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-700 shadow-sm border border-slate-100">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
