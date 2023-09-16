// import logo from './logo.svg';
import './App.css';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route exact path="/material-ui-exercise-2" element={<Home />} />
        <Route path="/material-ui-exercise-2/:id" element={<Tour />}/>
      </Routes>
    </Router>
  );
}

export default App;
