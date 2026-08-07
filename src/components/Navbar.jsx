import Button from "./Button";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-blue-600 cursor-pointer">
          PrepWise
        </h1>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Features
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            AI Interview
          </a>

          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button variant="secondary">Login</Button>
          <Button>Sign Up</Button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;