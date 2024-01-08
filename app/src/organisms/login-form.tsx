import {
  Button,
  FormControl,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { loginResolver, loginType } from "../resolvers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useBackend, useCookies } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../contexts";

const LoginForm = (): JSX.Element => {
  const theme: Theme = useTheme();
  const { authorizationRepository } = useBackend();
  const { set } = useCookies();
  const { setUser } = useContext(UserContext);
  const navigate: NavigateFunction = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({ resolver: zodResolver(loginResolver) });

  const onSubmit = async (data: loginType) => {
    const response = await authorizationRepository.login(
      data.email,
      data.password
    );

    setUser(response.user);

    set("userID", response.user.entityID);
    set("userEmail", response.user.email);
    set("userName", response.user.name);

    navigate("/");
    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <TextField
          fullWidth
          label={"email"}
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email ? errors.email?.message : ""}
        />
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <TextField
          type="password"
          fullWidth
          label={"password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password?.message : ""}
        />
      </FormControl>
      <FormControl
        fullWidth
        style={{ margin: theme.spacing(5), textAlign: "left" }}
      >
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
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <Button fullWidth variant={"contained"} type={"submit"}>
          login
        </Button>
      </FormControl>
    </form>
  );
};

export default LoginForm;
