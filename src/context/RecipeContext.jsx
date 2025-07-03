import { createContext, useEffect, useState } from "react";
import { someRecipies } from "../RecipeUtils";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const stored = localStorage.getItem("recipe");
    return stored ? JSON.parse(stored) : someRecipies;
  });

  useEffect(() => {
    localStorage.setItem("recipe", JSON.stringify(data));
  }, [data]);

  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
