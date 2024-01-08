interface RecipeDefinition {
    entityID: number|null;
    title: string;
    description: string;
    preparation: string;
    rating: number|null;
    difficulty: number;
    owner: number;
}

export default RecipeDefinition;
