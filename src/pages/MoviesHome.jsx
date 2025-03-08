import React from "react";
import { Card } from "../components/Card";

export const MoviesHome = () => {
  const movies = [
    {
      id: 1,
      title: "Hello",
      release_date: "2024",
      url: "https://via.placeholder.com/300x450",
    },
    {
      id: 2,
      title: "Hello",
      release_date: "2024",
      url: "https://via.placeholder.com/300x450",
    },
    {
      id: 3,
      title: "Hello",
      release_date: "2024",
      url: "https://via.placeholder.com/300x450",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
};
