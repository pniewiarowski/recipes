import {
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { RecipeDefinition } from "../api";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  heading: string;
  recipes: Array<RecipeDefinition>;
}

const RecipeList = (props: Props) => {
  return (
    <Paper>
      <List
        subheader={
          <Typography variant="h3" style={{ textAlign: "center" }}>
            {props.heading}
          </Typography>
        }
      >
        <Divider />
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Test Recipe 001" />
        </ListItemButton>
        <Divider />
      </List>
    </Paper>
  );
};

export default RecipeList;
