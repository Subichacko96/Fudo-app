import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Container} from '@mui/material';
import Avatar from '@mui/material/Avatar';

export default function contact() {
  return (
    <Container maxWidth="lg" sx={{ display: 'flex',background:"white",boarder:"none", boxShadow: "none"}}>
    <Card sx={{ maxWidth: 300,m:5}}>
      <CardActionArea sx={{}}>
      <Avatar alt="Calender"  src="../images/Calendar.png"  sx={{ width: 66, height: 66 ,p:1}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 300 ,m:5}}>
      <CardActionArea>
      <Avatar alt="Calender"  src="../images/Calendar.png"  sx={{ width: 66, height: 66 ,p:1}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 300,m:5 }}>
      <CardActionArea>
      <Avatar alt="Calender"  src="../images/Calendar.png"  sx={{ width: 66, height: 66 ,p:1}}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Container>
  );
}
