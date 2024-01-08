import { createContext } from "react";
import { UserDefinition } from "../api";

const UserContext = createContext<UserDefinition | null>(null);

export default UserContext;
