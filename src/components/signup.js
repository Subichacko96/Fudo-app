import React, { Component } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container, Box, CardContent,Alert } from "@mui/material";
const ConfigFile = require("../config");
const axios = require("axios").default;

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: "",
          name:"",
          success: false,
          email:"",
          password:""
        };
      }
      handleChange = async (e) => {
         await this.setState({
           [e.target.name]: e.target.value,
         });
         console.log(this.state)
         
       };
       addToItem = async (e) => {
        let obj = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          };
         console.log(obj, "🎁🎁🎁🎁🎁🎁");
          this.PostRegister(obj);
    
      };
      PostRegister = async (data) => {
        let response = await axios
          .post(`${ConfigFile.SIGNUP}`, data,{})
          .catch(function (error) {
            console.log(error);
            return error
          });
         console.log(response, "🎈🎈🎈🎈🎈🎈🎈✔");
        
        if (response && response.status === 201) {
          this.setState({
            success: true,
            message: response.data.message,
          });
          //console.log(this.state,  "🎈🎈🎈🎈🎈✔");
        } else if (response && response.status !== 201) {
          this.setState({
            message: "Error Occured",
            sucess:false
          });
          console.log("this is end")
        } 
         console.log(response,"🎈🎈🎈🎈🎈🎈🎈✔");
        
      };
      Alert = () => {
        if(this.state.message){
            if (this.state.success) {
                return (
                  <Alert severity="success">{this.state.message}</Alert>
                );
              } else if(!this.state.success){
                return (
                  <Alert severity="error">Error Occured</Alert>
                );
              } 
        }
      
      };
      
      render(){ 
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
                          name="name" onChange={this.handleChange}
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
                          variant="outlined" onChange={this.handleChange}
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
                          variant="outlined" onChange={this.handleChange}
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
                      }}  onClick={this.addToItem}
                    >
                      Get Started
                    </Button>
                    <this.Alert/>
                  </form>
                </div>
              </Grid>
            </Grid>
            
          </Container>
        </>
      );}
  
}


