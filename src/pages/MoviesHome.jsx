import React from "react";
import { Card } from "../components/Card";

export const MoviesHome = () => {
  const movies = [
    {
      id: 1,
      title: "Venom: The last dance",
      release_date: "2024",
      url: "https://pics.filmaffinity.com/Venom_El_aultimo_baile-732355701-large.jpg",
    },
    {
      id: 2,
      title: "Sonic The Hedgehog 3",
      release_date: "2024",
      url: "https://m.media-amazon.com/images/M/MV5BMjZjNjE5NDEtOWJjYS00Mjk2LWI1ZDYtOWI1ZWI3MzRjM2UzXkEyXkFqcGc@._V1_.jpg",
    },
    {
      id: 3,
      title: "We Live in Time",
      release_date: "2024",
      url: "https://posterspy.com/wp-content/uploads/2025/01/we-live-in-time-copy-2.jpg",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-16">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
};
