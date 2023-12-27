import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const theme = useTheme();

  return (
    <FormControl
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box style={{ margin: ".5rem", width: "100%" }}>
        <TextField style={{ width: "100%" }} label={"email"} />
      </Box>
      <Box style={{ margin: ".5rem", width: "100%" }}>
        <TextField style={{ width: "100%" }} label={"password"} />
      </Box>
      <Box style={{ margin: ".5rem", width: "100%", textAlign: "left" }}>
        <Typography variant="body1">
          do not have account yet? click{" "}
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              fontWeight: 900,
            }}
            to={"/authentication/register"}
          >
            HERE
          </Link>{" "}
          to register!
        </Typography>
      </Box>
      <Box style={{ margin: ".5rem", width: "100%" }}>
        <Button style={{ width: "100%" }} variant={"contained"}>
          login
        </Button>
      </Box>
    </FormControl>
  );
};

export default LoginForm;
