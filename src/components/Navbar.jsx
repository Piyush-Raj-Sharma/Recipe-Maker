import { NavLink } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `px-3 py-1 text-sm font-medium rounded transition duration-150 border-b-2 focus-visible:outline focus-visible:outline-2 ${
      isActive
        ? "border-violet-400 text-violet-300"
        : "border-transparent text-gray-200 hover:text-violet-400 hover:border-violet-400"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full px-[8%] z-50 backdrop-blur-md bg-white/5 border-b border-white/10 shadow-md rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-y-4">
        <h1 className="text-xl font-bold text-white tracking-wide">
          🍲 RecipeHub
        </h1>

        <div className="flex gap-4 items-center flex-wrap">
          <NavLink to="/" className={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/recipe" className={linkStyle}>
            Recipes
          </NavLink>
          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>
          <NavLink
            to="/create-recipe"
            className="bg-violet-500/80 hover:bg-violet-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg transition duration-200 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-violet-400"
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
