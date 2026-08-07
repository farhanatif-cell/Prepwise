function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-5xl mb-5">{icon}</div>

      <h3 className="text-2xl font-bold text-slate-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;