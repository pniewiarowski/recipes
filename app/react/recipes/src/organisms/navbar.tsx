import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Search, SearchIconWrapper, SearchTextInput } from "../molecules";
import { Search as SearchIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Box>
            <Box style={{ display: "flex", columnGap: "1rem" }}>
              <Box>
                <Link to={"/recipes"}>
                  <Button variant={"text"}>Recipes</Button>
                </Link>
              </Box>
              <Box>
                <Link to={"/authentication/login"}>
                  <Button variant={"contained"}>Login</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
