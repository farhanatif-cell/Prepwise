import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon">
            <span>•••</span>
          </div>
          <span>
            <strong>Prep</strong>Wise
          </span>
        </div>

        <div className="nav-links">
          <a className="active" href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Practice</a>
          <a href="#">Company Packs</a>
          <a href="#">Pricing</a>
          <a href="#">About Us</a>
        </div>

        <div className="nav-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <div className="hero-left">

          <div className="badge">
            <span>✦</span>
            Get Interview Ready. Get Hired.
          </div>

          <h1>
            Practice Smarter.
            <br />
            Crack <span>Interviews.</span>
          </h1>

          <p className="hero-text">
            PrepWise helps you prepare with AI-powered mock interviews,
            curated questions, and instant feedback to boost your confidence
            and performance.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Start Practicing Free
              <span>→</span>
            </button>

            <button className="secondary-btn">
              Explore Features
            </button>
          </div>

          {/* Trust */}
          <div className="trust">
            <div className="avatars">
              <div className="avatar">👨🏻</div>
              <div className="avatar">👨🏽</div>
              <div className="avatar">👨🏼</div>
              <div className="avatar">👩🏻</div>
              <div className="avatar">👩🏼</div>
            </div>

            <div className="rating">
              <div className="stars">★★★★★</div>
              <p>Trusted by 10,000+ students</p>
            </div>
          </div>
        </div>

        {/* Hero Right */}
        <div className="hero-right">

          <div className="dashboard-bg"></div>

          {/* Dashboard */}
          <div className="dashboard">

            <div className="dashboard-header">
              <h3>AI Mock Interview</h3>
              <span className="progress-status">
                In Progress
              </span>
            </div>

            <div className="dashboard-content">

              <div className="circle-container">
                <div className="circle">
                  <strong>75%</strong>
                  <small>Performance</small>
                </div>
              </div>

              <div className="stats">
                <div>
                  <span>Answers</span>
                  <strong>15 / 20</strong>
                </div>

                <div>
                  <span>Confidence</span>
                  <strong>High</strong>
                </div>

                <div>
                  <span>Feedback</span>
                  <strong>Good</strong>
                </div>
              </div>
            </div>

            <div className="recent-title">
              Recent Mock Interview
            </div>

            <div className="recent-card">
              <div className="recent-icon">👤</div>

              <div className="recent-info">
                <strong>Frontend Developer</strong>
                <span>Today · 30 min</span>
              </div>

              <div className="score">85%</div>
            </div>
          </div>

          {/* Person */}
          <div className="person">
            <div className="head">
              <div className="hair"></div>
              <div className="face">
                <span className="eye left"></span>
                <span className="eye right"></span>
                <span className="nose"></span>
                <span className="mouth"></span>
              </div>
            </div>

            <div className="body">
              <div className="shirt"></div>
              <div className="arm left-arm"></div>
              <div className="arm right-arm"></div>
            </div>

            <div className="laptop">
              <div className="laptop-screen">
                <div className="apple-dot"></div>
              </div>
              <div className="keyboard"></div>
            </div>
          </div>

          {/* Plant */}
          <div className="plant">
            <div className="leaf leaf1"></div>
            <div className="leaf leaf2"></div>
            <div className="leaf leaf3"></div>
            <div className="stem"></div>
            <div className="pot"></div>
          </div>

          <div className="cup"></div>
        </div>
      </main>

      {/* Features */}
      <section className="features">

        <Feature
          icon="💬"
          title="AI Mock Interviews"
          text="Real-time AI interviews with smart feedback."
          type="blue"
        />

        <Feature
          icon="📄"
          title="Curated Questions"
          text="Topic-wise questions from top companies."
          type="purple"
        />

        <Feature
          icon="↗"
          title="Performance Analytics"
          text="Track your progress and improve every day."
          type="green"
        />

        <Feature
          icon="💼"
          title="Company Packs"
          text="Prepare for your dream companies."
          type="orange"
        />

      </section>
    </div>
  );
}

function Feature({ icon, title, text, type }) {
  return (
    <div className="feature">
      <div className={`feature-icon ${type}`}>
        {icon}
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default App;