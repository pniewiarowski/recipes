import { AxiosResponse } from "axios";
import { RecipeDefinition } from "..";
import { rest } from "../../axios";

class RecipeRepository {
  public async get(): Promise<Array<RecipeDefinition>> {
    const response = await rest.get("/recipes");
    const recipes: Array<RecipeDefinition> = response.data;

    return recipes;
  }

  public async getWithTitleLike(
    title: string
  ): Promise<Array<RecipeDefinition>> {
    const response: AxiosResponse<any, any> = await rest.get(`/recipes?title=${title}`);
    const recipes: Array<RecipeDefinition> = response.data;

    return recipes;
  }

  public async getByID(id: string): Promise<RecipeDefinition> {
    const response: AxiosResponse<any, any> = await rest.get(`/recipes/${id}`);
    const recipe: RecipeDefinition = response.data;

    return recipe;
  }

  public async create(
    jwt: string,
    title: string,
    description: string,
    preparation: string,
    difficulty: number,
    owner: number,
  ): Promise<RecipeDefinition> {
    const response: AxiosResponse<any, any> = await rest.post(`/recipes`, {
      title: title,
      description: description,
      preparation: preparation,
      difficulty: difficulty,
      owner: owner
    });
    const recipe: RecipeDefinition = response.data;

    return recipe;
  }

  public async deleteByID(id: number): Promise<Array<RecipeDefinition>> {
    const response: AxiosResponse<any, any> = await rest.delete(`/recipes/${id}`);
    const recipes: Array<RecipeDefinition> = response.data;

    return recipes;
  }
}

export default RecipeRepository;
