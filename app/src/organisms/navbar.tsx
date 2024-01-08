import { useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Search, SearchIconWrapper, SearchTextInput } from "../molecules";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useBackend, useCookies } from "../hooks";
import { useState } from "react";
import { JSX } from "react/jsx-runtime";
import { RecipeDefinition } from "../api";
import { SearchList } from ".";
import { UserContext } from "../contexts";

const Navbar = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { set } = useCookies();
  const { recipesRepository } = useBackend();
  const { user, setUser } = useContext(UserContext);
  const [searchText, setSearchText] = useState<string>("");
  const [searchedRecipes, setSearchedRecipes] = useState<
    Array<RecipeDefinition>
  >([]);

  const resetSearch = () => {
    setSearchText("");
  };

  const logout = () => {
    setUser(null);
    set("userID", "");
    set("userEmail", "");
    set("userName", "");
    navigate("/");
  };

  useEffect(() => {
    if (searchText.length >= 2) {
      const load = async () => {
        const recipes = await recipesRepository.getWithTitleLike(searchText);
        setSearchedRecipes(recipes);
      };

      load();
    } else {
      setSearchedRecipes([]);
    }
  }, [searchText]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ padding: theme.spacing(1) }}>
        <Toolbar>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Typography variant={"h3"} color={"primary"}>
                  RecipeHub
                </Typography>
              </Link>
              <Search style={{ marginLeft: "2rem" }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <SearchTextInput
                  placeholder="Look for recipe..."
                  onChange={(event) => setSearchText(event.target.value)}
                  value={searchText}
                />
              </Search>
              {searchedRecipes && !!searchedRecipes.length && (
                <Box
                  style={{
                    position: "absolute",
                    width: "33%",
                    top: "60px",
                    left: "100",
                  }}
                >
                  <SearchList
                    recipes={searchedRecipes}
                    onClickItem={resetSearch}
                  />
                </Box>
              )}
            </Box>
            <Box style={{ display: "flex", columnGap: "1rem" }}>
              <Box>
                <Link to={"/recipes"}>
                  <Button variant={"text"}>all recipes</Button>
                </Link>
              </Box>
              {!user && (
                <Box>
                  <Link to={"/authentication/login"}>
                    <Button variant={"contained"}>login</Button>
                  </Link>
                </Box>
              )}

              {user && (
                <Box>
                  <Link to={"/recipes/add"}>
                    <Button variant={"text"}>add recipe</Button>
                  </Link>
                </Box>
              )}

              {user && (
                <Box>
                  <Link to={`/users/${user.entityID}/recipes`}>
                    <Button variant={"text"}>my recipes</Button>
                  </Link>
                </Box>
              )}

              {user && (
                <Box>
                  <Button variant={"contained"}>account</Button>
                </Box>
              )}

              {user && (
                <Box>
                  <Button
                    color={"secondary"}
                    variant={"contained"}
                    onClick={logout}
                  >
                    logout
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
