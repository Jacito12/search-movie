// App.jsx
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { MoviesHome } from "./pages/MoviesHome";

export const App = () => {
  return (
    <>
      <Navbar />
      <MoviesHome />
    </>
  );
};