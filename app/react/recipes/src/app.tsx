import { Fragment, JSX, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, RecipeAllPage, RegisterPage } from "./pages";
import { Footer, Navbar } from "./organisms";
import { UserDefinition } from "./api";
import { UserContext } from "./contexts";
import { theme } from "./mui";

const App = (): JSX.Element => {
  const [user, setUser] = useState<UserDefinition | null>(null);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <UserContext.Provider value={{ user, setUser }}>
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
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
