import { useState } from "react";
 
import NavBar from "../Components/NavBar"
import Hero from "../Components/Hero"
import Footer from "../Components/Footer"
import Loader from "../Components/Loader"
import MovieCard from "../Components/MovieCard"

import API from "../Services/api";

function Home() {

  const [prompt, setPrompt] = useState("");
  
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const getRecommendations = async () => {

    if (!prompt) return;

    setLoading(true);

    setError("");

    try {

      const response = await API.post("/recommend", {
        prompt,
      });

      setMovies(response.data.recommendations);

    } catch (err) {

      setError("Failed to fetch recommendations");

    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <NavBar />

      <Hero />

      <div className="max-w-6xl mx-auto px-6">

        {/* Search Section */}

        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-3xl p-6 flex flex-col md:flex-row gap-4 shadow-2xl">

          <input
            type="text"
            placeholder="Enter movie genre or mood..."
            className="flex-1 bg-black border border-gray-700 rounded-2xl px-5 py-4 text-white outline-none focus:border-red-500"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            onClick={getRecommendations}
            className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-2xl font-semibold transition"
          >
            Generate
          </button>

        </div>

        {/* Error */}

        {error && (
          <div className="text-red-500 mt-6 text-center">
            {error}
          </div>
        )}

        {/* Loader */}

        {loading && <Loader />}

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;