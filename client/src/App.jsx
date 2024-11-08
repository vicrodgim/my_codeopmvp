import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { SearchPage } from "./pages/SearchPage";
// import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  return (
    <div>
      <NavBar />
      <SearchPage />
      {/* <FavoritesPage /> */}
    </div>
  );
}

export default App;
