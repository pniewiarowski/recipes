import { Grid, Paper } from "@mui/material";
import { PageHeader, RegisterForm } from "../organisms";

const RegisterPage = () => {
  return (
    <Grid container spacing={"0.25rem"} style={{ padding: "0.25rem" }}>
      <Grid item xs={12} xl={6}>
        <PageHeader content="Register" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="join to our community!" />
      </Grid>
      <Grid item xs={12} xl={6} style={{ height: "400px", overflow: "hidden" }}>
        <Paper
          style={{
            padding: "1rem",
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RegisterForm />
        </Paper>
      </Grid>
      <Grid item xs={12} xl={6} style={{ height: "400px", overflow: "hidden" }}>
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

export default RegisterPage;
