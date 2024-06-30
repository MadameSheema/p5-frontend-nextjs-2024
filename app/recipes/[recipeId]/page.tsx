import { getRecipeById } from "@/lib/recipes";
import { notFound } from "next/navigation";
import Image from "@/components/Image"
import { RecipeHeader } from "@/components/RecipeHeader";

type PageProps = {
    params: {
        recipeId: string;
    };
};

const ListProperties = "list-disc list-inside m-10";

export default async function Page({ params }: PageProps) {
    const { recipeId } = params;
    const recipeNum = Number(recipeId);
    const recipe = await getRecipeById(recipeNum);

    if (!recipe) {
        notFound();
    }

    return (
        <main>
            <RecipeHeader>{recipe.title} Ingredients</RecipeHeader>
            <ul className={ListProperties}>
                {recipe.ingredients.map((ingredient, index) =>
                    <li key={index}>{ingredient}</li>
                )}
            </ul>
            <RecipeHeader>Instructions</RecipeHeader>
            <ol className={ListProperties}>
                {recipe.instructions.map((instruction, index) =>
                    <li key={index}>{instruction}</li>
                )}
            </ol>
            <div className="m-4 flex justify-center">
                <Image image={recipe.image} title={recipe.title} />
            </div>
        </main>
    );
}
