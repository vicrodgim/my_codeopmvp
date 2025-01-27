import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchPage } from "./pages/SearchPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
