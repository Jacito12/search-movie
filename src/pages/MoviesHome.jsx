import React, { useEffect, useState } from "react";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { SearchMovie } from "../components/SearchMovie";
import { searchMovies, getPopularMovies } from "../services/api";

export const MoviesHome = () => {
  const [movies, setMovies] = useState([]); // Estado para almacenar las películas
  const [loading, setLoading] = useState(false); // Estado para manejar la carga

  useEffect(() => {
    const fetchPopularMovies = async () => {
      setLoading(true);
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);
  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
      return;
    }

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchTerm);
      setMovies(searchResults);
    } catch (error) {
      console.error("Error searching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <SearchMovie onSearch={handleSearch} />
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-white">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-16 p-8">
          {movies.map((movie) => (
            <Card
              key={movie.id}
              movie={{
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
              }}
            />
          ))}
        </div>
      )}
      
    </>
  );
};
