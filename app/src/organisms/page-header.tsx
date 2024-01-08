import { useTheme } from "@emotion/react";
import { Paper, Theme, Typography } from "@mui/material";

interface Props {
    content: string;
}

const PageHeader = (props: Props): JSX.Element => {
  const theme: Theme = useTheme();

  return (
    <Paper style={{ padding: theme.spacing(10), textAlign: "center"}}>
      <Typography variant="h2">{props.content}</Typography>
    </Paper>
  );
};

export default PageHeader;
