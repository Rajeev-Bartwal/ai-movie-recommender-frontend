const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-3xl shadow-xl hover:scale-105 hover:border-red-500 transition duration-300">

      <div className="mb-4">
        <span className="bg-red-500 text-sm px-3 py-1 rounded-full">
          AI Recommended
        </span>
      </div>

      <h2 className="text-3xl font-bold mb-4 text-white">
        {movie.movie}
      </h2>

      <p className="text-gray-400 leading-relaxed">
        {movie.reason}
      </p>

    </div>
  );
};

export default MovieCard;