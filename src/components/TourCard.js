import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const TourCard = () =>{
  return (
    <Grid item xs={3}>
       
        <Paper elevation={10}  square> TEST HELLO WORLD! </Paper>
        <Paper elevation={10}  square> 
          <img src="https://raw.githubusercontent.com/KG-2023/Activity-Images-2023/ec633589ea59e21cc1d3aca3e84cc9ab7a7ce0ba/pexels-balaji-srinivasan-3936815.jpg" className="paperImage" />
          
          <Typography variant="h2" component="h2">
            Tabung Hampi
          </Typography>

        </Paper>
    </Grid>
    
  )
}


export default TourCard;
