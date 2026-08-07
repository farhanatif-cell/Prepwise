function InterviewCard() {
  return (
    <div className="relative bg-white rounded-3xl shadow-2xl p-8 w-[430px] border border-gray-100">

      {/* AI Badge */}
      <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
        🤖 AI Interview
      </div>

      {/* Chat Bubble */}
      <div className="mt-6 bg-slate-100 rounded-2xl p-4">
        <p className="text-gray-700">
          Tell me about yourself and why you'd like to join our company.
        </p>
      </div>

      {/* Candidate */}
      <div className="mt-6 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl">
          👨‍💻
        </div>

        <div>
          <h3 className="font-bold text-lg">
            Candidate
          </h3>

          <p className="text-gray-500">
            Software Engineer
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8 space-y-4">

        <div>
          <div className="flex justify-between mb-1">
            <span>Communication</span>
            <span>92%</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 w-[92%] bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span>Confidence</span>
            <span>88%</span>
          </div>

          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 w-[88%] bg-green-500 rounded-full"></div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 bg-green-50 rounded-xl p-4 border border-green-200">
        <p className="text-green-700 font-semibold">
          ✅ Interview Score: 90/100
        </p>
      </div>

    </div>
  );
}

export default InterviewCard;