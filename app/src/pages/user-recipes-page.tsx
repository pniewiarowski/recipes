import { Grid, Paper, Theme, useTheme } from "@mui/material";
import { PageHeader, RecipeList } from "../organisms";
import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { useBackend } from "../hooks";
import { UserDefinition, RecipeDefinition } from "../api";
import { LoadingCircle } from "../molecules";

const RecipeUserPage = (): JSX.Element => {
  const theme: Theme = useTheme();
  const navigate: NavigateFunction = useNavigate();
  const { usersRepository, recipesRepository } = useBackend();
  const [user, setUser] = useState<UserDefinition>();
  const [recipes, setRecipes] = useState<Array<RecipeDefinition>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    document.title = "Your Recipes | Recipe Hub";
  }, []);

  useEffect(() => {
    const load = async () => {
      setUser(await usersRepository.getByID(Number(id)));
      setRecipes(await usersRepository.getRecipes(Number(id)));
      setIsLoading(false);
    };

    load();
  }, []);

  const deleteRecipe = async (id: number) => {
    setRecipes(await recipesRepository.deleteByID(id));
    navigate(`/users/${user?.entityID}/recipes`);
  }

  return (
    <Grid
      container
      spacing={theme.spacing(0.75)}
      style={{ padding: theme.spacing(0.75) }}
    >
      <Grid item xs={12} xl={6}>
        <PageHeader content={`${user?.name}`} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="recipes" />
      </Grid>
      <Grid item xs={12}>
        {isLoading && (
          <Paper style={{ padding: theme.spacing(10) }}>
            <LoadingCircle />
          </Paper>
        )}
        {!isLoading && (
          <RecipeList
            heading={"urs recipes"}
            recipes={recipes ? recipes : []}
            onDelete={deleteRecipe}
            showUI
          />
        )}
      </Grid>
    </Grid>
  );
};

export default RecipeUserPage;
