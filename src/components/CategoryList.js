import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Button,Tabs,Tab,CardActions} from '@mui/material';


export default function CategoryList() {

  return (
   <>
 
 {/* new code */}
 <Container maxWidth="lg" sx={{ justifyContent:"flex-start",pt:5}}>
 <Box sx={{ borderBottom: 1, borderColor: 'divider' ,mt:4}}>
  <Tabs 
  value={"tab val"} 
//   onChange={handleChange} 
  aria-label="basic tabs example">
    <Tab label="Item One" sx={{color:"black",background:"gray"}} wrapped/>
    <Tab label="Item Two" sx={{color:"black"}}/>
    <Tab label="Item Three" sx={{color:"black"}}/>
  </Tabs>
  <Card sx={{ maxWidth: 345,mt:3}}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</Box>

 </Container>
 

 
 
 
 </>
  );
}
