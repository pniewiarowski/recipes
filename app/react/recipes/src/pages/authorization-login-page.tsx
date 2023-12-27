import { Grid, Paper } from "@mui/material";
import { LoginForm, PageHeader } from "../organisms";
import Logo from "../../public/logo.png";

const LoginPage = () => {
  return (
    <Grid container spacing={"0.25rem"} style={{ padding: "0.25rem" }}>
      <Grid item xs={12} xl={6}>
        <PageHeader content="Login" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="thanks for being member of our community" />
      </Grid>
      <Grid item xs={12} xl={6} style={{ height: "270px", overflow: "hidden" }}>
        <Paper
          style={{
            padding: "1rem",
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
          height: "270px",
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
