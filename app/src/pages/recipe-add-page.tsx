import { Grid, Paper, Theme, useTheme } from "@mui/material";
import { PageHeader, RecipeForm } from "../organisms";

const RecipeAddPage = (): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <Grid
      container
      spacing={theme.spacing(0.75)}
      style={{ padding: theme.spacing(0.75) }}
    >
      <Grid item xs={12} xl={6}>
        <PageHeader content="recipes" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="add new" />
      </Grid>
      <Grid item xs={12}>
        <Paper
          style={{
            padding: "1rem 3rem",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RecipeForm />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RecipeAddPage;
