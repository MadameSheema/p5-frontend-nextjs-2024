'use client';

import { ChangeEvent, useState } from 'react';
import RecipeHeader from "@/components/RecipeHeader";
import { Button } from "@/components/ui/button"
import { Input } from './ui/input';
import { updateRecipe } from '@/actions/update-recipe';
import { Recipe as RecipeType } from "@/lib/recipes";

type RecipeProps = {
    recipe: RecipeType;
};

const ListProperties = "list-disc list-inside m-10";

export default function Recipe({ recipe }: RecipeProps) {
    const originalIngredients = recipe.ingredients;
    const originalInstructions = recipe.instructions;

    const [editMode, setEditMode] = useState(false);
    const [ingredients, setIngredients] = useState(originalIngredients);
    const [instructions, setInstructions] = useState(originalInstructions);

    const edit = () => {
        if (editMode) {
            setIngredients(originalIngredients);
            setInstructions(originalInstructions);
        }
        setEditMode(!editMode);
    };

    const ingredientsChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const instructionsChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newInstructions = [...instructions];
        newInstructions[index] = event.target.value;
        setInstructions(newInstructions);
    };

    const addIngredient = () => {
        setIngredients([...ingredients, '']);
    };

    const addInstruction = () => {
        setInstructions([...instructions, '']);
    };

    const deleteIngredient = (index: number) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    };

    const deleteInstruction = (index: number) => {
        const newInstructions = [...instructions];
        newInstructions.splice(index, 1);
        setInstructions(newInstructions);
    };

    const handleSave = () => {
        updateRecipe(recipe.id, ingredients, instructions)
        setEditMode(false);
    };

    return (
        <main>
            <RecipeHeader>{recipe.title} Ingredients</RecipeHeader>
            {editMode ? (
                <div>
                    <ul className={`${ListProperties} list-none`}>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>
                                <Input className='m-1'
                                    type="text"
                                    value={ingredient}
                                    onChange={(event) => ingredientsChange(index, event)}
                                />
                                <Button className='m-1' onClick={() => deleteIngredient(index)}>Delete</Button>
                            </li>
                        ))}
                    </ul>
                    <Button className='m-2' onClick={addIngredient}>Add Ingredient</Button>
                </div>
            ) : (
                <ul className={ListProperties}>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            )}

            <RecipeHeader>Instructions</RecipeHeader>

            {editMode ? (
                <div>
                    <ol className={`${ListProperties} list-none`}>
                        {instructions.map((instruction, index) => (
                            <li key={index}>
                                <Input className='m-1'
                                    type="text"
                                    value={instruction}
                                    onChange={(event) => instructionsChange(index, event)}
                                />
                                <Button className='m-1' onClick={() => deleteInstruction(index)}>Delete</Button>
                            </li>
                        ))}
                    </ol>
                    <Button className='m-2' onClick={addInstruction}>Add Instruction</Button>
                </div>
            ) : (
                <ol className={ListProperties}>
                    {instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            )}

            <div className='flex flex-row justify-center'>
                <Button className="mb-12" onClick={edit}>
                    {editMode ? 'Cancel' : 'Edit'}
                </Button>

                {editMode && <Button className='mb-12 ml-2' onClick={handleSave}>Save</Button>}

            </div>
        </main>
    );
}
