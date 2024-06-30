import { getRecipes } from "@/lib/recipes"

export default async function page() {
    const recipes = await getRecipes()

    return (
        <main>
            {recipes.map((recipe) => (
                <div className="flex flex-col">
                    <img key={recipe.id} src={recipe.image} alt={recipe.title} />
                    {recipe.title}
                </div>
            ))}
        </main>
    );
}