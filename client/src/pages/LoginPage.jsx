import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthLayout } from "../components/AuthForm/AuthLayout";
import { FormInput } from "../components/AuthForm/FormInput";
import Button from "react-bootstrap/Button";
import "./LoginPage.css";

export const LoginPage = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { username, password } = credentials;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setErrorMessage("");
  };

  const login = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/login", credentials);
      localStorage.setItem("token", data.token);
      onLogin();
      navigate("/");
    } catch (error) {
      setErrorMessage("Invalid username or password. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={login}>
        <h2 className="title-login">Login</h2>
        {errorMessage && <div className="alert alert-danger"></div>}
        <FormInput
          id="username"
          label="Username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          required
          inputClassName="loginsignup-input"
        />

        <FormInput
          id="password"
          label="Password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
          inputClassName="loginsignup-input"
        />
        <Button
          type="submit"
          variant="outline-secondary"
          className="rounded-pill w-100 login-btn"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>
        <div className="text-center mt-3">
          <span>Don't have an account?</span>
          <Link to="/register" className="no-underline ms-2">
            Sign up
          </Link>
          <div>
            <Link to="/welcome" className="no-underline ms-2">
              ←
            </Link>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};
