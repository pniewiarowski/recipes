import { styled } from "@mui/material";

const FooterContainer = styled("div")(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "0",
  backgroundColor: "#000",
  padding: theme.spacing(10),
}));

export default FooterContainer;
