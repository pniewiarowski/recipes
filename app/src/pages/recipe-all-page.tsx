import { useEffect, useState } from "react";
import { Grid, Theme, useTheme } from "@mui/material";
import { PageHeader, RecipeList } from "../organisms";
import { useBackend } from "../hooks";
import { RecipeDefinition } from "../api";
import { LoadingCircle } from "../molecules";

const RecipeAllPage = (): JSX.Element => {
  const theme: Theme = useTheme();
  const { recipesRepository } = useBackend();
  const [recipes, setRecipes] = useState<Array<RecipeDefinition>>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    document.title = "All Recipes | Recipe Hub";
  }, []);

  useEffect(() => {
    const load = async () => {
      setRecipes(await recipesRepository.get());
      setIsLoading(false);
    }

    load();
  })

  return (
    <Grid
      container
      spacing={theme.spacing(0.75)}
      style={{ padding: theme.spacing(0.75) }}
    >
      <Grid item xs={12} xl={6}>
        <PageHeader content="all recipes" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="hot recipes in ur neighborhood!" />
      </Grid>
      <Grid item xs={12}>
        { isLoading && <LoadingCircle /> }
        { !isLoading && recipes && <RecipeList heading={"recipes"} recipes={recipes} /> }
      </Grid>
    </Grid>
  );
};

export default RecipeAllPage;
