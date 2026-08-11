import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import QuestionBank from "./pages/QuestionBank";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questions" element={<QuestionBank />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">•••</div>

          <span>
            <b>Prep</b>Wise
          </span>
        </div>

        <div className="nav-links">
          <Link className="active" to="/">
            Home
          </Link>

          <a href="#features">Features</a>
          <a href="#practice">Practice</a>
          <a href="#companies">Company Packs</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
        </div>

        <div className="nav-buttons">

          <Link to="/login">
            <button className="login">
              Log In
            </button>
          </Link>

          <Link to="/signup">
            <button className="signup">
              Sign Up
            </button>
          </Link>

        </div>

      </nav>


      {/* HERO */}
      <section className="hero">

        <div className="hero-content">

          <div className="badge">
            ✦ &nbsp; Get Interview Ready. Get Hired.
          </div>

          <h1>
            Practice Smarter.
            <br />
            Crack <span>Interviews.</span>
          </h1>

          <p>
            PrepWise helps you prepare with curated interview
            questions, company-wise practice, mock interviews,
            and performance tracking to boost your confidence.
          </p>

          <div className="hero-buttons">

            <Link to="/signup">
              <button className="primary">
                Start Practicing Free <span>→</span>
              </button>
            </Link>

            <a href="#features">
              <button className="secondary">
                Explore Features
              </button>
            </a>

          </div>

          <div className="trust">

            <div className="avatars">
              <div>👨🏻</div>
              <div>👨🏽</div>
              <div>👨🏼</div>
              <div>👩🏻</div>
              <div>👩🏼</div>
            </div>

            <div>
              <div className="stars">
                ★★★★★
              </div>

              <small>
                Trusted by 10,000+ students
              </small>
            </div>

          </div>

        </div>


        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="visual-background"></div>

          <div className="dashboard">

            <div className="dashboard-top">
              <b>Mock Interview</b>
              <span>In Progress</span>
            </div>

            <div className="dashboard-middle">

              <div className="progress-circle">
                <strong>75%</strong>
                <small>Performance</small>
              </div>

              <div className="stats">

                <div>
                  <span>Questions</span>
                  <b>15 / 20</b>
                </div>

                <div>
                  <span>Confidence</span>
                  <b>High</b>
                </div>

                <div>
                  <span>Score</span>
                  <b>Good</b>
                </div>

              </div>

            </div>

            <h4>
              Recent Mock Interview
            </h4>

            <div className="recent">

              <div className="profile">
                👤
              </div>

              <div>
                <b>Frontend Developer</b>

                <small>
                  Today · 30 min
                </small>
              </div>

              <strong>
                85%
              </strong>

            </div>

          </div>


          {/* PERSON */}
          <div className="person">

            <div className="head"></div>
            <div className="body"></div>
            <div className="arm"></div>

            <div className="laptop">

              <div className="screen">
                <div></div>
              </div>

              <div className="keyboard"></div>

            </div>

          </div>


          {/* PLANT */}
          <div className="plant">

            <div className="leaf one"></div>
            <div className="leaf two"></div>
            <div className="leaf three"></div>

            <div className="stem"></div>

            <div className="pot"></div>

          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section
        className="features"
        id="features"
      >

        <Feature
          icon="💬"
          title="Mock Interviews"
          text="Practice realistic interview questions and improve your answers."
        />

        <Feature
          icon="📄"
          title="Curated Questions"
          text="Practice topic-wise questions commonly asked in interviews."
        />

        <Feature
          icon="↗"
          title="Performance Analytics"
          text="Track your scores and identify areas where you need improvement."
        />

        <Feature
          icon="💼"
          title="Company Packs"
          text="Prepare specifically for interviews at your target companies."
        />

      </section>

    </div>
  );
}


function Feature({ icon, title, text }) {
  return (
    <div className="feature">

      <div className="feature-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}


export default App;