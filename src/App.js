// import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';
import {Typography} from '@mui/material/'
import CitiesToTravel from './data.json';

function App() {
  return (
    <div className="App">
       <AppBar />
      <Container sx={{marginY:5}}>
        {CitiesToTravel.map((city) =>(
          <>
            <Typography 
             variant="h4"
             component="h2"
             marginTop={5}
              marginBottom={3}
            >Top {city.name} Tours</Typography>
            <Grid container spacing={5}>
              {city.tours.map((tour) => <TourCard tour={tour}/>)}
            </Grid>
          </>
          
        )
        
        )}
        
      

        {/* <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        </Grid> */}
      </Container>
      
    </div>
  );
}

export default App;
