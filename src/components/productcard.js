import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';


export default function productcard() {
  return (

    <Container maxWidth="lg" sx={{ justifyContent:"flex-start"}}>
     <Card square={true} sx={{ display: 'flex',background:"white",boarder:"none", boxShadow: "none",mt:5,pt:3}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h3" sx={{fontFamily: 'serif'}}>
          Different Spice For A Different Taste
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div" sx={{mt:5}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, nulla  
enim posuere quis consequat. 

          </Typography>
     
        <Button variant="contained" sx={{mt:5,background:"#F9CD1E",color:"black",}}>Get Started</Button>

        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
         
         
          
        </Box>
      </Box>
      <CardMedia
        component="img"
        image="../images/Sliderfood.png"
        alt="Food"
      />
    </Card>
    </Container>
  );
}
