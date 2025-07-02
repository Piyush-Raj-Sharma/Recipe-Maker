import { createContext, useState } from "react";
import cheesecakeImg from "../assets/cheese-cake-recipe.avif";
import spaghettiImg from "../assets/atie-nabat-Uiro__CkZMs-unsplash.jpg";
import mangoSmoothieImg from "../assets/imad-786-JWboftOg9FE-unsplash.jpg";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [data, setData] = useState([
  {
    id: "1",
    title: "Spaghetti Bolognese",
    chef: "Gordon Ramsay",
    category: "maincourse",
    description: "A hearty Italian pasta dish with rich meat sauce.",
    ingredients: "Spaghetti, ground beef, tomatoes, onions, garlic, olive oil",
    instructions: "1. Boil pasta\n2. Cook beef with sauce\n3. Mix and serve hot.",
    cookingTime: 45,
    image: spaghettiImg ,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Classic Cheesecake",
    chef: "Rachel Allen",
    category: "dessert",
    description: "Creamy cheesecake with a buttery biscuit base.",
    ingredients: "Cream cheese, sugar, eggs, biscuit crumbs, vanilla",
    instructions: "1. Prepare base\n2. Mix filling\n3. Bake and chill.",
    cookingTime: 60,
    image: cheesecakeImg,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    title: "Mango Smoothie",
    chef: "Jamie Oliver",
    category: "beverage",
    description: "A refreshing drink made from ripe mangoes and yogurt.",
    ingredients: "Mangoes, yogurt, honey, ice cubes",
    instructions: "1. Blend all ingredients\n2. Serve chilled.",
    cookingTime: 5,
    image: mangoSmoothieImg,
    createdAt: new Date().toISOString(),
  },
]);


  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
