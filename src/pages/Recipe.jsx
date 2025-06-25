import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {
  const { data } = useContext(RecipeContext);

  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg mt-20 px-[8%]">
        No recipes found. Try adding one!
      </div>
    );
  }

  return (
    <section className="px-[8%] py-10">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        🍽️ Explore Delicious Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {data.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default Recipe;
