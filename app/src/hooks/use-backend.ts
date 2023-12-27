import { RecipeRepository, UserRepository } from "../api";

interface Repositories {
    recipesRepository: RecipeRepository,
    usersRepository: UserRepository,
}

const useBackend = (): Repositories => {
    return {
        recipesRepository: new RecipeRepository(),
        usersRepository: new UserRepository(),
    }    
}

export default useBackend;
