import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { Food } from "./Food.jsx";
import { Test } from "./HTMLtoJSX.jsx";
import { Animals } from "./Animals.jsx";
import { AnimalsConditionally } from "./AnimalsConditionally.jsx";
import { DrinkList } from "./Drink.jsx";
import { RecipeList } from "./Recipes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecipeList />
    <Greeting />
    <Food />
    <Test />
    <Animals />
    <AnimalsConditionally />
    <DrinkList />
  </StrictMode>,
);
