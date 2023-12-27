import { Paper, Typography } from "@mui/material";

interface Props {
    content: string;
}

const PageHeader = (props: Props): JSX.Element => {
  return (
    <Paper style={{ padding: "1rem", textAlign: "center"}}>
      <Typography variant="h2">{props.content}</Typography>
    </Paper>
  );
};

export default PageHeader;
