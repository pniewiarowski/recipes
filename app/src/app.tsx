import { Fragment, JSX, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  RecipeAddPage,
  RecipeAllPage,
  RecipeDetailsPage,
  UserRecipesPage,
  RegisterPage,
} from "./pages";
import { Footer, Navbar } from "./organisms";
import { UserDefinition } from "./api";
import { JWTContext, UserContext } from "./contexts";
import { theme } from "./mui";
import { useCookies } from "./hooks";
import "./main.css";

const App = (): JSX.Element => {
  const { get } = useCookies();
  const [user, setUser] = useState<UserDefinition | null>(null);
  const [jwt, setJWT] = useState<string | null>(null);

  useEffect(() => {
    if (!get("userID")) {
      return;
    }

    const userID: string = get("userID");
    const userName: string = get("userName");
    const userEmail: string = get("userEmail");

    setUser({
      entityID: userID,
      name: userName,
      email: userEmail,
    });
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <UserContext.Provider value={{ user, setUser }}>
          <JWTContext.Provider value={{ jwt, setJWT }}>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/authentication/login" element={<LoginPage />} />
                <Route
                  path="/authentication/register"
                  element={<RegisterPage />}
                />
                <Route path="/recipes" element={<RecipeAllPage />} />
                <Route path="/recipes/:id" element={<RecipeDetailsPage />} />
                <Route path="/users/:id/recipes" element={<UserRecipesPage />} />
                <Route path="/recipes/add" element={<RecipeAddPage />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </JWTContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
