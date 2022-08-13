import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button, Tabs, Tab, CardActions, Grid } from "@mui/material";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
const ConfigFile = require("../config");
const axios = require("axios").default;

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      categoryName: [],
      categoryitem: [],
      isLoaded: false,
      slugData: "",
      cart:{}
    };
  }
  handleClick = async (slug) => {
    //console.log(data)
    await this.setState({ slugData: slug });
    this.tabClick();
  };

  tabClick = async () => {
    // let slugData = this.state.slugData;

    let response = await axios
      .get(`${ConfigFile.CATEGORY}/${this.state.slugData}`, {})
      .catch(function (error) {
        console.log(error);
      });
    console.log(response, "slug response");

    if (response && response.data !== null) {
      this.setState({
        categoryitem: response.data.data,
        isLoaded: true,
      });
    } else if (response && response.data.statusCode !== 200) {
      this.setState({
        error: true,
        errorCode: response.data.msg,
      });
    } else {
      this.setState({
        status: false,
      });
    }
    // console.log(this.state.categorynews,"🏑")
  };
  CategoryList = async () => {
    let response = await axios
      .get(`${ConfigFile.CATEGORY}`, {})
      .then((response) => {
        if (
          !response ||
          response.data === null ||
          response.data.data.length === 0
        ) {
          return null;
        }
        console.log(response, "data here");
        this.setState({
          categoryName: response.data.data,
          isLoaded: true,
        });
        console.log(this.state.categoryName, "not loadinggg");
        return axios.get(
          `${ConfigFile.CATEGORY}/${response.data.data[0].slug}`,
          {}
        );
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(response,"🧃🧃🧃")

    if (
      response === null ||
      response.data === null ||
      response.status !== 200
    ) {
      this.setState({
        status: false,
      });
    } else {
      this.setState({
        categoryitem: response.data.data,
        isLoaded: true,
      });
      console.log(this.state.categoryitem, "🎂🎂🎂");
    }
  };
  categoryTabs = () => {
    return (
      <>
        {this.state.categoryName &&
          this.state.categoryName.map((data, key) => {
            return (
              <>
                <Tab variant="outlined"
                  label={data.slug}
                  sx={{ color: "black", background: "#F9CD1E",color:"black", m:3, ':hover': {
                    bgcolor: 'primary.main', 
                    color: 'white',
                  },}}
                  onClick={() => this.handleClick(data.slug)}
                  wrapped
                />
              </>
            );
          })}
      </>
    );
  };
  categoryContent = () => {
    if(this.state.categoryitem===null||this.state.categoryitem.length===0){
      return (
        <>
         <Stack spacing={1} sx={{mt:3,mr:3}}>
     
      <Skeleton variant="rectangular" width={210} height={100} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
     
    </Stack>
    <Stack spacing={1} sx={{mt:3}}>
     
      <Skeleton variant="rectangular" width={210} height={100} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
     
    </Stack>
        </>
      );
    }
    return (
      <>
        {this.state.categoryitem &&
          this.state.categoryitem.map((data, key) => {
            return (
              <>

                 <Card sx={{ maxWidth:350, mt: 3,mr:2,flex:1}}>
               <CardMedia
                  component="img"
                  height="140"
                  image={data.image}
                  alt={data.slug}
                />
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {data.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {data.currency}  {data.price}
                  </Typography>
                </CardContent>
                <CardActions>
                 
                  <Button size="small">Add To Cart</Button>
                </CardActions>
                </Card>
              </>
            );
          })}
      </>
    );
  };
  componentDidMount() {
    this.CategoryList();
  }
  render() {
    if (this.state.isLoaded) {
      return (
        <>
          {/* new code */}
          <Container maxWidth="lg" sx={{ justifyContent: "flex-start", pt: 5 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 4 }} >
              <Tabs aria-label="basic tabs example">
                <this.categoryTabs />
              </Tabs>
              <div style={{display: 'flex', flexDirection: 'row'}}>
              <this.categoryContent />
              </div>
              
            </Box>
          </Container>
        </>
      );
    } else {
      return null;
    }
  }
}
