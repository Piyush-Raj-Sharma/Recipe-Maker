import React, { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipe = () => {
  const { data } = useContext(RecipeContext);

  if (data.length === 0) {
    return (
      <div className="text-center text-gray-500 text-lg mt-10">
        No recipes found. Try adding one!
      </div>
    );
  }

  return (
<section className="px-4 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    {data.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} />
    ))}
  </div>
</section>

  );
};

export default Recipe;
