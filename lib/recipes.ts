import { readFile, writeFile } from "fs/promises";

export type Recipe = {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

const RECIPES_PATH = "./lib/recipes.json";

const readRecipesFromFile = async (): Promise<Recipe[]> => {
  const data = JSON.parse(await readFile(RECIPES_PATH, "utf-8"));
  return data.recipes;
};

export const getRecipes = async (): Promise<Recipe[]> => {
  const data = await readRecipesFromFile();

  return data.map((recipe: Recipe) => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions
  }));
};

export const serverUpdateRecipe = async (
  id: number,
  ingredients: string[],
  instructions: string[]
): Promise<void> => {
  let data = await readRecipesFromFile();
  const recipeIndex = data.findIndex(recipe => recipe.id === id);

  data[recipeIndex] = {
    ...data[recipeIndex],
    ingredients: ingredients,
    instructions: instructions
  };

  await writeFile(RECIPES_PATH, JSON.stringify({ recipes: data }, null, 2), "utf-8");
};

export const getRecipeById = async (
  recipeId: number
): Promise<Recipe | undefined> => {
  const recipes = await readRecipesFromFile();
  return recipes.find((recipe: Recipe) => recipe.id === recipeId);
};
