function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              PrepWise
            </h2>

            <p className="mt-5 leading-7">
              AI-powered placement preparation platform helping
              students ace interviews and coding rounds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Product
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Testimonials</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <p>Email: support@prepwise.com</p>
            <p className="mt-2">Phone: +91 86388 39750</p>
            <p className="mt-2">Guwahati, Assam</p>
          </div>

        </div>

        <hr className="my-10 border-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p>
            © 2026 PrepWise. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">GitHub</a>
            <a href="#" className="hover:text-white">LinkedIn</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;