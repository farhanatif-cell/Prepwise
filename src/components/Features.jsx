import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Everything You Need to Get Placed
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            PrepWise brings interview preparation, coding practice,
            resume analysis, and progress tracking together in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          <FeatureCard
            icon="🤖"
            title="AI Interviews"
            description="Practice realistic HR and technical interviews powered by AI."
          />

          <FeatureCard
            icon="💻"
            title="Coding Practice"
            description="Solve coding challenges with detailed explanations and tracking."
          />

          <FeatureCard
            icon="📄"
            title="Resume Analyzer"
            description="Get AI-powered suggestions to improve your resume."
          />

          <FeatureCard
            icon="📊"
            title="Progress Tracking"
            description="Monitor your interview performance and placement readiness."
          />

        </div>
        
      </div>
    </section>
  );
}

export default Features;