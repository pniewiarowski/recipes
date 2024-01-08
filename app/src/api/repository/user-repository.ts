import { RecipeDefinition, UserDefinition } from "..";
import { rest } from "../../axios";

class UserRepository {
  public async get(): Promise<Array<UserDefinition>> {
    const response = await rest.get(`/users`);
    const users: Array<UserDefinition> = response.data;

    return users;
  }

  public async getByID(id: number): Promise<UserDefinition> {
    const response = await rest.get(`/users/${id}`);
    const user: UserDefinition = response.data;

    return user;
  }

  public async getRecipes(id: number): Promise<Array<RecipeDefinition>> {
    const response = await rest.get(`/users/${id}/recipes`);
    const recipes: Array<RecipeDefinition> = response.data;

    return recipes;
  }
}

export default UserRepository;
