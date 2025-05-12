import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const { token } = useParams();
  let handleSignUp = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/resetPassword/" + token, {
        password,
      })
      .then((result) => {
        if (result.data.status) {
          navigate("/signin");
          alert("password is reset successfully");
        }
        console.log(result.data);
      })
      .catch((err) => console.log("error=======>", err));
  };
  return (
    <div className="container">
      <div className="wrapper d-flex align-items-center justify-content-center h-100">
        <div className="card register-form">
          <div className="card-body">
            <h5 className="card-title text-center">Reset Password</h5>
            <form onSubmit={handleSignUp}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {/* Submit button */}
              <button type="submit" className="btn btn-primary w-100">
                Update Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
