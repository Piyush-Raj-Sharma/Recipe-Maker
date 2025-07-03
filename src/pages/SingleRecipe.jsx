import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { RecipeContext } from "../context/RecipeContext";
import {
  TimerIcon,
  UserRound,
  ArrowLeft,
  UtensilsCrossed,
  CalendarClock,
} from "lucide-react";
import UpdateDrawer from "../components/UpdateDrawer";
import { Heart, HeartOff } from "lucide-react";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setData } = useContext(RecipeContext);
  const [showUpdateDrawer, setShowUpdateDrawer] = useState(false);

  const recipe = data.find((item) => item.id === id);
  const [isFavourite, setIsFavourite] = useState(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    return favs.includes(id);
  });

  if (!recipe) {
    return (
      <div className="text-center py-20 text-red-400 font-semibold text-lg">
        ❌ Recipe not found
      </div>
    );
  }

  const formattedDate = new Date(recipe.createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const deleteHandler = () => {
    const filterData = data.filter((recipe) => recipe.id != id);
    setData(filterData);
    localStorage.setItem("recipe", JSON.stringify(filterData));
    toast.error("Recipe deleted");
    navigate("/recipe");
  };

const toggleFavourite = () => {
  const existingFavs = JSON.parse(localStorage.getItem("favourites")) || [];
  let updatedFavs;

  if (isFavourite) {
    updatedFavs = existingFavs.filter((fav) => fav.id !== id);
    toast.info("Removed from favourites");
  } else {
    const { id, title, description, image, cookingTime, chef, category } = recipe;

    const newFav = {
      id,
      title,
      description,
      image,
      cookingTime,
      chef,
      category,
    };

    const isAlreadyAdded = existingFavs.some((fav) => fav.id === id);
    updatedFavs = isAlreadyAdded ? existingFavs : [...existingFavs, newFav];

    if (!isAlreadyAdded) {
      toast.success("Added to favourites");
    }
  }

  localStorage.setItem("favourites", JSON.stringify(updatedFavs));
  setIsFavourite(!isFavourite);
};


  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-white">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-purple-300 hover:text-purple-200 transition"
      >
        <ArrowLeft size={18} /> Back
      </button>

      <div className="grid md:grid-cols-2 gap-10 items-start bg-white/5 border border-white/10 hover:border-purple-500 rounded-2xl backdrop-blur p-6 transition-colors duration-300">
        {/* Left - Image */}
        <div className="relative">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-xl object-cover w-full h-[400px]"
          />
          <button
            onClick={toggleFavourite}
            className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            title={isFavourite ? "Remove from Favourites" : "Add to Favourites"}
          >
            {isFavourite ? (
              <Heart className="text-red-500 fill-red-500" />
            ) : (
              <HeartOff className="text-gray-300" />
            )}
          </button>
        </div>

        {/* Right - Content */}
        <div className="space-y-6">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 text-xs bg-purple-600/20 text-purple-300 font-semibold px-3 py-1 rounded-full">
            <UtensilsCrossed size={14} />
            {recipe.category || "Uncategorized"}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold leading-tight text-white">
            {recipe.title}
          </h1>

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
            <span className="flex items-center gap-2">
              <CalendarClock size={16} className="text-purple-300" />
              {formattedDate}
            </span>
          </div>

          {/* Description */}
          <p className="text-base text-gray-200 leading-relaxed">
            {recipe.description}
          </p>

          {/* Ingredients */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              🧂 Ingredients:
            </h3>
            <p className="text-sm text-gray-300">{recipe.ingredients}</p>
          </div>

          {/* Instructions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-1">
              🧑‍🍳 Instructions:
            </h3>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {recipe.instructions}
            </p>
          </div>

          {/* Update Recipe */}
          <div className="flex gap-4 pt-4">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-500 active:scale-95 transition"
              onClick={() => setShowUpdateDrawer(true)}
            >
              ✏️ Update Recipe
            </button>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-500 active:scale-95 transition"
              onClick={deleteHandler}
            >
              ❌ Delete Recipe
            </button>
          </div>
        </div>
      </div>

      {/* Drawer Component */}
      {showUpdateDrawer && (
        <UpdateDrawer onClose={() => setShowUpdateDrawer(false)} />
      )}
    </div>
  );
};

export default SingleRecipe;
