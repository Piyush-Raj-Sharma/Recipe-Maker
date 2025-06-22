import { Link } from "react-router-dom";
import { TimerIcon, UserRound, UtensilsCrossed } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  const { title, description, cookingTime, chef, id, image, category } = recipe;

  return (
    <Link
      to={`/recipe/details/${id}`}
      className="w-[240px] sm:w-[260px] backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform hover:scale-[1.03]"
    >
      {/* Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 text-white">
        {/* Category Tag */}
        <div className="inline-flex items-center gap-1 text-[11px] bg-purple-900/30 text-purple-300 font-medium px-2 py-1 rounded-full">
          <UtensilsCrossed size={12} />
          {category || "Recipe"}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold truncate">{title}</h3>

        {/* Description */}
        <p className="text-sm text-gray-300 line-clamp-2">
          {description?.slice(0, 100) || "No description"}...
        </p>

        {/* Footer: Chef + Time */}
        <div className="flex justify-between items-center pt-2 text-xs text-gray-400">
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
