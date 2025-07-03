import { Link, NavLink } from "react-router-dom";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `block md:inline px-4 py-2 text-sm font-medium rounded transition ${
      isActive
        ? "text-violet-600 font-semibold"
        : "text-gray-200 hover:text-violet-400"
    }`;

  return (
    <nav className="bg-[#1e1e2f] border-b border-violet-700 shadow-sm w-full z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/"><h1 className="text-xl font-bold text-white tracking-wide">🍲 RecipeHub</h1></Link>

        {/* Hamburger for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-[#1e1e2f] md:bg-transparent md:mt-0 mt-4 p-4 md:p-0 border-t md:border-none border-violet-700`}
        >
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/recipe" className={linkStyle}>
            Recipes
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink to="/favourite-recipes" className={linkStyle}>
            Favourite
          </NavLink>
          <NavLink
            to="/create-recipe"
            className="mt-3 md:mt-0 inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-md transition"
          >
            <PlusCircle size={18} />
            Create Recipe
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
