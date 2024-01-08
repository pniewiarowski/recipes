import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import { RecipeDefinition } from "../api";
import { avatar } from "../helpers";
import { Link } from "react-router-dom";
import { MouseEventHandler } from "react";

interface Props {
  recipes: Array<RecipeDefinition>;
  onClickItem: MouseEventHandler<HTMLAnchorElement>;
}

const SearchList = (props: Props) => {
  const theme = useTheme();

  const recipes = props.recipes.map((recipe) => {
    return (
      <Link onClick={props.onClickItem} to={`/recipes/${recipe.entityID}`}>
        <ListItemButton style={{ padding: theme.spacing(2) }}>
          <ListItemAvatar>
            <Avatar {...avatar(recipe.title)} />
          </ListItemAvatar>
          <ListItemText primary={recipe.title} />
        </ListItemButton>
      </Link>
    );
  });

  return (
    <Paper elevation={0} style={{ padding: theme.spacing(2) }}>
      <List>{recipes}</List>
    </Paper>
  );
};

export default SearchList;
