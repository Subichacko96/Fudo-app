import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Box, CardContent } from "@mui/material";

function signup() {
  return (
    <>
      <Container maxWidth="lg" >
        <CssBaseline />
        <Grid container spacing={2} sx={{ mt: 5 ,background: "#E8E7E7",color: "black",p:5}}>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h4"
                  sx={{ fontFamily: "serif" }}
                >
                  Receive payment Quickly from anywhere
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  sx={{ mt: 5 }}
                >
                  Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla
                  enim posuere quis consequat.
                </Typography>
              </CardContent>
            </Box>
          </Grid>
          <Grid xs={6}>
            <div>
              <Typography component="h1" variant="h5" sx={{ mb: 4 }}>
                Get Started For Free
              </Typography>
              <form noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} >
                    <TextField
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="Name"
                      autoFocus
                    />
                  </Grid>
                 
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 5,
                    background: "#F9CD1E",
                    color: "black",
                    textAlign: "center",
                  }}
                >
                  Get Started
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default signup;
