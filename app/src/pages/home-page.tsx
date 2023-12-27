import { useEffect, useState } from "react";
import { Grid, Paper } from "@mui/material";
import { InformationCard, PageHeader, RecipeList } from "../organisms";
import cards from "../mocks/information-grid-cards-content.json";
import Logo from "../images/logo.png";
import { useBackend } from "../hooks";
import { RecipeDefinition } from "../api";

const HomePage = (): JSX.Element => {
  const [topRecipes, setTopRecipes] = useState<Array<RecipeDefinition>>();
  const [lastRecipes, setLastRecipes] = useState<Array<RecipeDefinition>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { recipesRepository } = useBackend();

  useEffect(() => {
    const loadRecipes = async () => {
    };

    loadRecipes();
  }, [topRecipes, lastRecipes]);

  return (
    <Grid container spacing={"0.25rem"} style={{ padding: "0.25rem" }}>
      <Grid item xs={12} xl={6}>
        <PageHeader content="RecipeHub" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="best place to look for recipe!" />
      </Grid>
      {cards.map((card) => {
        return (
          <Grid item xs={12} md={6} xl={3}>
            <InformationCard
              title={card.title}
              content={card.content}
              button={card.button}
              link={card.link}
            />
          </Grid>
        );
      })}
      <Grid item xs={12} xl={6}>
        <RecipeList heading={"top 10 recipes"} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <RecipeList heading={"10 last recipes"} />
      </Grid>
      <Grid item xl={12}>
        <Paper
          style={{
            width: "100%",
            height: "95px",
            backgroundImage: `url('${Logo}')`,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default HomePage;
