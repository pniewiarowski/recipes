import { Grid } from "@mui/material";
import { PageHeader } from "../organisms";

const RecipeAllPage = (): JSX.Element => {
  return (
    <Grid container spacing={"0.25rem"} style={{ padding: "0.25rem" }}>
      <Grid item xs={12} xl={6}>
        <PageHeader content="All Recipes" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="hot recipes in ur neighborhood!" />
      </Grid>
    </Grid>
  );
};

export default RecipeAllPage;
