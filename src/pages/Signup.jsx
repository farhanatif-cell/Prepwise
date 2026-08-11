import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    try {
      const data = await registerUser(formData);

      setMessage(data.message || "Account created successfully!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      // Go to login after successful signup
      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      setMessage(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        {/* LOGO */}
        <div className="auth-logo">

          <div className="auth-logo-icon">
            •••
          </div>

          <span>
            <b>Prep</b>Wise
          </span>

        </div>


        {/* TITLE */}
        <h1>
          Create your account
        </h1>

        <p className="auth-subtitle">
          Start your interview preparation journey today.
        </p>


        {/* SIGNUP FORM */}
        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

          </div>


          <div className="form-group">

            <label>
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
              required
            />

          </div>


          <button
            className="auth-button"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

        </form>


        {/* MESSAGE */}
        {message && (
          <div className="auth-message">
            {message}
          </div>
        )}


        {/* LOGIN */}
        <p className="auth-footer">

          Already have an account?{" "}

          <Link to="/login">
            Log In
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Signup;