import React, { useContext } from 'react';
// import axios from 'axios';
import './App.css';
import CamContext from '../context/camContext';
import CameraSelector from '../components/CameraSelector/CameraSelector';

function App() {
  const camContext = useContext(CamContext);
  const { setCam } = camContext;

  const passCamera = event => {
    setCam(event.target.value);
  };

  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector handleChange={passCamera} />
    </div>
  );
}

export default App;
