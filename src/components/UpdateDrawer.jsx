import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { RecipeContext } from "../context/RecipeContext";
import { TimerIcon, X } from "lucide-react";

const UpdateDrawer = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { data, setData } = useContext(RecipeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = data.find((item) => item.id === id);

  useEffect(() => {
    if (recipe) {
      setValue("title", recipe.title);
      setValue("cookingTime", recipe.cookingTime);
      setValue("chef", recipe.chef);
      setValue("category", recipe.category);
      setValue("description", recipe.description);
      setValue("ingredients", recipe.ingredients);
      setValue("instructions", recipe.instructions);
    }
  }, [recipe, setValue]);

  //   const onSubmit = (updatedRecipe) => {
  //     updatedRecipe.id = recipe.id;
  //     updatedRecipe.createdAt = new Date().toISOString();
  //     updatedRecipe.image = recipe.image;
  //     const updatedData = data.map((item) =>
  //       item.id === recipe.id ? updatedRecipe : item
  //     );
  //     setData(updatedData);
  //     navigate(`/recipe/details/${id}`);
  //     reset();
  //     onClose();
  //   };

  const onSubmit = (updatedRecipe) => {
    // updatedRecipe.id = recipe.id; // not needed since we are passing the privious data 
    // updatedRecipe.image = recipe.image; // not needed since we are passing the privious data 

    // ✅ Not needed: original ID and image are already part of the existing data being merged — no need to reassign them.


    updatedRecipe.createdAt = new Date().toISOString();

    const index = data.findIndex((item) => item.id === recipe.id);
    if (index !== -1) {
      const updatedData = [...data]; // Create a shallow copy of the array
      updatedData[index] = { ...updatedData[index], ...updatedRecipe }; // Merge and update that one object
      setData(updatedData); // Set updated array to context
       localStorage.setItem('recipe', JSON.stringify(updatedData));
    }

    navigate(`/recipe/details/${id}`);
    reset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-blur bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-xl h-full bg-[#1E1B2E] text-white p-6 overflow-y-auto shadow-2xl transform translate-x-0 transition-transform duration-500 ease-in-out animate-slide-in-right">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6">✏️ Update Recipe</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title + Cooking Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Title</label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="E.g., Classic Margherita Pizza"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-violet-500"
              />
              {errors.title && (
                <p className="text-xs text-red-400 mt-1">Title is required</p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Cooking Time (minutes)
              </label>
              <div className="relative">
                <input
                  type="number"
                  {...register("cookingTime", { required: true })}
                  placeholder="E.g., 30"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-violet-500"
                />
                <TimerIcon
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={18}
                />
              </div>
              {errors.cookingTime && (
                <p className="text-xs text-red-400 mt-1">
                  Cooking time is required
                </p>
              )}
            </div>
          </div>

          {/* Chef + Category */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Chef's Name</label>
              <input
                type="text"
                {...register("chef", { required: true })}
                placeholder="Chef's name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-violet-500"
              />
              {errors.chef && (
                <p className="text-xs text-red-400 mt-1">
                  Chef's name is required
                </p>
              )}
            </div>

            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/20 focus:ring-2 focus:ring-violet-500"
              >
                <option value="">-- Select Category --</option>
                <option value="maincourse">Main Course</option>
                <option value="dessert">Dessert</option>
                <option value="beverage">Beverage</option>
                <option value="appetizer">Appetizer</option>
                <option value="snack">Snack</option>
              </select>
              {errors.category && (
                <p className="text-xs text-red-400 mt-1">
                  Category is required
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="A tasty and quick dish using fresh ingredients..."
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-violet-500"
            />
            {errors.description && (
              <p className="text-xs text-red-400 mt-1">
                Description is required
              </p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-2 font-medium">Ingredients</label>
            <input
              type="text"
              {...register("ingredients", { required: true })}
              placeholder="E.g., Tomato, Cheese, Basil"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-violet-500"
            />
            {errors.ingredients && (
              <p className="text-xs text-red-400 mt-1">
                Ingredients are required
              </p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block mb-2 font-medium">Instructions</label>
            <textarea
              {...register("instructions", { required: true })}
              placeholder="1. Preheat oven... 2. Mix sauce..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:ring-2 focus:ring-violet-500"
            />
            {errors.instructions && (
              <p className="text-xs text-red-400 mt-1">
                Instructions are required
              </p>
            )}
          </div>
          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              ✅ Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDrawer;
