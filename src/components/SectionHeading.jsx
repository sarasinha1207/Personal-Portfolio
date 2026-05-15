export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">
        {subtitle}
      </h2>
      <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
        {title}
      </h3>
      <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
    </div>
  );
}
