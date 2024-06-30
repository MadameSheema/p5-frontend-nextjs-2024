"use server";

import { serverUpdateRecipe } from "@/lib/recipes";

export async function updateRecipe(
  id: number,
  ingredients: string[],
  instructions: string[]
) {
  await serverUpdateRecipe(id, ingredients, instructions);
}
