import React, { useState } from 'react';
import './App.css';
import CameraSelector from '../components/CameraSelector/CameraSelector'

function App() { 
  const [camera, setCamera] = useState("all"); //Default API value
  const passCamera = (event) => {
    setCamera(event.target.value);
  }
  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector onChange={passCamera} camera={camera}/>
    </div>
  );
}

export default App;
