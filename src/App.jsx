// App.jsx
import { MoviesHome } from "./pages/MoviesHome";
import { Favorites } from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
      <main className="main-content ">
        <Routes>
          <Route path="/" element={<MoviesHome />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
  );
};
