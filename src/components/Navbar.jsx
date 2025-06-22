import { NavLink } from "react-router-dom";
import { PlusCircle } from "lucide-react";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `px-3 py-1 text-sm font-medium rounded transition duration-150 border-b-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF7043] ${
      isActive
        ? "border-[#FF7043] text-[#FF7043]"
        : "border-transparent text-[#3B2F2F] hover:text-[#FF7043] hover:border-[#FFB74D]"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full px-[8%] z-50 bg-[#FFF3E0] shadow-md rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-y-4">
        <h1 className="text-xl font-bold text-[#4E342E] tracking-wide">
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
            className="bg-[#FF7043] text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-[#FFB74D] transition duration-200 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF7043]"
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
