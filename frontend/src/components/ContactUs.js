import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
} from "@mui/material";
import React from "react";

const ContactUs = () => {
  return (
    <Container>
      <Typography align="center" variant="h1">
        Contact Us
      </Typography>
      <Card>
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                placeholder="Enter your name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                placeholder="Enter your last name"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="email"
                label="Email"
                placeholder="Email"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                type="number"
                label="Phone"
                placeholder="Phone"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                rows={4}
                multiline
                label="Message"
                placeholder="Message"
                variant="outlined"
                fullWidth
                required
              ></TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactUs;
