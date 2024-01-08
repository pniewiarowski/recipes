import { Box, CircularProgress } from "@mui/material";

const LoadingCircle = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={124} />
    </Box>
  );
};

export default LoadingCircle;
