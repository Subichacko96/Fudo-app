import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
const ConfigFile = require("../config");
const axios = require("axios").default;

export default class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      contact:[],
    };
  }

  GetContact = async () => {
    let response = await axios
      .get(`${ConfigFile.CONTACT}`, {})
      .catch(function (error) {
        console.log(error);
      });
    if (response && response.data !== null) {
      this.setState({
        contact: response.data,
      });
    } else if (response && response.data.statusCode !== 200) {
      this.setState({
        message: response.data.message,
      });
    } else {
      this.setState({
        status: false,
      });
    }
    // console.log(this.state.singlenews, "hai");
  };
  ContactData = () => {
    return (
      <>
        {this.state.contact &&
          this.state.contact.data &&
          this.state.contact.data.map((details, key) => {
            return (
              <>
                <Card sx={{ maxWidth: 360, m: 5 }}>
                  <CardActionArea sx={{textAlign:"center"}}>
                    <Avatar
                      alt="Calender"
                      src={details.icon}
                      sx={{ width: 66, height: 66, p: 1,ml:12,pt:1}}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" sx={{p:1}}>
                        {details.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {details.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </>
            );
          })}
      </>
    );
  };
  componentDidMount() {
    this.GetContact();
  }
  render() {
    return (
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          background: "white",
          boarder: "none",
          boxShadow: "none",
        }}
      >
        <this.ContactData />
      </Container>
    );
  }
}
