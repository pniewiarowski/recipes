import { AuthorizationDefinition } from "..";
import { rest } from "../../axios";

class AuthorizationRepository {
    public async login(email: string, password: string): Promise<AuthorizationDefinition> {
        const response = await rest.post('/authorization/jwt', {
            email: email,
            password: password,
        });
        const authorization: AuthorizationDefinition = response.data;

        return authorization;
    }

    public async register(name: string, email: string, password: string): Promise<AuthorizationDefinition>  {
        const response = await rest.post('/authorization', {
            "name": name,
            "email": email,
            "password": password
        });
        const authorization: AuthorizationDefinition = response.data;

        return authorization;
    }
}

export default AuthorizationRepository;

