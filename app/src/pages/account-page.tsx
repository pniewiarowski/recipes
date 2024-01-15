import { Grid, Paper, Theme, useTheme } from "@mui/material";
import { PageHeader } from "../organisms";
import { UserContext } from "../contexts";
import { useContext } from "react";
import { AccountDetails } from "../organisms";

const AccountPage = (): JSX.Element => {
  const theme: Theme = useTheme();
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <Grid
        container
        spacing={theme.spacing(0.75)}
        style={{ padding: theme.spacing(0.75) }}
      >
        <Grid item xs={12}>
          <PageHeader content="your are not logged" />
        </Grid>
      </Grid>
    );
  }

  return (
    <Grid
      container
      spacing={theme.spacing(0.75)}
      style={{ padding: theme.spacing(0.75) }}
    >
      <Grid item xs={12} xl={6}>
        <PageHeader content={`${user.name}`} />
      </Grid>
      <Grid item xs={12} xl={6}>
        <PageHeader content="your account" />
      </Grid>
      <Grid item xs={12} xl={6}>
        <AccountDetails user={user} />
      </Grid>
      <Grid
        item
        xs={12}
        xl={6}
        style={{
          height: "16.5rem",
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

export default AccountPage;
