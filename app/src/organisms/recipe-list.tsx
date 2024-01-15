import {
  Avatar,
  Button,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { RecipeDefinition } from "../api";
import { Fragment } from "react";
import { avatar } from "../helpers";
import { Link } from "react-router-dom";

interface Props {
  heading: string;
  recipes: Array<RecipeDefinition>;
  onDelete: Function|null;
  showUI: boolean;
}

const RecipeList = (props: Props): JSX.Element => {
  const theme: Theme = useTheme();

  const recipes = props.recipes.map((recipe) => {
    return (
      <Fragment key={recipe.entityID}>
        <Link to={`/recipes/${recipe.entityID}`}>
          <ListItemButton style={{ padding: theme.spacing(5) }}>
            <ListItemAvatar>
              <Avatar {...avatar(recipe.title)} />
            </ListItemAvatar>
            <ListItemText
              style={{ color: theme.palette.text.primary }}
              primary={recipe.title}
              secondary={`Rating ${recipe.rating}/100`}
            />
            {props.showUI && <Button>edit</Button>}
            {props.showUI && props.onDelete && <Button color="error" onClick={() => props.onDelete(recipe.entityID)}>delete</Button>}
          </ListItemButton>
        </Link>
        <Divider />
      </Fragment>
    );
  });

  return (
    <Paper style={{ padding: theme.spacing(10) }}>
      <List
        subheader={
          <Typography variant="h3" style={{ textAlign: "center" }}>
            {props.heading}
          </Typography>
        }
      >
        {recipes}
      </List>
    </Paper>
  );
};

export default RecipeList;
