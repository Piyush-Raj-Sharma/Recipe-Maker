import { Link } from "react-router-dom";
import { TimerIcon, UserRound, UtensilsCrossed } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  const { title, description, cookingTime, chef, id, image, category } = recipe;

  return (
    <Link
      to={`/recipe/details/${id}`}
      className="group w-[260px] sm:w-[280px] bg-gradient-to-br from-[#2a2a3d] to-[#1e1e2f] rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-purple-500 transition-all duration-300 hover:scale-105"
    >
      {/* Image */}
      <div className="h-44 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <span className="absolute top-2 left-2 bg-purple-800/80 text-purple-200 text-[11px] font-semibold px-3 py-1 rounded-full flex items-center gap-1 backdrop-blur-md shadow-sm">
          <UtensilsCrossed size={12} />
          {category || "Recipe"}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 text-white flex flex-col justify-between h-[160px]">
        {/* Title */}
        <h3 className="text-lg font-bold truncate mb-1">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-2 mb-3">
          {description?.slice(0, 100) || "No description"}...
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <UserRound size={14} className="text-purple-300" />
            {chef}
          </span>
          <span className="flex items-center gap-1">
            <TimerIcon size={14} className="text-purple-300" />
            {cookingTime} mins
          </span>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
