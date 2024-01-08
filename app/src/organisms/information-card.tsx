import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

interface Props {
  title: string;
  content: string;
  button: string;
  link: string;
}

const InformationCard = (props: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Paper>
      <Box
        style={{
          padding: theme.spacing(10),
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography color={"primary"} variant={"h2"}>
          {props.title}
        </Typography>
        <Typography
          color={"text"}
          style={{ textAlign: "justify" }}
          variant={"body1"}
        >
          {props.content}
        </Typography>
        <Divider style={{ marginTop: theme.spacing(2), marginBottom: theme.spacing(2), padding: "1rem" }} />
        <Box style={{ width: "100%" }}>
          <Link to={props.link}>
            <Button variant={"text"} style={{ width: "100%" }}>{props.button}</Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default InformationCard;
