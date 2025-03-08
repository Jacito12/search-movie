export const Card = ({ movie }) => {
  const onFavoriteClick = () => {
    alert(`Added "${movie.title}" to favorites!`);
  };

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg shadow-gray-900 text-white movie-card text-center pt-10">
      {/* Imagen de la card */}
      <div className="relative">
        <img
          className="w-72 h-96 object-cover p-2"
          src={movie.url}
          alt={`Poster de ${movie.title}`}
          onError={(e) => {
            // Manejo de errores si la imagen no se carga
            e.currentTarget.src = "https://via.placeholder.com/300x450";
          }}
        />
        {/* Botón de favoritos */}
        <button
          className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 hover:bg-gray-900/75 transition-colors duration-300"
          onClick={onFavoriteClick}
          aria-label="Agregar a favoritos"
        >
          p
        </button>
      </div>

      {/* Contenido de la card */}
      <div className="p-6 movie-info text-white">
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="mb-4">{movie.release_date}</p>
      </div>
    </div>
  );
};