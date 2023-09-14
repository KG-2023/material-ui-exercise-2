// import logo from './logo.svg';
// import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
      <Container>
        <Grid container spacing={1}>
        <TourCard />
        </Grid>
      </Container>
      
    </div>
  );
}

export default App;
