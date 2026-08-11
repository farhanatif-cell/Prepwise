import { useEffect, useState } from "react";

function QuestionBank() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }

        return response.json();
      })
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Unable to load questions.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >

      {/* HEADER */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >

        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#2563eb",
            fontWeight: "600",
          }}
        >
          ← Back to Home
        </a>

        <h1
          style={{
            marginTop: "30px",
            marginBottom: "10px",
            fontSize: "40px",
            color: "#111827",
          }}
        >
          Question Bank
        </h1>

        <p
          style={{
            color: "#6b7280",
            fontSize: "17px",
          }}
        >
          Practice interview questions and prepare for your next interview.
        </p>


        {/* LOADING */}
        {loading && (
          <div
            style={{
              marginTop: "40px",
              background: "white",
              padding: "30px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            Loading questions...
          </div>
        )}


        {/* ERROR */}
        {error && (
          <div
            style={{
              marginTop: "40px",
              background: "#fee2e2",
              color: "#991b1b",
              padding: "20px",
              borderRadius: "12px",
            }}
          >
            {error}
          </div>
        )}


        {/* QUESTIONS */}
        {!loading && !error && questions.length > 0 && (
          <div
            style={{
              marginTop: "30px",
              display: "grid",
              gap: "20px",
            }}
          >

            {questions.map((question, index) => (
              <div
                key={question._id || index}
                style={{
                  background: "white",
                  padding: "25px",
                  borderRadius: "15px",
                  border: "1px solid #e5e7eb",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
                }}
              >

                <div
                  style={{
                    color: "#2563eb",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  Question {index + 1}
                </div>

                <h2
                  style={{
                    fontSize: "20px",
                    color: "#111827",
                    marginBottom: "15px",
                  }}
                >
                  {question.question || question.text}
                </h2>

                {question.topic && (
                  <span
                    style={{
                      display: "inline-block",
                      background: "#eff6ff",
                      color: "#2563eb",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "13px",
                    }}
                  >
                    {question.topic}
                  </span>
                )}

              </div>
            ))}

          </div>
        )}


        {/* NO QUESTIONS */}
        {!loading && !error && questions.length === 0 && (
          <div
            style={{
              marginTop: "40px",
              background: "white",
              padding: "40px",
              borderRadius: "15px",
              textAlign: "center",
              border: "1px solid #e5e7eb",
            }}
          >

            <h2>
              No questions yet
            </h2>

            <p
              style={{
                color: "#6b7280",
              }}
            >
              Questions will appear here once they are added to the database.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default QuestionBank;