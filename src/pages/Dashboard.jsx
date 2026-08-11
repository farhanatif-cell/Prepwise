import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">
            •••
          </div>

          <span>
            <b>Prep</b>Wise
          </span>
        </div>


        <div className="sidebar-menu">

          <Link
            to="/dashboard"
            className="menu-item active"
          >
            <span>⌂</span>
            Dashboard
          </Link>


          <Link
            to="/questions"
            className="menu-item"
          >
            <span>▤</span>
            Question Bank
          </Link>

        </div>


        <div className="sidebar-bottom">

          <button
            className="menu-item logout"
            onClick={handleLogout}
          >
            <span>↪</span>
            Logout
          </button>

        </div>

      </aside>


      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>

            <p className="welcome-small">
              Welcome back,
            </p>

            <h1>
              {user?.name || "Student"}!
            </h1>

          </div>


          <div className="profile">

            <div className="avatar">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

          </div>

        </header>


        {/* QUICK START */}
        <section className="quick-start">

          <div>

            <span className="dashboard-badge">
              PREPWISE
            </span>

            <h2>
              Ready to practice?
            </h2>

            <p>
              Improve your interview skills by practicing
              questions from our interview question bank.
            </p>

            <Link to="/questions">
              <button className="start-button">
                Start Practicing →
              </button>
            </Link>

          </div>


          <div className="quick-icon">
            ✦
          </div>

        </section>


        {/* SIMPLE STATS */}
        <section className="stats-grid">

          <div className="stat-card">

            <div className="stat-icon">
              ▤
            </div>

            <span>
              Question Bank
            </span>

            <strong>
              Practice
            </strong>

            <small>
              Interview questions
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              ✓
            </div>

            <span>
              Topics
            </span>

            <strong>
              Multiple
            </strong>

            <small>
              Different subjects
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              ★
            </div>

            <span>
              Difficulty
            </span>

            <strong>
              Easy → Hard
            </strong>

            <small>
              Learn progressively
            </small>

          </div>


          <div className="stat-card">

            <div className="stat-icon">
              ↗
            </div>

            <span>
              Goal
            </span>

            <strong>
              Get Ready
            </strong>

            <small>
              For your interview
            </small>

          </div>

        </section>


        {/* LOWER CONTENT */}
        <section className="dashboard-grid">


          {/* QUESTION BANK CARD */}
          <div className="dashboard-card">

            <div className="card-heading">

              <div>

                <h3>
                  Question Bank
                </h3>

                <p>
                  Practice commonly asked interview questions.
                </p>

              </div>

              <Link to="/questions">
                View All →
              </Link>

            </div>


            <div className="interview-row">

              <div className="interview-icon">
                JS
              </div>

              <div className="interview-info">

                <strong>
                  JavaScript
                </strong>

                <span>
                  Programming questions
                </span>

              </div>

              <Link
                to="/questions"
                className="score"
              >
                Practice
              </Link>

            </div>


            <div className="interview-row">

              <div className="interview-icon">
                RE
              </div>

              <div className="interview-info">

                <strong>
                  React
                </strong>

                <span>
                  Frontend questions
                </span>

              </div>

              <Link
                to="/questions"
                className="score"
              >
                Practice
              </Link>

            </div>


            <div className="interview-row">

              <div className="interview-icon">
                DS
              </div>

              <div className="interview-info">

                <strong>
                  Data Structures
                </strong>

                <span>
                  DSA interview questions
                </span>

              </div>

              <Link
                to="/questions"
                className="score"
              >
                Practice
              </Link>

            </div>

          </div>


          {/* PREPARATION CARD */}
          <div className="dashboard-card">

            <div className="card-heading">

              <div>

                <h3>
                  Prepare for Interviews
                </h3>

                <p>
                  Choose a topic and start learning.
                </p>

              </div>

            </div>


            <div className="progress-item">

              <div>
                <span>
                  JavaScript
                </span>

                <strong>
                  Beginner
                </strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "70%" }}></div>
              </div>

            </div>


            <div className="progress-item">

              <div>
                <span>
                  React
                </span>

                <strong>
                  Beginner
                </strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "55%" }}></div>
              </div>

            </div>


            <div className="progress-item">

              <div>
                <span>
                  Data Structures
                </span>

                <strong>
                  Practice
                </strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "45%" }}></div>
              </div>

            </div>


            <Link to="/questions">
              <button className="start-button">
                Open Question Bank
              </button>
            </Link>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;