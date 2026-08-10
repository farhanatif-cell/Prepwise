import { useEffect, useState } from "react";
import "./QuestionBank.css";

function QuestionBank() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [visibleAnswers, setVisibleAnswers] = useState({});

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    filterQuestions();
  }, [questions, search, category, difficulty]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "http://localhost:5001/api/questions"
      );

      if (!response.ok) {
        throw new Error("Failed to load questions");
      }

      const data = await response.json();

      setQuestions(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterQuestions = () => {
    let result = [...questions];

    if (search.trim()) {
      result = result.filter((item) =>
        item.question
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      result = result.filter(
        (item) => item.category === category
      );
    }

    if (difficulty !== "All") {
      result = result.filter(
        (item) => item.difficulty === difficulty
      );
    }

    setFilteredQuestions(result);
  };

  const toggleAnswer = (id) => {
    setVisibleAnswers((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  const categories = [
    "All",
    ...new Set(questions.map((item) => item.category)),
  ];

  return (
    <div className="question-page">

      <div className="question-container">

        {/* HEADER */}
        <div className="question-header">

          <div>
            <span className="page-label">
              PRACTICE
            </span>

            <h1>Question Bank</h1>

            <p>
              Practice interview questions and improve
              your technical skills.
            </p>
          </div>

          <div className="question-count">
            <strong>{questions.length}</strong>
            <span>Total Questions</span>
          </div>

        </div>


        {/* FILTERS */}
        <div className="filters">

          <div className="search-box">

            <span>⌕</span>

            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>


          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

        </div>


        {/* QUESTIONS */}
        <div className="questions-list">

          {loading && (
            <div className="state-box">
              Loading questions...
            </div>
          )}

          {error && (
            <div className="state-box error">
              {error}
            </div>
          )}

          {!loading &&
            !error &&
            filteredQuestions.length === 0 && (
              <div className="state-box">
                No questions found.
              </div>
            )}


          {filteredQuestions.map((item, index) => (

            <div
              className="question-card"
              key={item._id}
            >

              <div className="question-top">

                <div className="question-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="question-content">

                  <div className="question-tags">

                    <span className="category-tag">
                      {item.category}
                    </span>

                    <span
                      className={`difficulty-tag ${item.difficulty.toLowerCase()}`}
                    >
                      {item.difficulty}
                    </span>

                    {item.company &&
                      item.company !== "General" && (
                        <span className="company-tag">
                          {item.company}
                        </span>
                      )}

                  </div>

                  <h2>
                    {item.question}
                  </h2>

                </div>

              </div>


              {/* ANSWER */}
              {visibleAnswers[item._id] && (
                <div className="answer-box">

                  <div className="answer-title">
                    Answer
                  </div>

                  <p>
                    {item.answer}
                  </p>

                </div>
              )}


              <div className="question-actions">

                <button
                  onClick={() => toggleAnswer(item._id)}
                  className="answer-button"
                >
                  {visibleAnswers[item._id]
                    ? "Hide Answer"
                    : "Show Answer"}
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default QuestionBank;