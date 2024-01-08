import { useEffect, useState } from "react";
import { Grid, Paper, useTheme } from "@mui/material";
import { RecipeView } from "../organisms";
import { useParams } from "react-router-dom";
import { useBackend } from "../hooks";
import { RecipeDefinition } from "../api";
import { LoadingCircle } from "../molecules";

const RecipeSinglePage = (): JSX.Element => {
  const theme = useTheme();
  const { id } = useParams();
  const [recipe, setRecipe] = useState<RecipeDefinition>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { recipesRepository } = useBackend();

  useEffect(() => {
    const load = async () => {
      if (id) {
        setRecipe(await recipesRepository.getByID(id));
      }
    };

    load();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    document.title = `${recipe ? recipe.title : "Loading..."} | Recipe Hub`;
  }, [recipe]);

  return (
    <Grid
      container
      spacing={theme.spacing(0.75)}
      style={{ padding: theme.spacing(1) }}
    >
      {isLoading && (
        <Grid item xs={12}>
          <Paper style={{ height: "300px" }}>
            <LoadingCircle />
          </Paper>
        </Grid>
      )}
      {recipe && (
        <Grid item xs={12}>
          <Paper style={{ padding: theme.spacing(8) }}>
            <RecipeView recipe={recipe} />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default RecipeSinglePage;
