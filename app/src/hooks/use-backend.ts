import {
  AuthorizationRepository,
  RecipeRepository,
  UserRepository,
} from "../api";

interface Repositories {
  authorizationRepository: AuthorizationRepository;
  recipesRepository: RecipeRepository;
  usersRepository: UserRepository;
}

let repositories: Repositories | null = null;

const useBackend = (): Repositories => {
  if (!repositories) {
    repositories = {
      authorizationRepository: new AuthorizationRepository(),
      recipesRepository: new RecipeRepository(),
      usersRepository: new UserRepository(),
    };
  }

  return repositories;
};

export default useBackend;
