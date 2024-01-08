import { createContext } from "react";

const JWTContext = createContext<string | null>(null);

export default JWTContext;
