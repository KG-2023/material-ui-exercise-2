// import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
       <AppBar />
      <Container sx={{marginY:5}}>
       
        <Grid container spacing={5}>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
