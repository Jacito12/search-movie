export const Card = ({ movie }) => {
  const onFavoriteClick = () => {
    alert("clicked");
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg shadow-gray-900 text-white movie-card text-center">
      {/* Imagen de la card */}
      <div className="movie-poster">
        <img
          className="w-full h-48 object-cover"
          src={movie.url}
          alt={`Poster de ${movie.title}`}
        />
        <div className="movie-overlay">
          <button
            className="favorite-btn"
            onClick={onFavoriteClick}
            aria-label="Agregar a favoritos"
          >
            ♥
          </button>
        </div>
      </div>

      {/* Contenido de la card */}
      <div className="p-6 movie-info text-white">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="mb-4">{movie.release_date}</p> {/* Corregido el typo */}
      </div>
    </div>
  );
};