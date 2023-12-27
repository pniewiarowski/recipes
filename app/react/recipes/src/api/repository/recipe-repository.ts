import { RecipeDefinition } from "..";

class RecipeRepository {
  public get(): Array<RecipeDefinition> {
    return new Array<RecipeDefinition>();
  }
}

export default RecipeRepository;
