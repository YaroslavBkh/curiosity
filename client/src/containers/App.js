import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CameraSelector from '../components/CameraSelector/CameraSelector';

function App() { 
  const [camera, setCamera] = useState([{ camera : "all" }]); //Default API value
  const [users, setUsers] = useState([{ users : ''}]);
  const passCamera = (event) => {
    setCamera(event.target.value);
  }
  
  useEffect(() => {
    const fetchUsers = async () => axios.get('http://localhost:5000/')
    .then(res => {
      setUsers(res.data);
    });
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <h1>Les do dis</h1>
      <CameraSelector handleChange={passCamera}/>
      <div>{users.map((users, index) => <p key={index}>{users.index}</p>)}</div>
      {/* <button onClick={fetchUsers}>Get users</button> */}
    </div>
  );
}

export default App;
