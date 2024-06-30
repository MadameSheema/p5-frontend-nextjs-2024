import { getRecipes } from "@/lib/recipes"

export default async function page() {
    const recipes = await getRecipes()
    return (
      <main>{recipes[0].title}</main>
    )
  }