import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TimerIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { RecipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data, setData } = useContext(RecipeContext);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageBase64, setImageBase64] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (recipe) => {
    recipe.id = nanoid();
    recipe.createdAt = new Date().toISOString();
    recipe.image = imageBase64; // store base64 image string

    setData([...data, recipe]);
    toast.success("Recipe Created");
    navigate("/recipe");
    reset();
    setImagePreview(null);
    setImageBase64(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);       // Show image preview
      setImageBase64(reader.result);        // Store image in base64
    };
    reader.readAsDataURL(file); // Convert file to base64
  };

  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white px-[8%] py-12">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-white/10 p-10">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-center justify-center">
          🍽️ Create a New Recipe
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title + Cooking Time */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Title</label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="E.g., Classic Margherita Pizza"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 border border-white/20"
              />
              {errors.title && <p className="text-xs text-red-400 mt-1">Title is required</p>}
            </div>

            <div>
              <label className="block mb-2 font-medium">Cooking Time (minutes)</label>
              <div className="relative">
                <input
                  type="number"
                  {...register("cookingTime", { required: true })}
                  placeholder="E.g., 30"
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 border border-white/20"
                />
                <TimerIcon className="absolute left-3 top-2.5 text-gray-400" size={18} />
              </div>
              {errors.cookingTime && <p className="text-xs text-red-400 mt-1">Cooking time is required</p>}
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
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 border border-white/20"
              />
              {errors.chef && <p className="text-xs text-red-400 mt-1">Chef's name is required</p>}
            </div>

            <div>
              <label className="block mb-2 font-medium">Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white focus:ring-2 focus:ring-violet-500 border border-white/20"
              >
                <option value="">-- Select Category --</option>
                <option value="maincourse">Main Course</option>
                <option value="dessert">Dessert</option>
                <option value="beverage">Beverage</option>
                <option value="appetizer">Appetizer</option>
                <option value="snack">Snack</option>
              </select>
              {errors.category && <p className="text-xs text-red-400 mt-1">Category is required</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="A tasty and quick dish using fresh ingredients..."
              rows={3}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 border border-white/20"
            />
            {errors.description && <p className="text-xs text-red-400 mt-1">Description is required</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block mb-2 font-medium">Ingredients</label>
            <input
              type="text"
              {...register("ingredients", { required: true })}
              placeholder="E.g., Tomato, Cheese, Basil"
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 border border-white/20"
            />
            {errors.ingredients && <p className="text-xs text-red-400 mt-1">Ingredients are required</p>}
          </div>

          {/* Instructions */}
          <div>
            <label className="block mb-2 font-medium">Instructions</label>
            <textarea
              {...register("instructions", { required: true })}
              placeholder="1. Preheat oven... 2. Mix sauce..."
              rows={4}
              className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-500 border border-white/20"
            />
            {errors.instructions && <p className="text-xs text-red-400 mt-1">Instructions are required</p>}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block mb-2 font-medium">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={handleImageChange}
              className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-violet-600 file:text-white hover:file:bg-violet-500 transition"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-md shadow-md"
              />
            )}
            {errors.image && <p className="text-xs text-red-400 mt-1">Image is required</p>}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              🍕 Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
