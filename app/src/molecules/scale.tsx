import { Box, LinearProgress, Typography, useTheme } from "@mui/material";

interface Props {
  title: string;
  value: number;
}

const Scale = (props: Props) => {
  const theme = useTheme();

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <Box style={{ width: "15%", margin: theme.spacing(10) }}>
        <Typography variant={"h4"}>{props.title}</Typography>
      </Box>
      <Box style={{ width: "85%", margin: theme.spacing(10) }}>
        <LinearProgress variant="determinate" value={props.value} />
      </Box>
    </Box>
  );
};

export default Scale;
