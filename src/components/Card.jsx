export const Card = ({ movie }) => {
  const onFavoriteClick = () => {
    alert(`Added "${movie.title}" to favorites!`);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg shadow-gray-900 text-white movie-card text-center pt-10">
      <div className="relative">
        <img
          className="w-auto h-auto object-cover p-2"
          src={movie.url}
          alt={`Poster de ${movie.title}`}
        />
        <button
          className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 hover:bg-gray-900/75 transition-colors duration-300"
          onClick={onFavoriteClick}
          aria-label="Agregar a favoritos"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="p-6 movie-info text-white">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="mb-4">{movie.release_date}</p>
      </div>
    </div>
  );
};