import { useEffect } from "react";
import { Grid, Theme, useTheme } from "@mui/material";
import { PageHeader } from "../organisms";

const RecipeAllPage = (): JSX.Element => {
  const theme: Theme = useTheme();

  useEffect(() => {
    document.title = "All Recipes | Recipe Hub";
  }, []);

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
    </Grid>
  );
};

export default RecipeAllPage;
