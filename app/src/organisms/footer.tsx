import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import {
  FooterColumn,
  FooterColumnHeader,
  FooterColumnItem,
  FooterColumnItemContainer,
  FooterContainer,
} from "../molecules";
import { Link } from "react-router-dom";
import Logo from "../../public/logo.png";

const Footer = () => {
  const theme = useTheme();

  return (
    <FooterContainer>
      <Grid container spacing={"0.2rem"}>
        <Grid item xs={12} md={6} xl={3}>
          <FooterColumn>
            <FooterColumnHeader>Account</FooterColumnHeader>
            <FooterColumnItemContainer>
              <FooterColumnItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                  to={"/authentication/login"}
                >
                  login
                </Link>
              </FooterColumnItem>
              <FooterColumnItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                  to={"/authentication/register"}
                >
                  register
                </Link>
              </FooterColumnItem>
              <FooterColumnItem>settings</FooterColumnItem>
              <FooterColumnItem>logout</FooterColumnItem>
            </FooterColumnItemContainer>
          </FooterColumn>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <FooterColumn>
            <FooterColumnHeader>Recipes</FooterColumnHeader>
            <FooterColumnItemContainer>
              <FooterColumnItem>search</FooterColumnItem>
              <FooterColumnItem>all</FooterColumnItem>
              <FooterColumnItem>report</FooterColumnItem>
              <Link
                style={{
                  textDecoration: "none",
                  color: theme.palette.secondary.main,
                }}
                to={"/recipes/add"}
              >
                <FooterColumnItem>add new</FooterColumnItem>
              </Link>
            </FooterColumnItemContainer>
          </FooterColumn>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <FooterColumn>
            <FooterColumnHeader>Application</FooterColumnHeader>
            <FooterColumnItemContainer>
              <FooterColumnItem>report bug</FooterColumnItem>
              <FooterColumnItem>donate our community</FooterColumnItem>
              <FooterColumnItem>job offers</FooterColumnItem>
              <FooterColumnItem>request for feature</FooterColumnItem>
            </FooterColumnItemContainer>
          </FooterColumn>
        </Grid>
        <Grid item xs={12} md={6} xl={3}>
          <FooterColumn>
            <FooterColumnHeader>Social Media</FooterColumnHeader>
            <FooterColumnItemContainer>
              <FooterColumnItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                  to={"https://youtube.com"}
                >
                  youtube
                </Link>
              </FooterColumnItem>
              <FooterColumnItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                  to={"https://facebook.com"}
                >
                  facebook
                </Link>
              </FooterColumnItem>
              <FooterColumnItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                  to={"https://instagram.com"}
                >
                  instagram
                </Link>
              </FooterColumnItem>
              <FooterColumnItem>
                <Link
                  style={{
                    textDecoration: "none",
                    color: theme.palette.secondary.main,
                  }}
                  to={"https://pornhub.com"}
                >
                  pornhub
                </Link>
              </FooterColumnItem>
            </FooterColumnItemContainer>
          </FooterColumn>
        </Grid>
        <Grid item xl={12}>
          <Box style={{ textAlign: "right", margin: "2rem 1.5rem 0 1.5rem" }}>
            <Typography variant={"body1"}>
              Copyright© 2024...anyway, we don't care.
            </Typography>
            <Typography variant={"body1"}>
              Realizated by Paweł Niewiarowski, Paweł Rudź and Konrad Jankowski.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;
