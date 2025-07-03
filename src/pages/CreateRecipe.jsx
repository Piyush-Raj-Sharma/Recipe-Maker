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
    recipe.image = imageBase64;
    const copyData = [...data];
    copyData.push(recipe);
    setData(copyData);
    localStorage.setItem("recipe", JSON.stringify(copyData));
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
      setImagePreview(reader.result);
      setImageBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen bg-[#0e0d0c] text-white px-4 sm:px-[10%] py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://as2.ftcdn.net/v2/jpg/02/84/46/89/1000_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg')] bg-cover bg-center" />

      <div className="relative z-10 max-w-5xl mx-auto bg-[#1a1a1a] rounded-3xl shadow-2xl border border-white/10 p-8 sm:p-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white mb-10">
           Let's Cook Something New!
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 font-semibold text-violet-100">Recipe Title</label>
              <input
                type="text"
                {...register("title", { required: true })}
                placeholder="E.g., Creamy Alfredo Pasta"
                className="w-full px-4 py-3 rounded-lg bg-[#2b2b2b] text-white placeholder:text-gray-400 border  focus:ring-2 focus:ring-violet-500"
              />
              {errors.title && <p className="text-xs text-red-400 mt-1">Title is required</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-purple-100">Cooking Time (mins)</label>
              <div className="relative">
                <input
                  type="number"
                  {...register("cookingTime", { required: true })}
                  placeholder="E.g., 45"
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#2b2b2b] text-white placeholder:text-gray-400 border  focus:ring-2 focus:ring-violet-500"
                />
                <TimerIcon className="absolute left-3 top-3 text-purple-400" size={18} />
              </div>
              {errors.cookingTime && <p className="text-xs text-red-400 mt-1">Cooking time is required</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 font-semibold text-violet-100">Chef's Name</label>
              <input
                type="text"
                {...register("chef", { required: true })}
                placeholder="E.g., Gordon Ramsay"
                className="w-full px-4 py-3 rounded-lg bg-[#2b2b2b] text-white placeholder:text-gray-400 border  focus:ring-2 focus:ring-violet-500"
              />
              {errors.chef && <p className="text-xs text-red-400 mt-1">Chef's name is required</p>}
            </div>

            <div>
              <label className="block mb-2 font-semibold text-purple-100">Category</label>
              <select
                {...register("category", { required: true })}
                className="w-full px-4 py-3 rounded-lg bg-[#2b2b2b] text-white border  focus:ring-2 focus:ring-violet-500"
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

          <div>
            <label className="block mb-2 font-semibold text-purple-100">Short Description</label>
            <textarea
              {...register("description", { required: true })}
              placeholder="Describe your delicious creation..."
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-[#2b2b2b] text-white placeholder:text-gray-400 border  focus:ring-2 focus:ring-violet-500"
            />
            {errors.description && <p className="text-xs text-red-400 mt-1">Description is required</p>}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-purple-100">Ingredients</label>
            <input
              type="text"
              {...register("ingredients", { required: true })}
              placeholder="E.g., Tomatoes, Olive Oil, Basil"
              className="w-full px-4 py-3 rounded-lg bg-[#2b2b2b] text-white placeholder:text-gray-400 border  focus:ring-2 focus:ring-violet-500"
            />
            {errors.ingredients && <p className="text-xs text-red-400 mt-1">Ingredients are required</p>}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-purple-100">Cooking Instructions</label>
            <textarea
              {...register("instructions", { required: true })}
              placeholder="1. Preheat oven... 2. Mix sauce..."
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-[#2b2b2b] text-white placeholder:text-gray-400 border  focus:ring-2 focus:ring-violet-500"
            />
            {errors.instructions && <p className="text-xs text-red-400 mt-1">Instructions are required</p>}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-purple-100">Upload Recipe Image</label>
            <input
              type="file"
              accept="image/*"
              {...register("image", { required: true })}
              onChange={handleImageChange}
              className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-violet-500 file:text-black hover:file:bg-violet-400 transition"
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 w-40 h-40 object-cover rounded-lg shadow-lg border bg-violet-400"
              />
            )}
            {errors.image && <p className="text-xs text-red-400 mt-1">Image is required</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-violet-500 hover:bg-violet-700 text-black font-bold py-3 rounded-lg transition-all duration-200 shadow-md shadow-purple-600/20"
            >
              🍽️ Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipe;
