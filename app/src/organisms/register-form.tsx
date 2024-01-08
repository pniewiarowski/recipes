import {
  Button,
  FormControl,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { registerResolver, registerType } from "../resolvers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useBackend, useCookies } from "../hooks";
import { useContext } from "react";
import { UserContext } from "../contexts";

const RegisterForm = (): JSX.Element => {
  const theme = useTheme();
  const { authorizationRepository } = useBackend();
  const { set } = useCookies();
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>({ resolver: zodResolver(registerResolver) });

  const onSubmit = async (data: registerType) => {
    const response = await authorizationRepository.register(
      data.name,
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
          label={"name"}
          {...register("name")}
          error={!!errors.name}
          helperText={errors.name ? errors.name?.message : ""}
        />
      </FormControl>
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
          fullWidth
          type={"password"}
          label={"password"}
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password ? errors.password?.message : ""}
        />
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <TextField
          fullWidth
          type={"password"}
          label={"repeat password"}
          {...register("repeatPassword")}
          error={!!errors.repeatPassword}
          helperText={
            errors.repeatPassword ? errors.repeatPassword?.message : ""
          }
        />
      </FormControl>
      <FormControl
        style={{ margin: theme.spacing(5), textAlign: "left" }}
        fullWidth
      >
        <Typography variant="body1">
          already have account? click{" "}
          <Link
            style={{
              textDecoration: "none",
              color: theme.palette.secondary.main,
              fontWeight: 900,
            }}
            to={"/authentication/login"}
          >
            HERE
          </Link>{" "}
          to register! to register!
        </Typography>
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <Button fullWidth variant={"contained"} type={"submit"}>
          register
        </Button>
      </FormControl>
    </form>
  );
};

export default RegisterForm;
