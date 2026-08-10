import "./Dashboard.css";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.reload();
  };

  return (
    <div className="dashboard-page">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="dashboard-logo">
          <div className="dashboard-logo-icon">•••</div>
          <span>
            <b>Prep</b>Wise
          </span>
        </div>

        <div className="sidebar-menu">

          <button className="menu-item active">
            <span>⌂</span>
            Dashboard
          </button>

          <button className="menu-item">
            <span>◈</span>
            Mock Interviews
          </button>

          <button className="menu-item">
            <span>▤</span>
            Question Bank
          </button>

          <button className="menu-item">
            <span>◷</span>
            Practice
          </button>

          <button className="menu-item">
            <span>▣</span>
            Company Packs
          </button>

          <button className="menu-item">
            <span>↗</span>
            Analytics
          </button>

        </div>

        <div className="sidebar-bottom">

          <button className="menu-item">
            <span>⚙</span>
            Settings
          </button>

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

        <header className="dashboard-header">

          <div>
            <p className="welcome-small">Welcome back,</p>

            <h1>
              {user?.name || "Student"}!
            </h1>
          </div>

          <div className="profile">

            <div className="notification">
              ♢
            </div>

            <div className="avatar">
              {user?.name?.charAt(0).toUpperCase() || "U"}
            </div>

          </div>

        </header>


        {/* QUICK START */}
        <section className="quick-start">

          <div>
            <span className="dashboard-badge">
              AI POWERED
            </span>

            <h2>
              Ready for your next interview?
            </h2>

            <p>
              Practice with an AI-powered mock interview
              and get instant feedback on your performance.
            </p>

            <button className="start-button">
              Start Mock Interview →
            </button>
          </div>

          <div className="quick-icon">
            ✦
          </div>

        </section>


        {/* STATS */}
        <section className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon">◈</div>
            <span>Mock Interviews</span>
            <strong>12</strong>
            <small>+3 this week</small>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <span>Questions Practiced</span>
            <strong>148</strong>
            <small>+24 this week</small>
          </div>

          <div className="stat-card">
            <div className="stat-icon">↗</div>
            <span>Average Score</span>
            <strong>82%</strong>
            <small>+8% improvement</small>
          </div>

          <div className="stat-card">
            <div className="stat-icon">◷</div>
            <span>Practice Time</span>
            <strong>6.5h</strong>
            <small>This month</small>
          </div>

        </section>


        {/* LOWER CONTENT */}
        <section className="dashboard-grid">

          {/* RECENT INTERVIEWS */}
          <div className="dashboard-card">

            <div className="card-heading">
              <div>
                <h3>Recent Interviews</h3>
                <p>Your latest mock interview results</p>
              </div>

              <button>View All →</button>
            </div>

            <div className="interview-row">

              <div className="interview-icon">
                FE
              </div>

              <div className="interview-info">
                <strong>Frontend Developer</strong>
                <span>Today · 30 minutes</span>
              </div>

              <div className="score">
                85%
              </div>

            </div>

            <div className="interview-row">

              <div className="interview-icon">
                JS
              </div>

              <div className="interview-info">
                <strong>JavaScript Interview</strong>
                <span>Yesterday · 25 minutes</span>
              </div>

              <div className="score">
                78%
              </div>

            </div>

            <div className="interview-row">

              <div className="interview-icon">
                DS
              </div>

              <div className="interview-info">
                <strong>Data Structures</strong>
                <span>Aug 8 · 40 minutes</span>
              </div>

              <div className="score">
                82%
              </div>

            </div>

          </div>


          {/* PROGRESS */}
          <div className="dashboard-card">

            <div className="card-heading">
              <div>
                <h3>Preparation Progress</h3>
                <p>Keep improving your skills</p>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>JavaScript</span>
                <strong>82%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "82%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>React</span>
                <strong>74%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "74%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>Data Structures</span>
                <strong>65%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "65%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div>
                <span>System Design</span>
                <strong>48%</strong>
              </div>

              <div className="progress-bar">
                <div style={{ width: "48%" }}></div>
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;