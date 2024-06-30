import { getRecipes } from "@/lib/recipes"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default async function page() {
    const recipes = await getRecipes()

    return (
            <main className="flex flex-row m-4 flex-wrap space-x-4">
                {recipes.map((recipe) => (
                    <Card>
                        <CardHeader>
                            <CardTitle>{recipe.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img className="rounded" key={recipe.id} src={recipe.image} alt={recipe.title} />
                        </CardContent>
                    </Card>
                ))}
            </main>
    );
}