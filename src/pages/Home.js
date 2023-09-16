import TourCard from "../components/TourCard";
import Container from '@mui/material/Container';
import {Typography} from '@mui/material/';
import Grid from '@mui/material/Grid';
import CityList from "../data.json";
import Pagination from '../components/Pagination';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation'

const Home =() =>{
    return <div className="App">
       
      <Container sx={{marginY:5}}>
       
        {CityList.map((city) =>(
          <><Typography 
             variant="h4"
             component="h2"
             marginTop={5}
              marginBottom={3}
            >
                Top {city.name} Tours
            </Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour, index) => (
                <TourCard tour={tour} key={index} />
                ))}
            </Grid>
          
            
          </>
          
        ))}
          <Box marginTop={5} marginLeft={50} marginBottom={10}>
            <Pagination />
          </Box>
          <Paper sx={{position:'fixed', bottom:0, left:0, right:0}} elevation={0}  square={false}>
          <BottomNavigation showLabels sx={{backgroundColor:"#2196f3 "}}></BottomNavigation>
          </Paper>
        
        
      </Container>
    </div>
}

export default Home;