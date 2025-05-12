import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/LogIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("loggedInUser", JSON.stringify(data.user));
        localStorage.setItem("userToken", data.token);
        alert("Login Successful!");

        navigate("/");
      } else {
        alert(data.message || "Invalid credentials. Try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Unable to login. Please check your backend.");
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="login-form">
          <h5 className="card-title">Login</h5>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn-primary">
              LogIn
            </button>

            <div className="forgot-password">
              <Link to="/forgotPassword">Forgot Password?</Link>
            </div>

            <div className="sign-up">
              Don't have an account? <Link to="/signup">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
