import {
  Button,
  FormControl,
  Slider,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { recipeResolver, recipeType } from "../resolvers";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useBackend } from "../hooks";
import { JWTContext, UserContext } from "../contexts";

const RecipeForm = (): JSX.Element => {
  const theme: Theme = useTheme();
  const navigate: NavigateFunction = useNavigate();
  const [difficulty, setDifficulty] = useState(50);
  const { user } = useContext(UserContext);
  const { jwt } = useContext(JWTContext);
  const { recipesRepository } = useBackend();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<recipeType>({ resolver: zodResolver(recipeResolver) });

  const marks = [
    {
      value: 10,
      label: "easy",
    },
    {
      value: 40,
      label: "mid",
    },
    {
      value: 65,
      label: "hard",
    },
    {
      value: 90,
      label: "impossible",
    },
  ];

  const onSubmit = async (data: recipeType) => {
    const response = await recipesRepository.create(
      jwt,
      data.title,
      data.description,
      data.preparation,
      difficulty,
      user.entityID,
    );

    navigate(`/recipes/${response.entityID}`);
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
          label={"title"}
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title ? errors.title?.message : ""}
        />
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <TextField
          fullWidth
          multiline
          rows={4}
          label={"description"}
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description ? errors.description?.message : ""}
        />
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <TextField
          fullWidth
          multiline
          rows={8}
          label={"preparation"}
          {...register("preparation")}
          error={!!errors.preparation}
          helperText={errors.preparation ? errors.preparation?.message : ""}
        />
      </FormControl>
      <FormControl style={{ margin: theme.spacing(3) }} fullWidth>
        <Typography>difficulty</Typography>
        <Slider
          defaultValue={50}
          aria-label="difficulty"
          valueLabelDisplay="auto"
          onChange={(event) => setDifficulty(event.target.value)}
          marks={marks}
        />
      </FormControl>
      <FormControl style={{ marginTop: theme.spacing(6), marginBottom: theme.spacing(12) }} fullWidth>
        <Button fullWidth variant={"contained"} type={"submit"}>
          save
        </Button>
      </FormControl>
    </form>
  );
};

export default RecipeForm;
