import React, { useContext } from 'react';
// import axios from 'axios';
import './App.css';
// import CamContext from '../context/camContext';
import CameraSelector from '../components/CameraSelector/CameraSelector';
import DateSelector from '../components/DateSelector/DateSelector';

function App() {
  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector />
      <DateSelector />
    </div>
  );
}

export default App;
