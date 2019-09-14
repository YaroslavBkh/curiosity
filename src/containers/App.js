import React, { useContext } from 'react';
// import axios from 'axios';
import './App.css';
// import CamContext from '../context/camContext';
import CameraSelector from '../components/selectors/CameraSelector/CameraSelector';
import DateSelector from '../components/selectors/DateSelector/DateSelector';
import RoverSelector from '../components/selectors/RoverSelector/RoverSelector';

function App() {
  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector />
      <DateSelector />
      <RoverSelector />
    </div>
  );
}

export default App;
