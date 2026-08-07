function HowItWorks() {
  const steps = [
    {
      icon: "👤",
      title: "Create Account",
      desc: "Sign up in seconds and create your PrepWise profile.",
    },
    {
      icon: "📄",
      title: "Upload Resume",
      desc: "Upload your resume and receive AI-powered suggestions.",
    },
    {
      icon: "🤖",
      title: "Practice Interviews",
      desc: "Take AI mock interviews and improve your confidence.",
    },
    {
      icon: "🎯",
      title: "Get Placed",
      desc: "Track your progress and land your dream job.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Start Your Placement Journey
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500">
            PrepWise makes placement preparation simple with four easy
            steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-slate-50 rounded-3xl p-8 text-center shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 mx-auto mt-6 rounded-full bg-blue-100 flex items-center justify-center text-4xl">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-500 leading-7">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;