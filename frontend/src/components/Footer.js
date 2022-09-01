import React from "react";
import { Container, Grid, Box, Link } from "@material-ui/core";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import { FooterStyle } from "./ReusableTheme.styled";

const Footer = () => {
  return (
    <FooterStyle>
      <Box px={{ xs: 3, md: 10 }} py={{ xs: 5, md: 10 }} fontWeight="600">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} py={{ xs: 1, md: 2 }}>
                Got Questions?
              </Box>

              <Box>
                <Link href="/contactus" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQs
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} py={{ xs: 1, md: 2 }}>
                Your Account
              </Box>
              <Box>
                <Link href="/login" color="inherit">
                  Login
                </Link>
                <Box>
                  <Link href="/register" color="inherit">
                    Register
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Privacy
                  </Link>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} py={{ xs: 1, md: 2 }}>
                Socials
              </Box>

              <Box>
                <Link href="/contactus" color="inherit">
                  FAQs
                </Link>
              </Box>

              <Box>
                <Link href="/" color="inherit">
                  Our Story
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit" m={12}>
                  <FacebookIcon />
                  <Instagram />
                  <TwitterIcon />
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Synoptic Project - Le Restaurant by Sonia Choudhury &reg;{" "}
            {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
