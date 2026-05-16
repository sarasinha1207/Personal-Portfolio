export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        {title}
      </h3>
      <h2 className="text-lg font-medium text-slate-600">
        {subtitle}
      </h2>
    </div>
  );
}
