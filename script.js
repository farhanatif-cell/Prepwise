
  const QUESTIONS = [
    { id: 1, topic: "Arrays & Strings", text: "Given an array of numbers, find two that add up to a target value.", keywords: ["hash", "index", "target"] },
    { id: 2, topic: "Behavioral", text: "Tell me about a time you disagreed with a teammate.", keywords: ["listened", "compromise", "resolved"] },
    { id: 3, topic: "SQL & Databases", text: "How would you find the second highest salary in a table?", keywords: ["subquery", "order by", "max"] },
    { id: 4, topic: "System Design", text: "How would you design a simple URL shortener?", keywords: ["database", "hash", "cache"] },
  ];

  
  let sessionsCompleted = 0;
  let questionsAnswered = 0;
  let topicScores = {}; 

  let currentSet = [];
  let currentIndex = 0;
  let currentAnswers = [];
  let timeLeft = 60;
  let timerInterval = null;

  
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => goToPage(btn.dataset.page));
  });

  function goToPage(pageId) {
    document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");

    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    document.querySelector(`.nav-btn[data-page="${pageId}"]`).classList.add("active");

    if (pageId === "dashboard") renderDashboard();
  }

  
  function renderQuestionBank() {
    const list = document.getElementById("question-list");
    list.innerHTML = "";
    QUESTIONS.forEach((q) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
        <span class="question-tag">${q.topic}</span>
        <p>${q.text}</p>
      `;
      list.appendChild(div);
    });
  }
  renderQuestionBank();

 
  function startInterview() {
    currentSet = QUESTIONS.slice(0, 3); // just take the first 3 for now
    currentIndex = 0;
    currentAnswers = [];

    document.getElementById("interview-setup").style.display = "none";
    document.getElementById("interview-summary").style.display = "none";
    document.getElementById("interview-question").style.display = "block";

    showQuestion();
  }

  function showQuestion() {
    const q = currentSet[currentIndex];
    document.getElementById("q-number").textContent = currentIndex + 1;
    document.getElementById("q-total").textContent = currentSet.length;
    document.getElementById("q-text").textContent = q.text;
    document.getElementById("answer-box").value = "";

    timeLeft = 60;
    document.getElementById("timer-display").textContent = timeLeft;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("timer-display").textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        submitAnswer(); // auto-submit when time runs out
      }
    }, 1000);
  }

  function submitAnswer() {
    clearInterval(timerInterval);
    const q = currentSet[currentIndex];
    const answer = document.getElementById("answer-box").value;
    const score = scoreAnswer(answer, q.keywords);

    currentAnswers.push({ topic: q.topic, score });
    questionsAnswered++;

    // save score under this topic for the dashboard later
    if (!topicScores[q.topic]) topicScores[q.topic] = [];
    topicScores[q.topic].push(score);

    if (currentIndex + 1 < currentSet.length) {
      currentIndex++;
      showQuestion();
    } else {
      finishInterview();
    }
  }

  function scoreAnswer(answer, keywords) {
    const text = answer.toLowerCase();
    if (!text.trim()) return 0;
    const matches = keywords.filter((k) => text.includes(k)).length;
    const keywordScore = Math.min(1, matches / Math.max(1, keywords.length * 0.5));
    const lengthScore = Math.min(1, text.split(" ").length / 30);
    return Math.round((keywordScore * 0.7 + lengthScore * 0.3) * 100);
  }

  function finishInterview() {
    sessionsCompleted++;
    document.getElementById("stat-sessions").textContent = sessionsCompleted;
    document.getElementById("stat-questions").textContent = questionsAnswered;

    const avg = Math.round(
      currentAnswers.reduce((sum, a) => sum + a.score, 0) / currentAnswers.length
    );

    document.getElementById("interview-question").style.display = "none";
    document.getElementById("interview-summary").style.display = "block";
    document.getElementById("summary-score").textContent = avg;

    const details = document.getElementById("summary-details");
    details.innerHTML = "";
    currentAnswers.forEach((a) => {
      const p = document.createElement("p");
      p.textContent = `${a.topic}: ${a.score}%`;
      details.appendChild(p);
    });
  }

  function resetInterview() {
    document.getElementById("interview-summary").style.display = "none";
    document.getElementById("interview-setup").style.display = "block";
  }

  function renderDashboard() {
    const chart = document.getElementById("chart");
    const noDataMsg = document.getElementById("no-data-msg");
    chart.innerHTML = "";

    const topics = Object.keys(topicScores);
    if (topics.length === 0) {
      noDataMsg.style.display = "block";
      return;
    }
    noDataMsg.style.display = "none";

    topics.forEach((topic) => {
      const scores = topicScores[topic];
      const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);

      const row = document.createElement("div");
      row.className = "bar-row";
      row.innerHTML = `
        <div class="bar-label">${topic}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${avg}%; background:${avg >= 60 ? "#7fb69a" : "#e2725b"};"></div>
        </div>
        <div class="bar-score">${avg}%</div>
      `;
      chart.appendChild(row);
    });
  }