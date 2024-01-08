import { Fragment } from "react";
import { RecipeDefinition } from "../api";
import { Avatar, Box, Divider, Theme, Typography, useTheme } from "@mui/material";
import { Scale } from "../molecules";
import { avatar } from "../helpers";

interface Props {
  recipe: RecipeDefinition;
}

const RecipeView = (props: Props): JSX.Element => {
  const theme: Theme = useTheme();
  
  return (
    <Fragment>
      <Box
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          margin: theme.spacing(10)
        }}
      >
       <Avatar style={{padding: "3.25rem", fontSize: "1.75rem"}} {...avatar(props.recipe.title)} />
        <Typography style={{marginLeft: "3rem"}} variant={"h1"}>{props.recipe.title}</Typography>
      </Box>
      <Divider />
      <Scale title={`difficulty (${props.recipe.difficulty } / 100)`} value={props.recipe.difficulty} />
      <Divider />
      <Scale title={`rating (${props.recipe.rating } / 100)`} value={props.recipe.rating} />
      <Divider />
      <Box style={{margin: theme.spacing(10)}}>
        <Typography color={'secondary'} variant="h4">description</Typography>
        <Typography variant="body1">{props.recipe.description}</Typography>
      </Box>
      <Divider />
      <Box style={{margin: theme.spacing(10)}}>
        <Typography color={'secondary'} variant="h4">preparation</Typography>
        <Typography variant="body1">{props.recipe.preparation}</Typography>
      </Box>
    </Fragment>
  );
};

export default RecipeView;
