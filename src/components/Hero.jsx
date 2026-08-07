import Button from "./Button";
import InterviewCard from "./InterviewCard";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-white pt-44 pb-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm">
            🚀 AI Powered Placement Preparation
          </span>

          <h1 className="mt-6 text-6xl font-extrabold leading-tight text-slate-900">
            Crack Your Dream Job
            <br />
            with <span className="text-blue-600">AI Mock Interviews</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            Practice realistic AI interviews, improve your resume,
            solve coding challenges, and track your placement journey
            from one modern platform.
          </p>

          <div className="mt-8 flex gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">Watch Demo</Button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-blue-600">5000+</h2>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">10K+</h2>
              <p className="text-gray-500">Mock Interviews</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">95%</h2>
              <p className="text-gray-500">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

          <div className="relative">
            <InterviewCard />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;