import TourCard from "../components/TourCard";
import Container from '@mui/material/Container';
import {Typography} from '@mui/material/';
import Grid from '@mui/material/Grid';
import CityList from "../data.json";


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
      </Container>
    </div>
}

export default Home;