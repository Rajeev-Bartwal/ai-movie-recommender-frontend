import { FaFilm } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="w-full px-8 py-5 flex justify-between items-center border-b border-gray-800 backdrop-blur-md bg-black/40 sticky top-0 z-50">

      <div className="flex items-center gap-3">
        <FaFilm className="text-red-500 text-3xl" />

        <h1 className="text-2xl font-bold tracking-wide">
          CineAI
        </h1>
      </div>

      <div className="hidden md:flex gap-8 text-gray-300">
        <a href="#" className="hover:text-red-500 transition">
          Home
        </a>

        <a href="#" className="hover:text-red-500 transition">
          Recommendations
        </a>

        <a href="#" className="hover:text-red-500 transition">
          About
        </a>
      </div>

      <button className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl transition">
        Explore
      </button>

    </nav>
  );
};

export default NavBar;