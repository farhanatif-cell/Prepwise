function FAQ() {
  const faqs = [
    {
      question: "Is PrepWise free to use?",
      answer:
        "Yes. You can start using PrepWise for free. Premium features will be available in future plans.",
    },
    {
      question: "How do AI Mock Interviews work?",
      answer:
        "Our AI asks interview questions, analyzes your answers, and provides feedback on communication, confidence, and technical knowledge.",
    },
    {
      question: "Can I upload my resume?",
      answer:
        "Yes. PrepWise analyzes your resume and gives suggestions to improve ATS compatibility and presentation.",
    },
    {
      question: "Does PrepWise include coding practice?",
      answer:
        "Yes. You'll get coding challenges with explanations and progress tracking.",
    },
  ];

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-500">
            Everything you need to know about PrepWise.
          </p>
        </div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;