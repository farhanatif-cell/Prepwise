function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Software Engineer @ TCS",
      text: "PrepWise helped me practice interviews with confidence. I cracked my placement in just two weeks!",
      avatar: "👨‍💻",
    },
    {
      name: "Aisha Khan",
      role: "Frontend Developer @ Infosys",
      text: "The AI interview feedback improved my communication and technical skills tremendously.",
      avatar: "👩‍💼",
    },
    {
      name: "Rohit Das",
      role: "SDE Intern @ Amazon",
      text: "Coding practice, resume analysis, and mock interviews—all in one place. Highly recommended!",
      avatar: "🧑‍💻",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Loved by Students
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-500 leading-8">
            Thousands of students have improved their interview skills,
            cracked coding rounds, and landed their dream jobs using
            PrepWise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >

              {/* Avatar */}
              <div className="text-6xl mb-5">
                {item.avatar}
              </div>

              {/* Review */}
              <p className="text-gray-600 leading-8 flex-grow">
                "{item.text}"
              </p>

              {/* Stars */}
              <div className="mt-8 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              {/* User */}
              <div className="mt-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-gray-500 mt-1">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;