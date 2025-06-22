import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { TimerIcon, UserRound, ArrowLeft, UtensilsCrossed } from "lucide-react";

const SingleRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(RecipeContext);

  const recipe = data.find((item) => item.id === id);

  if (!recipe) {
    return (
      <div className="text-center py-20 text-red-400 font-semibold text-lg">
        ❌ Recipe not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-1 text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-purple-300 hover:text-purple-200 transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      {/* Glassmorphism Card */}
      <div className="bg-white/10 border border-white/10 backdrop-blur-lg shadow-xl rounded-2xl overflow-hidden">
        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 text-xs bg-purple-500/30 text-purple-200 font-semibold px-3 py-1 rounded-full">
            <UtensilsCrossed size={14} />
            {recipe.category || "Uncategorized"}
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-white">{recipe.title}</h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <span className="flex items-center gap-2">
              <UserRound size={16} className="text-purple-300" />
              {recipe.chef}
            </span>
            <span className="flex items-center gap-2">
              <TimerIcon size={16} className="text-purple-300" />
              {recipe.cookingTime} mins
            </span>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-gray-200">
            {recipe.description}
          </p>

          {/* Ingredients */}
          <div>
            <h3 className="text-md font-semibold text-white mb-1">Ingredients:</h3>
            <p className="text-sm text-gray-300">{recipe.ingredients}</p>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-md font-semibold text-white mb-1">Instructions:</h3>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
