import { useEffect, useState } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchPage } from "./pages/SearchPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate("/welcome");
  //   }
  // }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/welcome");
  };

  return (
    <div>
      {isLoggedIn && <NavBar onLogout={handleLogout} />}
      <Link to="/"></Link>
      <Routes>
        <Route
          path="/welcome"
          element={
            !isLoggedIn ? (
              <WelcomePage isLoggedIn={isLoggedIn} logout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={isLoggedIn ? <SearchPage /> : <Navigate to="/welcome" />}
        />
        <Route
          path="/login"
          element={
            !isLoggedIn ? (
              <LoginPage onLogin={handleLogin} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" />}
        />
        <Route
          path="/favorites"
          element={isLoggedIn ? <FavoritesPage /> : <Navigate to="/welcome" />}
        />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </div>
  );
}

export default App;
