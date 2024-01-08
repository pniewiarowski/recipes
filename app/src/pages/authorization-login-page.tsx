import { useEffect } from "react";
import { Grid, Paper } from "@mui/material";
import { LoginForm, PageHeader } from "../organisms";
import { useCookies } from "../hooks";
import { useNavigate } from "react-router-dom";

const LoginPage = (): JSX.Element => {
  const { get } = useCookies();
  const navigate = useNavigate();

  if (get("userID")) {
    navigate("/");
  }

  useEffect(() => {
    document.title = "Login | Recipe Hub";
  }, []);

  return (
    <Grid container spacing={"0.25rem"} style={{ padding: "0.25rem" }}>
      <Grid item xs={12} xl={6}>
        <PageHeader content="login" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="thanks for being member of our community" />
      </Grid>
      <Grid item xs={12} xl={6} style={{ height: "45rem", overflow: "hidden" }}>
        <Paper
          style={{
            padding: "10rem",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LoginForm />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        xl={6}
        style={{
          height: "45rem",
          overflow: "hidden",
        }}
      >
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <img src={"/plus18.png"} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;


