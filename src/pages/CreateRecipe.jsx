import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TimerIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { RecipeContext } from './../context/RecipeContext';

const CreateRecipe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const {data, setData}= useContext(RecipeContext)
  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = (recipe) => {
    recipe.id = nanoid();
    recipe.createdAt = new Date().toISOString();
  
    setData([...data, recipe])
    console.log(recipe);
    reset();
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-[#FFF8F0] text-[#5C4033] px-[8%] py-10 rounded-3xl shadow-lg max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
        🍽️ Create a New Recipe
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title + Cooking Time */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: true })}
              placeholder="E.g., Classic Margherita Pizza"
              className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">Title is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Cooking Time (minutes)</label>
            <div className="relative">
              <input
                type="number"
                step="1"
                {...register("cookingTime", { required: true })}
                placeholder="E.g., 30"
                className="w-full px-4 py-2 pl-10 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
              />
              <TimerIcon className="absolute left-3 top-2.5 text-[#c2b4aa]" size={18} />
            </div>
            {errors.cookingTime && <p className="text-xs text-red-500 mt-1">Cooking time is required</p>}
          </div>
        </div>

        {/* Chef Name + Category */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium">Chef's Name</label>
            <input
              type="text"
              {...register("chef", { required: true })}
              placeholder="Enter the chef's name"
              className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
            />
            {errors.chef && <p className="text-xs text-red-500 mt-1">Chef's name is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              {...register("category", { required: true })}
              className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
            >
              <option value="">-- Select Category --</option>
              <option value="maincourse">Main Course</option>
              <option value="dessert">Dessert</option>
              <option value="beverage">Beverage</option>
              <option value="appetizer">Appetizer</option>
              <option value="snack">Snack</option>
            </select>
            {errors.category && <p className="text-xs text-red-500 mt-1">Category is required</p>}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            placeholder="A simple and delicious pizza recipe with fresh ingredients."
            rows={3}
            className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
          />
          {errors.description && <p className="text-xs text-red-500 mt-1">Description is required</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium">Ingredients</label>
          <input
            type="text"
            {...register("ingredients", { required: true })}
            placeholder="E.g., Tomato, Cheese, Basil"
            className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
          />
          {errors.ingredients && <p className="text-xs text-red-500 mt-1">At least one ingredient is required</p>}
        </div>

        {/* Instructions */}
        <div>
          <label className="block mb-1 font-medium">Instructions</label>
          <textarea
            {...register("instructions", { required: true })}
            placeholder="1. Preheat oven... 2. Spread sauce..."
            rows={4}
            className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white focus:ring-2 focus:ring-[#FF7043]"
          />
          {errors.instructions && <p className="text-xs text-red-500 mt-1">Instructions are required</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-[#e2ddd6] rounded-lg bg-white file:bg-[#FF7043] file:text-white file:font-semibold file:px-4 file:py-2 file:border-0 file:rounded-md hover:file:bg-[#FFB74D] transition cursor-pointer"
          />
          {imagePreview && <img src={imagePreview} alt="Preview" className="mt-3 w-32 rounded-md" />}
          {errors.image && <p className="text-xs text-red-500 mt-1">Image is required</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-[#FF7043] text-white font-semibold text-sm tracking-wide px-6 py-3 rounded-lg hover:bg-[#FFB74D] transition-all duration-200"
          >
            🍕 Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateRecipe;
