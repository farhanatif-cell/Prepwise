function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h2 className="text-3xl font-bold text-center">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Login to your PrepWise account
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;