import * as fs from "fs";

type Recipe = {
  id: number;
  title: string;
  image: string;
  ingredients: string[];
  instructions: string[];
};

const RECIPES_PATH = './lib/recipes.json';

const readRecipesFromFile = (): Recipe[] => {
  const data = JSON.parse(fs.readFileSync(RECIPES_PATH, "utf-8"));
  return data.recipes;
};

export const getRecipes = async (): Promise<Recipe[]> => {
  const data = readRecipesFromFile()

  return data.map((recipe: Recipe) => ({
    id: recipe.id,
    title: recipe.title,
    image: recipe.image,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions
  }));
};

export const getRecipeById = async (recipeId: number): Promise<Recipe|undefined> => {
  const recipes = readRecipesFromFile();
  return recipes.find((recipe: Recipe) => recipe.id === recipeId);
};
