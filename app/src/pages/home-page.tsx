import { useEffect, useState } from "react";
import { Grid, Paper, useTheme } from "@mui/material";
import { InformationCard, PageHeader, RecipeList } from "../organisms";
import cards from "../mocks/information-grid-cards-content.json";
import { useBackend } from "../hooks";
import { RecipeDefinition } from "../api";
import { LoadingCircle } from "../molecules";

const HomePage = (): JSX.Element => {
  const theme = useTheme();
  const [topRecipes, setTopRecipes] = useState<Array<RecipeDefinition>>();
  const [lastRecipes, setLastRecipes] = useState<Array<RecipeDefinition>>();
  const [isRecipesLoading, setIsRecipeLoading] = useState<boolean>(true);
  const { recipesRepository } = useBackend();

  useEffect(() => {
    const load = async () => {
      const recipes: Array<RecipeDefinition> = await recipesRepository.get();

      setTopRecipes(
        recipes
          .slice(0, 5)
          .sort((recipe: RecipeDefinition, next: RecipeDefinition) => {
            return next.rating - recipe.rating;
          })
      );

      setLastRecipes(recipes.reverse().slice(0, 5));
      setIsRecipeLoading(false);
    };

    document.title = "Home Page | Recipe Hub";
    load();
  }, []);

  return (
    <Grid
      container
      spacing={theme.spacing(0.75)}
      style={{ padding: theme.spacing(1) }}
    >
      <Grid item xs={12} xl={6}>
        <PageHeader content="welcome in recipe hub" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="best place to look for recipe" />
      </Grid>
      {cards.map((card) => {
        return (
          <Grid item xs={12} md={6} xl={3} key={card.id}>
            <InformationCard
              title={card.title}
              content={card.content}
              button={card.button}
              link={card.link}
            />
          </Grid>
        );
      })}

      {!isRecipesLoading && topRecipes && !!topRecipes.length && (
        <Grid item xs={12} xl={6}>
          <RecipeList recipes={topRecipes} heading={"top 5 recipes"} />
        </Grid>
      )}

      {isRecipesLoading && (
        <Grid item xs={12} xl={6}>
          <Paper style={{ height: "300px" }}>
            <LoadingCircle />
          </Paper>
        </Grid>
      )}

      {!isRecipesLoading && lastRecipes && !!lastRecipes.length && (
        <Grid item xs={12} xl={6}>
          <RecipeList recipes={lastRecipes} heading={"last 5 recipes"} />
        </Grid>
      )}

      {isRecipesLoading && (
        <Grid item xs={12} xl={6}>
          <Paper style={{ height: "300px" }}>
            <LoadingCircle />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default HomePage;
