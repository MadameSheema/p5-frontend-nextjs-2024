import Recipe from "@/components/Recipe";
import { getRecipeById } from "@/lib/recipes";
import { notFound } from "next/navigation";

type PageProps = {
    params: {
        recipeId: string;
    };
};

export default async function Page({ params }: PageProps) {
    const { recipeId } = params;
    const recipeNum = Number(recipeId);
    const recipe = await getRecipeById(recipeNum);

    if (!recipe) {
        notFound();
    }

    return <Recipe recipe={recipe} />;
}
