import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AccessTime from '@mui/icons-material/AccessTime';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider  } from '@mui/material/';
import BookNow from './Modal';
import BottomNavigation from '@mui/material/BottomNavigation'

const theme = createTheme({
      components:{
        MuiTypography: {
          variants: [
            {
              props : {
                variant: "body2",
              },
              style:{
                  fontSize: 11,
                }
            },
            {
              props: {
                variant: "body3",
              },
              style: {
                fontSize: 9,
                
              }
            }
          ]
        }
      }
});


const TourCard = ({tour}) =>{
  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme}>
            <Paper elevation={10}  square> 
              {/* <img src="https://raw.githubusercontent.com/KG-2023/Activity-Images-2023/ec633589ea59e21cc1d3aca3e84cc9ab7a7ce0ba/pexels-balaji-srinivasan-3936815.jpg" className="paperImage" /> */}
              <img className="paperImage" src={tour.image} />
              <Box paddingX={1}>
                <Typography variant="subtitle1" component="h2">
                
                {tour.name}
                </Typography>
              </Box>
              <Box paddingX={5}
                sx={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <AccessTime sx={{width:12.5}} />
                <Typography variant='body2' component='p' marginLeft={0.5}>
                {tour.duration} hours
                </Typography>
              </Box>
              <Box marginTop={3}
                sx={{
                  display: "flex",
                  alignItms: "center"
                }}
              >
                <Rating name="read-only" value={4.5} readOnly precision={0.5} />
                <Typography variant="body2" component="p" marginLeft={0.5}> {tour.rating}</Typography>
                <Typography variant="body3" component="p" marginLeft={1.5}>( {tour.numberOfReviews})</Typography>
                
              </Box>
              <Box>
              <Typography variant="h6" component="h3" marginLeft={1.5}>From Php 1000</Typography>
              </Box>
              <BottomNavigation>
                <BookNow />
              </BottomNavigation>

            </Paper>
        </ThemeProvider>
        
        
    </Grid>
    
  )
}


export default TourCard;
