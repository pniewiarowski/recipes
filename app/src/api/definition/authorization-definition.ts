import { UserDefinition } from "..";

interface AuthorizationDefinition {
    jwt: string;
    user: UserDefinition 
}

export default AuthorizationDefinition;
