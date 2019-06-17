import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import CameraSelector from '../components/CameraSelector/CameraSelector';

function App() { 
  const [camera, setCamera] = useState([{ camera : "all" }]); //Default API value
  const passCamera = (event) => {
    setCamera(event.target.value);
  }
  
  const getData = () => {
    axios.get('http://localhost:5000/lol')
    .then(res => {
      let users = res.data;
      setCamera(users);
    })
  }

  getData();

  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector handleChange={passCamera}/>
    </div>
  );
}

export default App;
