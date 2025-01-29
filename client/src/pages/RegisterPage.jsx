import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthLayout } from "../components/AuthForm/AuthLayout";
import { FormInput } from "../components/AuthForm/FormInput";
import Button from "react-bootstrap/Button";
import "./RegisterPage.css";

export const RegisterPage = () => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
    setErrorMessage("");
    setSuccessMessage("");
  };

  const { email, username, password } = registrationData;

  const register = async (event) => {
    event.preventDefault();

    if (!email || !password || !username) {
      setErrorMessage("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/register", registrationData);

      setSuccessMessage("Registration was successful! You can now log in.");
      setRegistrationData({ email: "", username: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      setErrorMessage("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={register}>
        <h2 className="title-register">Signup</h2>
        {errorMessage && (
          <div className="alert alert-danger text-center">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="alert alert-success text-center">
            {successMessage}
          </div>
        )}
        <FormInput
          id="email"
          label="Email"
          value={registrationData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          inputClassName="loginsignup-input"
        />
        <FormInput
          id="username"
          label="Username"
          value={registrationData.username}
          onChange={handleChange}
          placeholder="Username"
          required
          inputClassName="loginsignup-input"
        />
        <FormInput
          id="password"
          label="Password"
          value={registrationData.password}
          onChange={handleChange}
          type="password"
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
          {loading ? "Signing up..." : "Sign up"}
        </Button>
        <div className="text-center mt-3">
          <span>Already have an account?</span>
          <Link to="/login" className="no-underline ms-2">
            Login
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
